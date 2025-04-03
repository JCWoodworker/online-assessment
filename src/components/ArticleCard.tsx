import { Typography, Card, Box } from "@mui/material"
import { HackerNewsArticle } from "../hooks/useHackerNewsArticles"

const ArticleCard = ({
	article,
	index,
}: {
	article: HackerNewsArticle
	index: number
}) => {
	return (
		<Card
			sx={{
				margin: 1,
				padding: 2,
				key: article.id,
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
					}}
				>
					{`Article ${index + 1}:`}
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
					ID: {article.id}
				</Typography>
			</Box>
			<Typography variant="body1">{article.time}</Typography>
		</Card>
	)
}

export default ArticleCard
