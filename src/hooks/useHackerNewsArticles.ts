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
}
export interface HackerNewsArticle {
	id: string
	time: string
}

const fetchHackerNewsArticles = async (): Promise<HackerNewsResponse> => {
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
	return data
}

export function useHackerNewsArticles(): UseHackerNewsArticlesResult {
	return useQuery<HackerNewsResponse, Error>({
		queryKey: ["hackerNewsArticles"],
		queryFn: fetchHackerNewsArticles,
		staleTime: 5 * 60 * 1000,
		gcTime: 30 * 60 * 1000,
	}) as UseHackerNewsArticlesResult
}
