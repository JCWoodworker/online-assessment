import { Button } from "@mui/material"

const PaginationButton = ({
	title,
	currentPage,
	setCurrentPage,
	totalPages,
}: {
	title: "Previous" | "Next"
	currentPage: number
	setCurrentPage: (page: number) => void
	totalPages: number
}) => {
	const onButtonClick = {
		Previous: () => setCurrentPage(Math.max(currentPage - 1, 1)),
		Next: () => setCurrentPage(Math.min(currentPage + 1, totalPages)),
	}
	return (
		<Button
			onClick={onButtonClick[title]}
			disabled={
				(title === "Previous" && currentPage === 1) ||
				(title === "Next" && currentPage === totalPages)
			}
			sx={{
				fontWeight: "bold",
			}}
		>
			{title}
		</Button>
	)
}

export default PaginationButton
