// import { PRODUCT_MODULE } from '@/config/portal.config'
import { LayoutDashboard, Bot, BookOpen, Settings2, Send, Building, icons, Workflow, BookImageIcon, BookCheck } from 'lucide-react'


export const defaultSidebar = {
    user: {
        name: 'RC User',
        email: 'realcube@exalogic.co',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: LayoutDashboard,
            isActive: true,
        },
    ],
    navSecondary: [
        { title: 'Report an issue', url: '/report-issue', icon: Send },
    ],
    projects: [],
}


export const sidebarData = {
    user: {
        name: 'RC User',
        email: 'realcube@exalogic.co',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: 'Companies',
            url: '/listing/companies',
            icon: Settings2,
        },
    ],
    navSecondary: [],
    projects: [],
}

// export const customerSidebar = {
//     user: {
//         name: 'RC User',
//         email: 'realcube@exalogic.co',
//         avatar: '/avatars/shadcn.jpg',
//     },
//     navMain: [
//         {
//             title: 'Dashboard',
//             url: '/dashboard',
//             icon: LayoutDashboard,
//             isActive: true,
//         },
//         {
//             title: 'My Unit',
//             url: '/unit',
//             icon: Bot,
//             items: [
//                 {
//                     title: 'Nations Tower',
//                     url: '#',
//                     icon: Building,
//                     items: [
//                         { title: 'Overview', url: '/unit/1/overview' },
//                         { title: 'Calendar', url: '/unit/1/calendar' },
//                         { title: 'Events', url: '/unit/1/events' },
//                         { title: 'Classes & Offerings', url: '/unit/1/classes-offerings' },
//                         { title: 'Amenity Booking', url: '/unit/1/amenity-booking' },
//                         { title: 'Document', url: '/unit/1/document' },
//                         { title: 'Community Chat', url: '/unit/1/community-chat' },
//                     ],
//                 },
//                 {
//                     title: 'My Unit 2',
//                     url: '#',
//                     icon: Building,
//                     items: [
//                         { title: 'Overview', url: '/unit/2/overview' },
//                         { title: 'Calendar', url: '/unit/2/calendar' },
//                         { title: 'Events', url: '/unit/2/events' },
//                         { title: 'Classes & Offerings', url: '/unit/2/classes-offerings' },
//                         { title: 'Amenity Booking', url: '/unit/2/amenity-booking' },
//                         { title: 'Document', url: '/unit/2/document' },
//                         { title: 'Community Chat', url: '/unit/2/community-chat' },
//                     ],
//                 },
//             ],
//         },
//         {
//             title: 'Finances',
//             url: '/finances',
//             icon: BookOpen,
//             items: [
//                 { title: 'Account Summary', url: '/finances/account-summary' },
//                 { title: 'Pay Bills', url: '/finances/pay-bills' },
//                 { title: 'Payment History', url: '/finances/payment-history' },
//                 { title: 'View Statements', url: '/finances/view-statements' },
//             ],
//         },
//         {
//             title: 'My Requests',
//             url: '#',
//             icon: Settings2,
//             items: [
//                 { title: 'My Services', url: '/requests/services', icon: Workflow },
//                 { title: 'My Bookings', url: '/requests/bookings', icon: BookCheck },
//             ],
//         },
//         {
//             title: 'Event Gallery',
//             url: '/event-gallery',
//             icon: Settings2,
//         },
//     ],
//     navSecondary: [
//         { title: 'Report an issue', url: '/report-issue', icon: Send },
//     ],
//     projects: [],
// }

// export const salesSidebar = {
//     user: {
//         name: 'RC User',
//         email: 'realcube@exalogic.co',
//         avatar: '/avatars/shadcn.jpg',
//     },
//     navMain: [
//         {
//             title: 'Dashboard',
//             url: '/dashboard',
//             icon: LayoutDashboard,
//             isActive: true,
//         },
//         {
//             title: 'Companies',
//             url: '/listing/companies',
//             icon: Settings2,
//         },
//         {
//             title: 'Master Plan',
//             url: '/listing/master-plan',
//             icon: Settings2,
//         },
//         {
//             title: 'Cluster',
//             url: '/listing/cluster',
//             icon: Settings2,
//         },
//         {
//             title: 'Projects',
//             url: '/listing/projects',
//             icon: Settings2,
//         },
//         {
//             title: 'Buildings',
//             url: '/listing/buildings',
//             icon: Settings2,
//         },
//         {
//             title: 'Floors',
//             url: '/listing/floors',
//             icon: Settings2,
//         },
//         {
//             title: 'Units',
//             url: '/listing/units',
//             icon: Settings2,
//         },
//         {
//             title: 'Payment Plan',
//             url: '/listing/payment-plan',
//             icon: Settings2,
//         },
//         {
//             title: 'Users',
//             url: '/listing/users',
//             icon: Settings2,
//         },

//         {
//             title: 'Master Data',
//             url: '#',
//             icon: Settings2,
//             items: [
//                 { title: 'Categories', url: '/listing/master-data/categories', icon: Workflow },
//                 { title: 'Categories Detail', url: '/listing/master-data/categorydetails', icon: Workflow },
//                 { title: 'Profit Centre', url: '/listing/master-data/profit-center', icon: Workflow },
//                 { title: 'Cost Centre', url: '/listing/master-data/cost-center', icon: Workflow },
//                 { title: 'Import Functional Locations', url: '/listing/master-data/import-functional-locations', icon: Workflow },
//                 { title: 'Unit Conditions Import', url: '/listing/master-data/import-conditions', icon: Workflow },
//                 { title: 'Import Measurements', url: '/listing/master-data/import-measurements', icon: Workflow },
//                 { title: 'Import Partners', url: '/listing/master-data/import-partners', icon: Workflow },
//                 { title: 'S4Hana Configration', url: '/listing/master-data/configuration', icon: Workflow },
//             ],
//         },
//         {
//             title: 'Log History',
//             url: '/listing/log-history',
//             icon: Settings2,
//         },
//         {
//             title: 'Reports',
//             url: '#',
//             icon: Settings2,
//             items: [
//                 { title: 'Occupancy Report', url: '/listing/reports/occupancy-report', icon: Workflow },
//                 { title: 'Conditions Report', url: '/listing/reports/condition-report', icon: Workflow },
//                 { title: 'Partner Report', url: '/listing/reports/partnerReport', icon: Workflow },
//                 { title: 'Measurement Report', url: '/listing/reports/measurement-report', icon: Workflow },
//                 { title: 'Vacant Properties', url: '/listing/reports/vecant-properties', icon: Workflow },
//             ],
//         },
//         {
//             title: 'Event Gallery',
//             url: '/listing/event-gallery',
//             icon: Settings2,
//         },
//     ],
//     navSecondary: [],
//     projects: [],
// }

// export const brokerSidebar = {
//     user: {
//         name: 'RC User',
//         email: 'realcube@exalogic.co',
//         avatar: '/avatars/shadcn.jpg',
//     },
//     navMain: [
//         {
//             title: 'Dashboard',
//             url: '/dashboard',
//             icon: LayoutDashboard,
//             isActive: true,
//         },

//     ],
//     navSecondary: [],
//     projects: [],
// }

// const sidebarData = PRODUCT_MODULE === 'customer' ? customerSidebar :
//     PRODUCT_MODULE === 'broker' ? brokerSidebar :
//         PRODUCT_MODULE === 'sales' ? salesSidebar :
//             defaultSidebar


export default sidebarData