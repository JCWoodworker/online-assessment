import { Typography, Card, Box, Link } from "@mui/material"
import { HackerNewsArticle } from "../hooks/useHackerNewsArticles"

const ArticleCard = ({
	article,
}: {
	article: HackerNewsArticle
	index: number
}) => {
	return (
		<Link
			href={article.url}
			target="_blank"
			rel="noopener noreferrer"
			sx={{
				textDecoration: "none",
				color: "inherit",
			}}
		>
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
					"&:hover": {
						color: "rgb(255, 0, 180)",
						backgroundColor: "rgba(255, 0, 180, 0.1)",
						cursor: "pointer",
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
						variant="body2"
						sx={{
							padding: "5px 10px",
							fontWeight: "bold",
							position: "absolute",
							top: "8px",
							left: "8px",
							color: "rgb(255, 0, 180)",
							backgroundColor: "rgba(255, 0, 180, 0.1)",
							borderRadius: "5px",
						}}
					>
						{`#${article.position} - ID: ${article.id}`}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							marginTop: "30px",
							fontWeight: "bold",
							textAlign: "center",
							maxWidth: "200px",
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}
					>
						{article.title.length > 30
							? `${article.title.substring(0, 30)}...`
							: article.title}
					</Typography>
				</Box>
				<Typography variant="body1">{article.time}</Typography>
			</Card>
		</Link>
	)
}

export default ArticleCard
