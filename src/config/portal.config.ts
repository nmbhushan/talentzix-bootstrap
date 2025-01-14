export const PORTAL_CONFIG: boolean = true //dont change this value, used to detect if config is available
export const MAINTENANCE_MODE: boolean = false //put site to maintenance mode: on or off

export const TOP_NAV_CONFIG = {
    showNav: true,
    unitDropdown: true,
    search: true,
    message: true,
    notification: true,
    myAccount: true,
}

export const FEATURE_CONFIG = {
    EmailSignIn: true,
    EmailSignup: true,
    UAEPassLogin: false,
}

export const FIXED_PAGES_CONFIG = {
    landing: { //Enabled show landing page, disabled show login page by default
        enable: true, 
        route: '/',
    },
    signIn: {
        enable: true, //Note: never disable
        route: '/login',
    },
    dashboard: {
        enable: true, //Note: never disable
        route: '/dashboard',
    },
    signUp: {
        enable: true,
        route: '/register',
    },
    forgotPassword: {
        enable: true,
        route: '/forgot-password',
    },
}



// export const LANDING_ROUTES = [ //allowed routes for Pre-Login pages

// ]

// export const ALLOWED_AUTH_ROUTES = [ //allowed routes for Post-Login pages

// ]

export const BLOCKED_ROUTES = [ //blocked routes for all pages

]