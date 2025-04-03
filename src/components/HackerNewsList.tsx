import React from "react"
import { useHackerNewsArticles } from "../hooks/useHackerNewsArticles"
import { HackerNewsArticle } from "../types"
import { Box, LinearProgress, Typography } from "@mui/material"

export const HackerNewsList: React.FC = () => {
	const { data, isLoading, isError, error } = useHackerNewsArticles()

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
				<Typography variant="h4">Loading articles...</Typography>
				<LinearProgress />
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
				<Typography variant="h4">Error: {error?.message}</Typography>
			</Box>
		)
	}

	if (data) {
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
				{data?.articles?.map((article: HackerNewsArticle) => (
					<Box
						key={article.id}
						sx={{
							padding: 2,
							width: "350px",
							marginBottom: 2,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							backgroundColor: "#f0f0f0",
							border: "1px solid #ccc",
							borderRadius: 2,
							boxShadow: 3,
						}}
					>
						<Typography variant="h6" sx={{ fontWeight: "bold" }}>
							Article ID: {article.id}
						</Typography>
						<Typography variant="body1">Time Stamp: {article.time}</Typography>
					</Box>
				))}
			</Box>
		)
	} else {
		return (
			<div>
				<p>No data</p>
			</div>
		)
	}
}
