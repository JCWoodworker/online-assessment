import { useQuery } from "@tanstack/react-query"
import { HackerNewsArticle } from "../types"

interface HackerNewsResponse {
	articles: HackerNewsArticle[]
	isSorted: boolean
}

interface UseHackerNewsArticlesResult {
	data: HackerNewsResponse | undefined
	isLoading: boolean
	isError: boolean
	error: Error | null
}

const fetchHackerNewsArticles = async (): Promise<HackerNewsResponse> => {
	const website = "http://localhost:3000/api/v1/scrapers/hacker-news-scraper/"
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
