import React from "react"
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

// Create a responsive theme
let theme = createTheme()
theme = responsiveFontSizes(theme)

export const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Box
					sx={{
						marginTop: 4,
						padding: 2,
						textAlign: "center",
						borderRadius: 2,
						backgroundColor: "rgb(126, 195, 255)",
					}}
				>
					<Typography variant="h2">Hacker News</Typography>
					<Typography variant="h4">- 100 Latest Articles -</Typography>
				</Box>
				<HackerNewsList />
			</QueryClientProvider>
		</ThemeProvider>
	)
}

export default App
