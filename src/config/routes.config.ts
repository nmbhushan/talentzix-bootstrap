import { FIXED_PAGES_CONFIG } from "./portal.config"

// Realcube base routes, global routes for fixed pages
// Default values fetched fron config file, manual value can be added also
export const FIX_ROUTES = {
    // pageKey: '/page-route',
    ...Object.fromEntries(
        Object.entries(FIXED_PAGES_CONFIG).filter(([key, value]) => value.enable).map(([key, value]) => [
            key,
            value.route,
        ])
    ),
}

//Product based routes, to be added as per requirements
export const PRODUCT_ROUTES = {

}