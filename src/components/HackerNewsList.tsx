import React, { useState } from "react"
import { useHackerNewsArticles } from "../hooks/useHackerNewsArticles"
import { Box, CircularProgress, Typography } from "@mui/material"
import { HackerNewsArticle } from "../hooks/useHackerNewsArticles"
import ArticleCard from "./ArticleCard"
import Pagination from "./pagination/Pagination"

export const HackerNewsList: React.FC = () => {
	const [page, setPage] = useState(1)
	const limit = 10
	const { data, isLoading, isError, error, totalArticles } =
		useHackerNewsArticles(page, limit)

	if (isLoading) {
		return (
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					gap: 1,
				}}
			>
				<Typography variant="h5" sx={{ color: "rgb(253, 124, 214)" }}>
					Loading articles...
				</Typography>
				<CircularProgress />
			</Box>
		)
	}

	if (isError) {
		return (
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					gap: 1,
				}}
			>
				<Typography variant="h4" sx={{ color: "rgb(253, 124, 214)" }}>
					Error: {error?.message}
				</Typography>
			</Box>
		)
	}

	return (
		<Box
			sx={{
				marginTop: 4,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 4,
			}}
		>
			<Pagination
				currentPage={page}
				setCurrentPage={setPage}
				totalPages={Math.ceil(totalArticles / limit)}
			/>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					gap: 1,
				}}
			>
				{data?.articles.map((article: HackerNewsArticle, index: number) => (
					<ArticleCard
						key={article.id}
						article={article}
						index={(page - 1) * limit + index}
					/>
				))}
			</Box>
		</Box>
	)
}
