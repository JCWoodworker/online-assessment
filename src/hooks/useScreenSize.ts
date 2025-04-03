import { useState, useEffect } from "react"

type DeviceType = "mobile" | "tablet" | "desktop"

const useScreenSize = (): DeviceType => {
	const [deviceType, setDeviceType] = useState<DeviceType>("desktop")

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth

			if (width < 768) {
				setDeviceType("mobile")
			} else if (width >= 768 && width < 1024) {
				setDeviceType("tablet")
			} else {
				setDeviceType("desktop")
			}
		}

		handleResize()

		window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return deviceType
}

export default useScreenSize
