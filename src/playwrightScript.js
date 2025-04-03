import { chromium } from "playwright"

async function sortHackerNewsArticles() {
	let browser
	try {
		browser = await chromium.launch({
			headless: true,
		})

		const context = await browser.newContext()
		const page = await context.newPage()

		let allArticles = []
		let nextParam = null
		let startIndex = 1

		while (allArticles.length < 100) {
			const url = nextParam
				? `https://news.ycombinator.com/newest?next=${nextParam}&n=${startIndex}`
				: "https://news.ycombinator.com/newest"

			await page.goto(url)

			const currentPageArticles = await page.$$eval(
				".submission",
				(elements) => {
					return elements.map((article) => {
						return {
							id: article.getAttribute("id"),
							time: article.nextElementSibling
								.querySelector(".age")
								.getAttribute("title"),
						}
					})
				}
			)

			allArticles = [...allArticles, ...currentPageArticles]

			if (currentPageArticles.length > 0) {
				nextParam = currentPageArticles[currentPageArticles.length - 1].id
				startIndex = allArticles.length + 1
			} else {
				break
			}
		}

		allArticles = allArticles.slice(0, 100)
		console.log(allArticles)

		let isSorted = true
		for (let i = 1; i < allArticles.length; i++) {
			const prevTime = new Date(allArticles[i - 1].time)
			const currTime = new Date(allArticles[i].time)
			if (prevTime < currTime) {
				console.log(`Sorting error at article ${allArticles[i].id}`)
				isSorted = false
				break
			}
		}
	} catch (error) {
		console.error("Error details:", error)
	} finally {
		if (browser) {
			await browser.close()
		}
	}
}

const run = async () => {
	try {
		await sortHackerNewsArticles()
	} catch (error) {
		console.error("Top level error:", error)
	}
}

run()
