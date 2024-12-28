import { FIXED_PAGES_CONFIG } from "@/config/portal.config"

// Handle fixed routes in middleware to allow access
export const availableFixRoutes = Array.from(
    new Set(
        [
            '/', //exception for base route
            ...Object.keys(FIXED_PAGES_CONFIG)
                .filter((key) => FIXED_PAGES_CONFIG[key as keyof typeof FIXED_PAGES_CONFIG].enable)
                .map((key) => FIXED_PAGES_CONFIG[key as keyof typeof FIXED_PAGES_CONFIG].route),
        ]
    )
)

// Handle fixed routes in middleware to block access
export const disabledFixRoutes = Array.from(
    new Set(
        Object.keys(FIXED_PAGES_CONFIG)
            .filter((key) => !FIXED_PAGES_CONFIG[key as keyof typeof FIXED_PAGES_CONFIG].enable)
            .map((key) => FIXED_PAGES_CONFIG[key as keyof typeof FIXED_PAGES_CONFIG].route)
            .filter((route) => route !== '/') // exception for base route
    )
)