import { useQuery } from "@tanstack/react-query"

export interface HackerNewsResponse {
	articles: HackerNewsArticle[]
	isSorted: boolean
}

export interface UseHackerNewsArticlesResult {
	data: HackerNewsResponse | undefined
	isLoading: boolean
	isError: boolean
	error: Error | null
	totalArticles: number
}

export interface HackerNewsArticle {
	id: string
	time: string
}

const fetchHackerNewsArticles = async (
	page: number,
	limit: number
): Promise<HackerNewsResponse> => {
	const website =
		import.meta.env.VITE_ENVIRONMENT === "production"
			? "https://nestjs-mega-backend-prod-893a099fba68.herokuapp.com/api/v1/scrapers/hacker-news-scraper/"
			: "http://localhost:3000/api/v1/scrapers/hacker-news-scraper/"

	const response = await fetch(website, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
	const data = await response.json()

	const startIndex = (page - 1) * limit
	const endIndex = startIndex + limit
	return {
		articles: data.articles.slice(startIndex, endIndex),
		isSorted: data.isSorted,
	}
}

export function useHackerNewsArticles(
	page: number,
	limit: number
): UseHackerNewsArticlesResult {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["hackerNewsArticles", page],
		queryFn: () => fetchHackerNewsArticles(page, limit),
		staleTime: 5 * 60 * 1000,
		gcTime: 30 * 60 * 1000,
		placeholderData: (previousData) => previousData,
	})

	return {
		data,
		isLoading,
		isError,
		error,
		totalArticles: 100,
	} as UseHackerNewsArticlesResult
}
