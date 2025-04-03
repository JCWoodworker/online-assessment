import React from "react"
import { useHackerNewsArticles } from "../hooks/useHackerNewsArticles"
import { Box, CircularProgress, Typography } from "@mui/material"
import { HackerNewsArticle } from "../hooks/useHackerNewsArticles"

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
				{data?.articles?.map((article: HackerNewsArticle, index: number) => (
					<Box
						key={article.id}
						sx={{
							margin: 1,
							padding: 2,
							width: "300px",
							height: "80px",
							marginBottom: 2,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
							backgroundColor: "#f0f0f0",
							border: "1px solid #ccc",
							borderRadius: 2,
							boxShadow: 5,
							opacity: 0,
							animation: "fadeIn 0.5s ease-in forwards",
							animationDelay: `${index * 0.05}s`,
							"@keyframes fadeIn": {
								"0%": {
									opacity: 0,
									transform: "translateY(20px)",
								},
								"100%": {
									opacity: 1,
									transform: "translateY(0)",
								},
							},
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								gap: 1,
								textAlign: "center",
							}}
						>
							<Typography
								variant="h6"
								sx={{
									fontWeight: "bold",
									textDecoration: "underline",
								}}
							>
								Article ID:
							</Typography>
							<Typography
								variant="body1"
								sx={{
									padding: "5px 10px",
									backgroundColor: "rgba(255, 0, 180, 0.1)",
									color: "rgb(255, 0, 180)",
									borderRadius: 1,
									fontWeight: "bold",
								}}
							>
								{article.id}
							</Typography>
						</Box>
						<Typography variant="body1">{article.time}</Typography>
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
