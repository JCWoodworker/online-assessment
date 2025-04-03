import React from "react"
import "./App.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HackerNewsList } from "./components/HackerNewsList"
import {
	Box,
	Typography,
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
} from "@mui/material"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 2,
			refetchOnWindowFocus: false,
		},
	},
})

let theme = createTheme()
theme = responsiveFontSizes(theme)

export const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Box
					sx={{
						marginTop: 2,
						padding: 2,
						textAlign: "center",
					}}
				>
					<Typography
						variant="h2"
						sx={{ color: "rgb(98, 234, 255)", fontWeight: "bold" }}
					>
						Hacker News
					</Typography>
					<Typography variant="h4" sx={{ color: "white" }}>
						- 100 Latest Articles -
					</Typography>
				</Box>
				<HackerNewsList />
			</QueryClientProvider>
		</ThemeProvider>
	)
}

export default App
