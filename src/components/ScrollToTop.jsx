import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
        // Prevent browser from restoring scroll position
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }

        // Instantly jump to top before paint
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}
