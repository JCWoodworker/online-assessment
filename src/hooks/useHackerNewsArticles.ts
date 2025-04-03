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
	const endpoint = import.meta.env.VITE_API_PREPROD_URL

	try {
		const response = await fetch(endpoint, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const data = await response.json()

		if (!data || !data.articles || !Array.isArray(data.articles)) {
			return {
				articles: [],
				isSorted: false,
			}
		}

		const startIndex = (page - 1) * limit
		const endIndex = startIndex + limit
		return {
			articles: data.articles.slice(startIndex, endIndex),
			isSorted: data.isSorted || false,
		}
	} catch (error) {
		console.error("Error fetching Hacker News articles:", error)
		return {
			articles: [],
			isSorted: false,
		}
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
