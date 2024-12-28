export type TListingConfigTable = {
    columns: Array<{
        title: string;
        dataIndex: string;
        key: string;
        align: string;
        type: 'counter' | 'link' | 'text' | 'status' | 'action';
        sort?: boolean;
        defaultSortOrder?: 'asc' | 'desc';
        baseUrl?: string;
        actions?: Array<{
            type: 'edit' | 'view';
            name: string;
            icon: string;
            onClick: (item: any) => void;
        }>;
    }>;
};

export type TListingConfigHeader = Array<{
    type: 'button' | 'mini-dropdown';
    title: string;
    icon: string;
    actionType?: 'download' | 'link';
    url?: string;
    items?: Array<{
        title: string;
        icon: string;
        actionType: 'download' | 'link';
        url: string;
    }>;
}>

export type TListingConfigFilters = {
    showFilters: boolean;
    fields: Array<{
        label: string;
        type: 'text' | 'search-dropdown';
        placeholder: string;
        name: string;
        validations: {};
    }>;
    resetBtn: boolean;
    resetBtnText: string;
    searchBtn: boolean;
    searchBtnText: string;
}

export type TListingConfigPagination = {
    defaultPageSize: number;
    showPagination: boolean;
    showEntryCount: boolean;
    showPageSizeOptions: boolean;
    pageSizeOptions: Array<number>;
}




export interface ReusablePaginationProps extends TListingConfigPagination {
    currentPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
    entryLabel?: (start: number, end: number, total: number) => string;
}


export type TListingConfigItem = {
    listingId: string;
    listingTitle: string;
    headerActions: TListingConfigHeader;
    filtersConfig: TListingConfigFilters;
    paginationConfig: TListingConfigPagination;
    tableConfig: TListingConfigTable;
};


export type TListingConfig = {
    [key: string]: TListingConfigItem
};



export type TViewConfigCard = Array<{
    cardId: string,
    title: string,
    description: string,
    showTable: boolean,
}>


export type TViewConfigAccordian = Array<{
    accordionId: string;
    title: string;
    isExpanded: boolean;
    content: Array<{
        label: string,
        value: string | number,
    }>;
}>

export type TViewConfigItem = {
    viewId: string;
    pageTitle: string;
    headerActions: TListingConfigHeader;
    accordions: TViewConfigAccordian;
    cards: TViewConfigCard;
    paginationConfig: TListingConfigPagination;
    tableConfig: TListingConfigTable
};

export type TViewConfig = {
    [key: string]: TViewConfigItem
};

export const globalListingConfig: TListingConfig = {
    default: {
        listingId: 'default',
        listingTitle: '',
        headerActions: [],
        filtersConfig: {
            showFilters: false,
            fields: [],
            resetBtn: false,
            resetBtnText: '',
            searchBtn: false,
            searchBtnText: '',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: false,
            showEntryCount: false,
            showPageSizeOptions: false,
            pageSizeOptions: [],
        },
        tableConfig: {
            columns: [],
        },
    },
    companies: {
        listingId: 'companies',
        listingTitle: 'Companies',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/companies'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/companies'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Company Name',
                    type: 'text',
                    placeholder: '',
                    name: 'companyName',
                    validations: {},
                },
                {
                    label: 'Company Code',
                    type: 'text',
                    placeholder: '',
                    name: 'companyCode',
                    validations: {},
                },
                {
                    label: 'Client Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'clientName',
                    validations: {},
                },
                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                // {
                //     title: 'S.No.',
                //     dataIndex: 'autoIndex',
                //     key: 'autoIndex',
                //     align: 'left',
                //     type: 'counter',
                //     sort: true,
                //     defaultSortOrder: 'asc',
                // },
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Company Name',
                    dataIndex: 'companyName',
                    key: 'companyName',
                    align: 'left',
                    type: 'link',
                    baseUrl: '/view/companies',
                },
                {
                    title: 'Company Code',
                    dataIndex: 'companyCode',
                    key: 'companyCode',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Client',
                    dataIndex: 'clientName',
                    key: 'clientName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Region',
                    dataIndex: 'regionName',
                    key: 'regionName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
                // {
                //     title: 'Actions',
                //     dataIndex: 'actions',
                //     key: 'actions',
                //     align: 'left',
                //     type: 'action',
                //     actions: [
                //         {
                //             type: 'edit',
                //             name: 'Edit',
                //             icon: 'edit',
                //             onClick: (item: any) => console.log(item),
                //         },
                //         {
                //             type: 'view',
                //             name: 'View',
                //             icon: 'eye',
                //             onClick: (item: any) => console.log(item),
                //         },
                //     ],
                // },
            ]
        },
    },
    cluster: {
        listingId: 'cluster',
        listingTitle: 'Cluster',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/cluster'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/cluster'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Cluster Name',
                    type: 'text',
                    placeholder: '',
                    name: 'clusterName',
                    validations: {},
                },
                {
                    label: 'Cluster Code',
                    type: 'text',
                    placeholder: '',
                    name: 'clusterCode',
                    validations: {},
                },
                {
                    label: 'Client Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'clientName',
                    validations: {},
                },
                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Cluster Name',
                    dataIndex: 'clusterName',
                    key: 'clusterName',
                    align: 'left',
                    type: 'link',
                    baseUrl: '/view/cluster',
                },
                {
                    title: 'Cluster Code',
                    dataIndex: 'clusterCode',
                    key: 'clusterCode',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Client',
                    dataIndex: 'clientName',
                    key: 'clientName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Region',
                    dataIndex: 'regionName',
                    key: 'regionName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
                // {
                //     title: 'Actions',
                //     dataIndex: 'actions',
                //     key: 'actions',
                //     align: 'left',
                //     type: 'action',
                //     actions: [
                //         {
                //             type: 'edit',
                //             name: 'Edit',
                //             icon: 'edit',
                //             onClick: (item: any) => console.log(item),
                //         },
                //         {
                //             type: 'view',
                //             name: 'View',
                //             icon: 'eye',
                //             onClick: (item: any) => console.log(item),
                //         },
                //     ],
                // },
            ]
        },

    },
    'master-plan': {
        listingId: 'masterPlan',
        listingTitle: 'Master Plan',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/master-plan'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/master-plan'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Master Plan Name',
                    type: 'text',
                    placeholder: '',
                    name: 'masterPlanName',
                    validations: {},
                },
                {
                    label: 'Master Plan Code',
                    type: 'text',
                    placeholder: '',
                    name: 'masterPlanCode',
                    validations: {},
                },
                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Master Plan Name',
                    dataIndex: 'masterPlanName',
                    key: 'masterPlanName',
                    align: 'left',
                    type: 'link',
                    baseUrl: '/view/master-plan',
                },
                {
                    title: 'Master Plan Code',
                    dataIndex: 'masterPlanCode',
                    key: 'masterPlanCode',
                    align: 'left',
                    type: 'link',
                },
                {
                    title: 'Company Name',
                    dataIndex: 'companyName',
                    key: 'companyName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'Country',
                    dataIndex: 'country',
                    key: 'country',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'City',
                    dataIndex: 'city',
                    key: 'city',
                    align: 'left',
                    type: 'text',
                },
            ]
        }
    },
    projects: {
        listingId: 'projects',
        listingTitle: 'Projects',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/projects'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/projects'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Company Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'masterPlanName',
                    validations: {},
                },
                {
                    label: 'Project Name',
                    type: 'text',
                    placeholder: '',
                    name: 'projectName',
                    validations: {},
                },
                {
                    label: 'Project Code',
                    type: 'text',
                    placeholder: '',
                    name: 'projectCode',
                    validations: {},
                },
                {
                    label: 'Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'status',
                    validations: {},
                },
                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Project Name',
                    dataIndex: 'ProjectName',
                    key: 'projectName',
                    align: 'left',
                    type: 'link',
                    baseUrl: '/view/projects',
                },
                {
                    title: 'Project Code',
                    dataIndex: 'projectCode',
                    key: 'projectCode',
                    align: 'left',
                    type: 'link',
                },
                {
                    title: 'Company Name',
                    dataIndex: 'companyName',
                    key: 'companyName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Master Plan Name',
                    dataIndex: 'masterPlanName',
                    key: 'masterPlanName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Cluster Name',
                    dataIndex: 'clusterName',
                    key: 'clusterName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Region',
                    dataIndex: 'region',
                    key: 'region',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
            ]
        },

    },
    buildings: {
        listingId: 'buildings',
        listingTitle: 'Buildings',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/projects'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/projects'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Company Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'masterPlanName',
                    validations: {},
                },
                {
                    label: 'Project Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'projectName',
                    validations: {},
                },
                {
                    label: 'Building Type',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'buildingType',
                    validations: {},
                },
                {
                    label: 'Building Name',
                    type: 'text',
                    placeholder: '',
                    name: 'buildingName',
                    validations: {},
                },
                {
                    label: 'Building Code',
                    type: 'text',
                    placeholder: '',
                    name: 'buildingCode',
                    validations: {},
                },
                {
                    label: 'Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'buildingName',
                    validations: {},
                },
                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Building Name',
                    dataIndex: 'buildingName',
                    key: 'buildingName',
                    align: 'left',
                    type: 'link',
                    baseUrl: '/view/buildings',
                },
                {
                    title: 'Building Code',
                    dataIndex: 'buildingCode',
                    key: 'buildingCode',
                    align: 'left',
                    type: 'link',
                },
                {
                    title: 'Building Type',
                    dataIndex: 'buildingType',
                    key: 'buildingType',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Project Name',
                    dataIndex: 'projectName',
                    key: 'projectName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Master Plan Name',
                    dataIndex: 'masterPlanName',
                    key: 'masterPlanName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Cluster Name',
                    dataIndex: 'clusterName',
                    key: 'clusterName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Profit Center',
                    dataIndex: 'profitCenter',
                    key: 'profitCenter',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Cost Center',
                    dataIndex: 'costCenter',
                    key: 'costCenter',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
            ]
        },

    },
    floors: {
        listingId: 'floors',
        listingTitle: 'Floors',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/floors'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/floors'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Company Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'masterPlanName',
                    validations: {},
                },
                {
                    label: 'Project Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'projectName',
                    validations: {},
                },
                {
                    label: 'Building Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'buildingName',
                    validations: {},
                },
                {
                    label: 'Floor Name',
                    type: 'text',
                    placeholder: '',
                    name: 'floorName',
                    validations: {},
                },
                {
                    label: 'Floor Code',
                    type: 'text',
                    placeholder: '',
                    name: 'floorCode',
                    validations: {},
                },
                {
                    label: 'Usage Type',
                    type: 'text',
                    placeholder: '',
                    name: 'usageType',
                    validations: {},
                },
                {
                    label: 'Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'buildingName',
                    validations: {},
                },
                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Floor Name',
                    dataIndex: 'floorName',
                    key: 'floorName',
                    align: 'left',
                    type: 'link',
                    baseUrl: '/view/floors',
                },
                {
                    title: 'Floor Code',
                    dataIndex: 'floorCode',
                    key: 'floorCode',
                    align: 'left',
                    type: 'link',
                },
                {
                    title: 'Building Name',
                    dataIndex: 'buildingName',
                    key: 'buildingName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Project Name',
                    dataIndex: 'projectName',
                    key: 'projectName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Master Plan Name',
                    dataIndex: 'masterPlanName',
                    key: 'masterPlanName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Cluster Name',
                    dataIndex: 'clusterName',
                    key: 'clusterName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Usage Type',
                    dataIndex: 'usageType',
                    key: 'usageType',
                    align: 'left',
                    type: 'text',
                },

                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
            ]
        },

    },
    units: {
        listingId: 'units',
        listingTitle: 'Units',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/units'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/units'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Company Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'masterPlanName',
                    validations: {},
                },
                {
                    label: 'Project Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'projectName',
                    validations: {},
                },
                {
                    label: 'Building Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'buildingName',
                    validations: {},
                },
                {
                    label: 'Contract Type',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'contractType',
                    validations: {},
                },
                {
                    label: 'Unit Name',
                    type: 'text',
                    placeholder: '',
                    name: 'unitName',
                    validations: {},
                },
                {
                    label: 'Unit Code',
                    type: 'text',
                    placeholder: '',
                    name: 'unitCode',
                    validations: {},
                },
                {
                    label: 'Old Unit Code',
                    type: 'text',
                    placeholder: '',
                    name: 'oldUnitCode',
                    validations: {},
                },
                {
                    label: 'Occupancy Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'occupancyStatus',
                    validations: {},
                },
                {
                    label: 'Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'buildingName',
                    validations: {},
                },
                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Floor Name',
                    dataIndex: 'floorName',
                    key: 'floorName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Unit Name',
                    dataIndex: 'unitName',
                    key: 'unitName',
                    align: 'left',
                    type: 'link',
                    baseUrl: '/view/units',
                },
                {
                    title: 'Unit Code',
                    dataIndex: 'unitCode',
                    key: 'unitCode',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Old Unit Code',
                    dataIndex: 'oldUnitCode',
                    key: 'oldUnitCode',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Profit Center',
                    dataIndex: 'profitCenter',
                    key: 'profitCenter',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Cost Center',
                    dataIndex: 'costCenter',
                    key: 'costCenter',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Occupancy Status',
                    dataIndex: 'occupancyStatus',
                    key: 'occupancyStatus',
                    align: 'left',
                    type: 'text',
                },

                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
                // {
                //     title: 'Action',
                //     dataIndex: 'action',
                //     key: 'action',
                //     align: 'left',
                //     type: 'text',
                // }
            ]
        },

    },
    'payment-plan': {
        listingId: 'paymentPlan',
        listingTitle: 'Payment Plan',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/units'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/units'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Payment Plan Name',
                    type: 'text',
                    placeholder: '',
                    name: 'paymentPlanName',
                    validations: {},
                },
                {
                    label: 'Type',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'type',
                    validations: {},
                },
                {
                    label: 'Line Of Business',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'lineOfBusiness',
                    validations: {},
                },

                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Name',
                    dataIndex: 'Name',
                    key: 'Name',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Type',
                    dataIndex: 'type',
                    key: 'type',
                    align: 'left',
                    type: 'link',
                    baseUrl: '/view/paymentPlans',
                },
                {
                    title: 'Line Of Business',
                    dataIndex: 'lineOfBusiness',
                    key: 'lineOfBusiness',
                    align: 'left',
                    type: 'text',
                },

                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
                // {
                //     title: 'Action',
                //     dataIndex: 'action',
                //     key: 'action',
                //     align: 'left',
                //     type: 'text',
                // }

            ]
        }
    },
    users: {
        listingId: 'users',
        listingTitle: 'Users',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/users'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/users'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Name',
                    type: 'text',
                    placeholder: '',
                    name: 'Name',
                    validations: {},
                },
                {
                    label: 'Code',
                    type: 'text',
                    placeholder: '',
                    name: 'code',
                    validations: {},
                },
                {
                    label: 'Email',
                    type: 'text',
                    placeholder: '',
                    name: 'email',
                    validations: {},
                },
                {
                    label: 'Phone',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'phone',
                    validations: {},
                },
                {
                    label: 'Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'status',
                    validations: {},
                },

                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'Name',
                    align: 'left',
                    type: 'link',
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email',
                    align: 'left',
                    type: 'text',
                    baseUrl: '/view/users',
                },
                {
                    title: 'Phone',
                    dataIndex: 'phone',
                    key: 'phone',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'User Role',
                    dataIndex: 'userRole',
                    key: 'userRole',
                    align: 'left',
                    type: 'text',
                },

                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
            ]
        },

    },
    'master-data-categories': {
        listingId: 'categories',
        listingTitle: 'Categories',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/master-data/categories'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import//master-data/categories'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Category Name',
                    type: 'text',
                    placeholder: '',
                    name: 'categoryName',
                    validations: {},
                },

                {
                    label: 'Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'status',
                    validations: {},
                },

                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Category Name',
                    dataIndex: 'categoryName',
                    key: 'categoryName',
                    align: 'left',
                    type: 'link',

                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'Creted At',
                    dataIndex: 'createdAt',
                    key: 'createdAt',
                    align: 'left',
                    type: 'status',
                },
            ]
        }
    },
    'master-data-categorydetails': {
        listingId: 'categorydetails',
        listingTitle: 'Category Details',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/master-data/categorydetails'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import//master-data/categorydetails'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Category Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'categoryName',
                    validations: {},
                },
                {
                    label: 'Category Detail Name',
                    type: 'text',
                    placeholder: '',
                    name: 'categoryDetailName',
                    validations: {},
                },

                {
                    label: 'Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'status',
                    validations: {},
                },

                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Category Name',
                    dataIndex: 'categoryName',
                    key: 'categoryName',
                    align: 'left',
                    type: 'link',

                },
                {
                    title: 'Category Detail Name',
                    dataIndex: 'categoryDetailName',
                    key: 'categoryDetailName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'Class',
                    dataIndex: 'class',
                    key: 'class',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'Creted At',
                    dataIndex: 'createdAt',
                    key: 'createdAt',
                    align: 'left',
                    type: 'status',
                },
            ]
        }
    },
    'master-data-profit-center': {
        listingId: 'profitCenter',
        listingTitle: 'Profit Center',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/master-data/categorydetails'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import//master-data/categorydetails'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Category Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'categoryName',
                    validations: {},
                },
                {
                    label: 'Profit Center Name',
                    type: 'text',
                    placeholder: '',
                    name: 'profitCenterName',
                    validations: {},
                },
                {
                    label: 'Profit Center Code',
                    type: 'text',
                    placeholder: '',
                    name: 'profitCenterCode',
                    validations: {},
                },

                {
                    label: 'Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'status',
                    validations: {},
                },

                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Category Name',
                    dataIndex: 'categoryName',
                    key: 'categoryName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Profit Center Name',
                    dataIndex: 'profitCenterName',
                    key: 'profitCenterName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Profit Center Code',
                    dataIndex: 'profitCenterCode',
                    key: 'profitCenterCode',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Company Name',
                    dataIndex: 'companyName',
                    key: 'companyName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'Creted At',
                    dataIndex: 'createdAt',
                    key: 'createdAt',
                    align: 'left',
                    type: 'status',
                },
            ]
        }
    },
    'master-data-cost-center': {
        listingId: 'costCenter',
        listingTitle: 'Cost Center',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/master-data/categorydetails'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import//master-data/categorydetails'
                    },
                ]
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Company Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'companyName',
                    validations: {},
                },
                {
                    label: 'Cost Center Name',
                    type: 'text',
                    placeholder: '',
                    name: 'costCenterName',
                    validations: {},
                },
                {
                    label: 'Cost Center Code',
                    type: 'text',
                    placeholder: '',
                    name: 'costCenterCode',
                    validations: {},
                },

                {
                    label: 'Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'status',
                    validations: {},
                },

                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Cost Center Name',
                    dataIndex: 'costCenterName',
                    key: 'costCenterName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Cost Center Code',
                    dataIndex: 'costCenterCode',
                    key: 'costCenterCode',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Company Name',
                    dataIndex: 'companyName',
                    key: 'companyName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Profit Center',
                    dataIndex: 'profitCenter',
                    key: 'profitCenter',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },

            ]
        }
    },
    'master-data-configuration': {
        listingId: 'costCenter',
        listingTitle: 'Cost Center',
        headerActions: [
            {
                type: 'button',
                title: 'Add New Configuration',
                icon: '',
                actionType: 'link',
                url: '/add/master-data/configuration'
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Client Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'clientName',
                    validations: {},
                },
                {
                    label: 'Authentication',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'authentication',
                    validations: {},
                },
                {
                    label: 'Integration Name',
                    type: 'text',
                    placeholder: '',
                    name: 'integrationName',
                    validations: {},
                },
                {
                    label: 'Integration EndPoint',
                    type: 'text',
                    placeholder: '',
                    name: 'integrationEndPoint',
                    validations: {},
                },
                {
                    label: 'User Name',
                    type: 'text',
                    placeholder: '',
                    name: 'userName',
                    validations: {},
                },

                {
                    label: 'Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'status',
                    validations: {},
                },
                {
                    label: 'Method',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'method',
                    validations: {},
                },

                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Integration Name',
                    dataIndex: 'integrationName',
                    key: 'integrationName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Integration EndPoint',
                    dataIndex: 'integrationEndPoint',
                    key: 'integrationEndPoint',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'User Id',
                    dataIndex: 'userId',
                    key: 'userId',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Method',
                    dataIndex: 'method',
                    key: 'method',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'Authentication',
                    dataIndex: 'authentication',
                    key: 'authentication',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },

            ]
        }
    },
    'log-history': {
        listingId: 'logHistory',
        listingTitle: 'Log History',
        headerActions: [
            // {
            //     type: 'button',
            //     title: 'Download',
            //     icon: '',
            //     actionType: 'download'
            // },
            // {
            //     type: 'button',
            //     title: 'Add New',
            //     icon: '',
            //     actionType: 'link',
            //     url: '/add/users'
            // },
            // {
            //     type: 'mini-dropdown',
            //     title: '',
            //     icon: '',
            //     items: [
            //         {
            //             title: 'Import',
            //             icon: '',
            //             actionType: 'link',
            //             url: '/import/users'
            //         },
            //     ]
            // },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Created By',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'createdBy',
                    validations: {},
                },
                {
                    label: 'IP Address',
                    type: 'text',
                    placeholder: '',
                    name: 'ipAddress',
                    validations: {},
                },
                {
                    label: 'Table Name',
                    type: 'text',
                    placeholder: '',
                    name: 'tableName',
                    validations: {},
                },

                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'IP Address',
                    dataIndex: 'ipAddress',
                    key: 'ipAddress',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Table Name',
                    dataIndex: 'tableName',
                    key: 'tableName',
                    align: 'left',
                    type: 'link',
                    // baseUrl: '/view/users',
                },
                {
                    title: 'Created By',
                    dataIndex: 'createdBy',
                    key: 'createdBy',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Created At',
                    dataIndex: 'createdAt',
                    key: 'createdAt',
                    align: 'left',
                    type: 'text',
                },

                {
                    title: 'Action',
                    dataIndex: 'action',
                    key: 'action',
                    align: 'left',
                    type: 'text',
                }

            ]
        }
    },
    'reports-occupancy-report': {
        listingId: 'occupancyReport',
        listingTitle: 'Occupancy Report',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Company Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'companyName',
                    validations: {},
                },
                {
                    label: 'ProjectName',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'projectName',
                    validations: {},
                },
                {
                    label: 'Building Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'buildingName',
                    validations: {},
                },

                {
                    label: 'Unit Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'unitName',
                    validations: {},
                },
                {
                    label: 'Occupancy Status',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'occupancyStatus',
                    validations: {},
                },


                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'ProjectName',
                    dataIndex: 'projectName',
                    key: 'projectName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'BuildingName',
                    dataIndex: 'buildingName',
                    key: 'buildingName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Unit',
                    dataIndex: 'unit',
                    key: 'unit',
                    align: 'left',
                    type: 'text',

                },

                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },

            ]
        }
    },
    'reports-condition-report': {
        listingId: 'conditionReport',
        listingTitle: 'Conditions Report',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Company Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'companyName',
                    validations: {},
                },
                {
                    label: 'Project Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'projectName',
                    validations: {},
                },
                {
                    label: 'Building Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'buildingName',
                    validations: {},
                },

                {
                    label: 'Unit Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'unitName',
                    validations: {},
                },


                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Units',
                    dataIndex: 'units',
                    key: 'units',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Rent in Ro',
                    dataIndex: 'rentInRo',
                    key: 'rentInRo',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'SD in RO',
                    dataIndex: 'sdInRo',
                    key: 'sdInRo',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'ValidFrom',
                    dataIndex: 'validFrom',
                    key: 'validFrom',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'ValidTo',
                    dataIndex: 'validTo',
                    key: 'validTo',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'Rent In Contract',
                    dataIndex: 'rentInContract',
                    key: 'rentInContract',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'SD In Contract',
                    dataIndex: 'sdInContract',
                    key: 'sdInContract',
                    align: 'left',
                    type: 'status',
                },

            ]
        }
    },
    'reports-partnerReport': {
        listingId: 'partnerReport',
        listingTitle: 'Partner Report',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Company Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'companyName',
                    validations: {},
                },
                {
                    label: 'Project Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'projectName',
                    validations: {},
                },
                {
                    label: 'Building Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'buildingName',
                    validations: {},
                },

                {
                    label: 'Unit Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'unitName',
                    validations: {},
                },
                {
                    label: 'Key Date',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'keyDate',
                    validations: {},
                },


                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'ProjectName',
                    dataIndex: 'projectName',
                    key: 'projectName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Building',
                    dataIndex: 'building',
                    key: 'building',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Unit',
                    dataIndex: 'unit',
                    key: 'unit',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Business Partner Type',
                    dataIndex: 'businessPartnerType',
                    key: 'businessPartnerType',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'BP Description',
                    dataIndex: 'bpDescription',
                    key: 'bpDescription',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Valid From',
                    dataIndex: 'validFrom',
                    key: 'validFrom',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Valid To',
                    dataIndex: 'validTo',
                    key: 'validTo',
                    align: 'left',
                    type: 'text',

                },

            ]
        }
    },
    'reports-measurement-report': {
        listingId: 'measurementReport',
        listingTitle: 'Measurement Report',
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
        ],
        filtersConfig: {
            showFilters: true,
            fields: [
                {
                    label: 'Company Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'companyName',
                    validations: {},
                },
                {
                    label: 'Project Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'projectName',
                    validations: {},
                },
                {
                    label: 'Building Name',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'buildingName',
                    validations: {},
                },

                {
                    label: 'Unit',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'unit',
                    validations: {},
                },
                {
                    label: 'Key Date',
                    type: 'search-dropdown',
                    placeholder: '',
                    name: 'keyDate',
                    validations: {},
                },


                {
                    label: 'Search Text',
                    type: 'text',
                    placeholder: '',
                    name: 'search',
                    validations: {},
                },
            ],
            resetBtn: true,
            resetBtnText: 'Reset',
            searchBtn: true,
            searchBtnText: 'Search',
        },
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'ProjectName',
                    dataIndex: 'projectName',
                    key: 'projectName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Building',
                    dataIndex: 'building',
                    key: 'building',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Unit',
                    dataIndex: 'unit',
                    key: 'unit',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Measurement Name',
                    dataIndex: 'measurementName',
                    key: 'measurementName',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Measurement Area',
                    dataIndex: 'measurementArea',
                    key: 'measurementArea',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'No.Of Rooms',
                    dataIndex: 'noOfRooms',
                    key: 'noOfRooms',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Valid From',
                    dataIndex: 'validFrom',
                    key: 'validFrom',
                    align: 'left',
                    type: 'text',

                },
                {
                    title: 'Valid To',
                    dataIndex: 'validTo',
                    key: 'validTo',
                    align: 'left',
                    type: 'text',

                },

            ]
        }
    },

    // 'event-gallery': {
    //     listingId: 'eventGallery',
    //     listingTitle: 'Event Gallery',
    //     headerActions: [
    //         // {
    //         //     type: 'button',
    //         //     title: 'Download',
    //         //     icon: '',
    //         //     actionType: 'download'
    //         // },
    //         // {
    //         //     type: 'button',
    //         //     title: 'Add New',
    //         //     icon: '',
    //         //     actionType: 'link',
    //         //     url: '/add/users'
    //         // },
    //         // {
    //         //     type: 'mini-dropdown',
    //         //     title: '',
    //         //     icon: '',
    //         //     items: [
    //         //         {
    //         //             title: 'Import',
    //         //             icon: '',
    //         //             actionType: 'link',
    //         //             url: '/import/users'
    //         //         },
    //         //     ]
    //         // },
    //     ],
    //     filtersConfig: {
    //         showFilters: true,
    //         fields: [
    //             {
    //                 label: 'Created By',
    //                 type: 'search-dropdown',
    //                 placeholder: '',
    //                 name: 'createdBy',
    //                 validations: {},
    //             },
    //             {
    //                 label: 'IP Address',
    //                 type: 'text',
    //                 placeholder: '',
    //                 name: 'ipAddress',
    //                 validations: {},
    //             },
    //             {
    //                 label: 'Table Name',
    //                 type: 'text',
    //                 placeholder: '',
    //                 name: 'tableName',
    //                 validations: {},
    //             },

    //             {
    //                 label: 'Search Text',
    //                 type: 'text',
    //                 placeholder: '',
    //                 name: 'search',
    //                 validations: {},
    //             },
    //         ],
    //         resetBtn: true,
    //         resetBtnText: 'Reset',
    //         searchBtn: true,
    //         searchBtnText: 'Search',
    //     },
    //     paginationConfig: {
    //         defaultPageSize: 10,
    //         showPagination: true,
    //         showEntryCount: true,
    //         showPageSizeOptions: true,
    //         pageSizeOptions: [10, 25, 50, 100],
    //     },
    //     tableConfig: {
    //         columns: [
    //             {
    //                 title: 'S.No.',
    //                 dataIndex: 'id',
    //                 key: 'id',
    //                 align: 'left',
    //                 type: 'text',
    //                 sort: true,
    //                 defaultSortOrder: 'asc',
    //             },
    //             {
    //                 title: 'IP Address',
    //                 dataIndex: 'ipAddress',
    //                 key: 'ipAddress',
    //                 align: 'left',
    //                 type: 'text',

    //             },
    //             {
    //                 title: 'Table Name',
    //                 dataIndex: 'tableName',
    //                 key: 'tableName',
    //                 align: 'left',
    //                 type: 'link',
    //                 // baseUrl: '/view/users',
    //             },
    //             {
    //                 title: 'Created By',
    //                 dataIndex: 'createdBy',
    //                 key: 'createdBy',
    //                 align: 'left',
    //                 type: 'text',
    //             },
    //             {
    //                 title: 'Created At',
    //                 dataIndex: 'createdAt',
    //                 key: 'createdAt',
    //                 align: 'left',
    //                 type: 'text',
    //             },

    //             {
    //                 title: 'Action',
    //                 dataIndex: 'action',
    //                 key: 'action',
    //                 align: 'left',
    //                 type: 'text',
    //             }

    //         ]
    //     }
    // },



}

export const globalViewConfig: TViewConfig = {
    default: {
        viewId: "string",
        pageTitle: "string",
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/companies'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/companies'
                    },
                ]
            },
        ],
        accordions: [
            {
                accordionId: 'defaultAccordion',
                title: '',
                isExpanded: true,
                content: [{
                    label: "string",
                    value: "string"
                }],
            },
        ],
        cards: [
            {
                cardId: 'defaultCard',
                title: '',
                description: '',
                showTable: false,
            },
        ],
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Company Name',
                    dataIndex: 'companyName',
                    key: 'companyName',
                    align: 'left',
                    type: 'link',
                    baseUrl: '/view/companies',
                },
                {
                    title: 'Company Code',
                    dataIndex: 'companyCode',
                    key: 'companyCode',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Client',
                    dataIndex: 'clientName',
                    key: 'clientName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Region',
                    dataIndex: 'regionName',
                    key: 'regionName',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'status',
                },
                {
                    title: 'Actions',
                    dataIndex: 'actions',
                    key: 'actions',
                    align: 'left',
                    type: 'action',
                    actions: [
                        {
                            type: 'edit',
                            name: 'Edit',
                            icon: 'edit',
                            onClick: (item: any) => console.log(item),
                        },
                        {
                            type: 'view',
                            name: 'View',
                            icon: 'eye',
                            onClick: (item: any) => console.log(item),
                        },
                    ],
                },
            ]
        }
    },
    companies: {
        viewId: "companies",
        pageTitle: "Companies",
        headerActions: [
            {
                type: 'button',
                title: 'Download',
                icon: '',
                actionType: 'download'
            },
            {
                type: 'button',
                title: 'Add New',
                icon: '',
                actionType: 'link',
                url: '/add/companies'
            },
            {
                type: 'mini-dropdown',
                title: '',
                icon: '',
                items: [
                    {
                        title: 'Import',
                        icon: '',
                        actionType: 'link',
                        url: '/import/companies'
                    },
                ]
            },
        ],

        accordions: [
            {
                accordionId: 'companies',
                title: 'Overview',
                isExpanded: true,
                content: [
                    {
                        label: "Client",
                        value: "1000 -Abu Dhabi Real Estate "
                    },
                    {
                        label: "Company Name",
                        value: "Abu Dhabi Real Estate"
                    },
                    {
                        label: "Company Code",
                        value: 1000
                    },
                    {
                        label: "No.Of Projects",
                        value: 1
                    },
                    {
                        label: "No.of Buildings",
                        value: 131
                    },
                    {
                        label: "No.of Units",
                        value: 4135
                    },

                    {
                        label: "Email",
                        value: "info@sobharealty.com"
                    },
                    {
                        label: "Contact Number",
                        value: 55768817
                    },
                    {
                        label: "Address 1",
                        value: "11 Street, Abu Dhabi"
                    },
                    {
                        label: "Address 2",
                        value: "Abu Dhabi"
                    },
                    {
                        label: "Postal Code",
                        value: "0000",
                    },
                    {
                        label: "Country",
                        value: "United Arab Emirates"
                    },
                    {
                        label: "Latitude",
                        value: 25.2178
                    },
                    {
                        label: "Longitude",
                        value: 55.3519
                    },
                    {
                        label: "Status",
                        value: "Active"
                    },
                    {
                        label: "Description",
                        value: "No Data Available"
                    }

                ],
            },
            {
                accordionId: 'companies',
                title: 'Overview',
                isExpanded: true,
                content: [
                    {
                        label: "Client",
                        value: "1000 -Abu Dhabi Real Estate "
                    },
                    {
                        label: "Company Name",
                        value: "Abu Dhabi Real Estate"
                    },
                ]
            }

        ],
        cards: [
            {
                cardId: 'masterPlan',
                title: 'MasterPlan',
                description: '',
                showTable: true,
            },
            {
                cardId: 'documents',
                title: 'Documents',
                description: '',
                showTable: false,
            },
        ],
        paginationConfig: {
            defaultPageSize: 10,
            showPagination: true,
            showEntryCount: true,
            showPageSizeOptions: true,
            pageSizeOptions: [10, 25, 50, 100],
        },
        tableConfig: {
            columns: [
                {
                    title: 'S.No.',
                    dataIndex: 'id',
                    key: 'id',
                    align: 'left',
                    type: 'text',
                    sort: true,
                    defaultSortOrder: 'asc',
                },
                {
                    title: 'Master Plan Name',
                    dataIndex: 'masterPlanName',
                    key: 'masterPlanName',
                    align: 'left',
                    type: 'link',
                    baseUrl: '/view/companies',
                },
                {
                    title: 'Master Plan Code',
                    dataIndex: 'masterPlanCode',
                    key: 'masterPlanCode',
                    align: 'left',
                    type: 'text',
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    align: 'left',
                    type: 'text',
                },

            ]
        }
    },

}


export const sampleTableData: any = {
    companies: [
        { id: '0001234', companyName: 'Gate And Arc', companyCode: 'D - 983', clientName: '1000-Abu Dhabi Real Estate', regionName: 'Abu Dhabi', status: 'Active' },
        { id: '0001235', companyName: 'Abu Dhabi Real Estate', companyCode: 'D - 983', clientName: '1000-Abu Dhabi Real Estate', regionName: 'Abu Dhabi', status: 'Active' },
        { id: '0001236', companyName: 'Abc Real Estate', companyCode: 'D - 983', clientName: '1000-Abu Dhabi Real Estate', regionName: 'Abu Dhabi', status: 'In-Active' },
        // ... Add more recent requests as needed
    ],
    cluster: [
        { id: '0001234', clusterName: 'Gate And Arc', clusterCode: 'D - 983', clientName: '1000-Abu Dhabi Real Estate', regionName: 'Abu Dhabi', status: 'Active' },
        { id: '0001235', clusterName: 'Abu Dhabi Real Estate', clusterCode: 'D - 983', clientName: '1000-Abu Dhabi Real Estate', regionName: 'Abu Dhabi', status: 'Active' },
        { id: '0001236', clusterName: 'Abc Real Estate', clusterCode: 'D - 983', clientName: '1000-Abu Dhabi Real Estate', regionName: 'Abu Dhabi', status: 'In-Active' },
        // ... Add more recent requests as needed
    ],
    'master-plan': [
        { id: '0001234', masterPlanName: 'Gate And Arc', masterCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', country: 'Abu Dhabi', status: 'Active', city: "Abu Dhabi", action: "" },
        { id: '0001235', masterPlanName: 'Abu Dhabi Real Estate', masterCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', country: 'Abu Dhabi', status: 'Active', city: "Abu Dhabi", action: "" },
        { id: '0001236', masterPlanName: 'Abc Real Estate', masterCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', country: 'Abu Dhabi', status: 'In-Active', city: "Abu Dhabi", action: "" },
        // ... Add more recent requests as needed
    ],
    projects: [
        { id: '0001234', projectName: 'Gate And Arc', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001235', projectName: 'Abu Dhabi Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001236', projectName: 'Abc Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'In-Active', action: "" },
        { id: '0001234', projectName: 'Gate And Arc', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001235', projectName: 'Abu Dhabi Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001236', projectName: 'Abc Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'In-Active', action: "" },
        { id: '0001234', projectName: 'Gate And Arc', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001235', projectName: 'Abu Dhabi Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001236', projectName: 'Abc Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'In-Active', action: "" },
        { id: '0001234', projectName: 'Gate And Arc', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001235', projectName: 'Abu Dhabi Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001236', projectName: 'Abc Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'In-Active', action: "" },
        { id: '0001234', projectName: 'Gate And Arc', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001235', projectName: 'Abu Dhabi Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001236', projectName: 'Abc Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'In-Active', action: "" },
        { id: '0001234', projectName: 'Gate And Arc', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001235', projectName: 'Abu Dhabi Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'Active', action: "" },
        { id: '0001236', projectName: 'Abc Real Estate', projectCode: 'D - 983', companyName: '1000-Abu Dhabi Real Estate', masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", region: "Abu Dhabi", status: 'In-Active', action: "" },

        // ... Add more recent requests as needed
    ],
    buildings: [
        { id: '0001234', buildingName: 'Gate And Arc', buildingCode: 'D - 983', buildingType: '1000-Abu Dhabi Real Estate', projectName: "KHT-Khalidya Village 4", masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", profitCenter: "Khalidiyah Village", costCenter: "Khalidiyah Village", status: 'Active', action: "" },
        { id: '0001235', buildingName: 'Abu Dhabi Real Estate', buildingCode: 'D - 983', buildingType: '1000-Abu Dhabi Real Estate', projectName: "KHT-Khalidya Village 4", masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", profitCenter: "Khalidiyah Village", costCenter: "Khalidiyah Village", status: 'Active', action: "" },
        { id: '0001236', buildingName: 'Abc Real Estate', buildingCode: 'D - 983', buildingType: '1000-Abu Dhabi Real Estate', projectName: "KHT-Khalidya Village 4", masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", profitCenter: "Khalidiyah Village", costCenter: "Khalidiyah Village", status: 'In-Active', action: "" },
        // ... Add more recent requests as needed
    ],
    floors: [
        { id: '0001234', floorName: 'Gate And Arc', floorCode: 'D - 983', buildingName: '1000-Abu Dhabi Real Estate', projectName: "KHT-Khalidya Village 4", masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", usageType: "Khalidiyah Village", status: 'Active', action: "" },
        { id: '0001235', floorName: 'Abu Dhabi Real Estate', floorCode: 'D - 983', buildingName: '1000-Abu Dhabi Real Estate', projectName: "KHT-Khalidya Village 4", masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", usageType: "Khalidiyah Village", status: 'Active', action: "" },
        { id: '0001236', floorName: 'Abc Real Estate', floorCode: 'D - 983', buildingName: '1000-Abu Dhabi Real Estate', projectName: "KHT-Khalidya Village 4", masterPlanName: "CCC01-Capital City Centre", clusterName: "CCCC01-Capital City Center Cluster 01", usageType: "Khalidiyah Village", status: 'In-Active', action: "" },
        // ... Add more recent requests as needed
    ],
    units: [
        { id: '0001234', floorName: 'Gate And Arc', unitName: 'D - 983', unitCode: 'ARY-AR1-5455-01-P103', oldUnitCode: "No Data Available", profitCenter: "20330 -Al Aryam Tower", costCenter: "2000360-Al Aryam Tower", occupancyStatus: "Available", status: 'Active', action: "" },
        { id: '0001235', floorName: 'Abu Dhabi Real Estate', unitName: 'D - 983', unitCode: 'ARY-AR1-5455-01-P103', oldUnitCode: "No Data Available", profitCenter: "20330 -Al Aryam Tower", costCenter: "2000360-Al Aryam Tower", occupancyStatus: "Available", status: 'Active', action: "" },
        { id: '0001236', floorName: 'Abc Real Estate', unitName: 'D - 983', unitCode: 'ARY-AR1-5455-01-P103', oldUnitCode: "No Data Available", profitCenter: "20330 -Al Aryam Tower", costCenter: "2000360-Al Aryam Tower", occupancyStatus: "Available", status: 'In-Active', action: "" },
        // ... Add more recent requests as needed
    ],
    'payment-plan': [
        { id: '0001234', Name: 'Gate And Arc', type: 'D - 983', lineOfBusiness: 'ARY-AR1-5455-01-P103', status: 'Active', action: "" },
        { id: '0001235', Name: 'Abu Dhabi Real Estate', type: 'D - 983', lineOfBusiness: 'ARY-AR1-5455-01-P103', status: 'Active', action: "" },
        { id: '0001236', Name: 'Abc Real Estate', type: 'D - 983', lineOfBusiness: 'ARY-AR1-5455-01-P103', status: 'In-Active', action: "" },
        // ... Add more recent requests as needed
    ],
    users: [
        { id: '0001234', Name: 'Gate And Arc', email: 'nagmani.b@exalogic.co', phone: '888888888', userRole: "Admin", status: 'Active', action: "" },
        { id: '0001235', Name: 'Abu Dhabi Real Estate', email: 'nagmani.b@exalogic.co', phone: '888888888', userRole: "Admin", status: 'Active', action: "" },
        { id: '0001236', Name: 'Abc Real Estate', email: 'nagmani.b@exalogic.co', phone: '888888888', userRole: "Admin", status: 'In-Active', action: "" },
        // ... Add more recent requests as needed
    ],
    'master-data-categories': [
        { id: '0001234', categoryName: 'Gate And Arc', status: 'nagmani.b@exalogic.co', createdAt: 'Oct 21, 2024', action: "" },
        { id: '0001235', categoryName: 'Abu Dhabi Real Estate', status: 'nagmani.b@exalogic.co', createdAt: 'Oct 21, 2024', action: "" },
        { id: '0001236', categoryName: 'Abc Real Estate', status: 'nagmani.b@exalogic.co', createdAt: 'Oct 21, 2024', action: "" },
        // ... Add more recent requests as needed
    ],
    'master-data-categorydetails': [
        { id: '0001234', categoryName: 'Gate And Arc', categoryDetailName: "Construction", status: 'Active', class: "No Data Available", createdAt: 'Oct 21, 2024', action: "" },
        { id: '0001235', categoryName: 'Abu Dhabi Real Estate', categoryDetailName: "Construction", status: 'Active', class: "No Data Available", createdAt: 'Oct 21, 2024', action: "" },
        { id: '0001236', categoryName: 'Abc Real Estate', categoryDetailName: "Construction", status: 'Active', class: "No Data Available", createdAt: 'Oct 21, 2024', action: "" },
        // ... Add more recent requests as needed
    ],
    'master-data-profit-center': [
        { id: '0001234', profitCenterName: 'Gate And Arc', profitCenterCode: "46000", companyName: "1000 -Abu Dhabi Real Estate", status: 'Active', createdAt: 'Oct 21, 2024', action: "" },
        { id: '0001235', profitCenterName: 'Abu Dhabi Real Estate', profitCenterCode: "46000", companyName: "1000 -Abu Dhabi Real Estate", status: 'Active', createdAt: 'Oct 21, 2024', action: "" },
        { id: '0001236', profitCenterName: 'Abc Real Estate', profitCenterCode: "46000", companyName: "1000 -Abu Dhabi Real Estate", status: 'Active', createdAt: 'Oct 21, 2024', action: "" },
        // ... Add more recent requests as needed
    ],
    'master-data-cost-center': [
        { id: '0001234', costCenterName: 'Gate And Arc', costCenterCode: "46000", companyName: "1000 -Abu Dhabi Real Estate", profitCenter: "10150 -Projects - Common", status: 'Active', action: "" },
        { id: '0001235', costCenterName: 'Abu Dhabi Real Estate', costCenterCode: "46000", companyName: "1000 -Abu Dhabi Real Estate", profitCenter: "10150 -Projects - Common", status: 'Active', action: "" },
        { id: '0001236', costCenterName: 'Abc Real Estate', costCenterCode: "46000", companyName: "1000 -Abu Dhabi Real Estate", profitCenter: "10150 -Projects - Common", status: 'Active', action: "" },
        // ... Add more recent requests as needed
    ],
    'master-data-configuration': [
        { id: '0001234', integrationName: ' MAINTANICE_REQUEST_CREATE_TO_PORTAL', integrationEndPoint: "https://webappapitest.ict.ae/lems/createMaintenanceRequest", userId: "1000 -Abu Dhabi Real Estate", method: "POST", authentication: "Card Payment", status: 'Active', action: "" },
        { id: '0001235', integrationName: 'CONTRACT_WITH_OFFER_CREATE_TO_PORTAL', integrationEndPoint: "https://webappapitest.ict.ae/lems/contractCreate", userId: "suresh.k@exalogic.co", method: "POST", authentication: "Card Payment", status: 'Active', action: "" },
        { id: '0001236', integrationName: 'CREATE_UPDATE_BUILDING_SYNC_TO_PORTAL', integrationEndPoint: "https://api.ict.realcube.estate/lems/getLemsBuilding", userId: "suresh.k@exalogic.co", method: "POST", authentication: "Card Payment", status: 'Active', action: "" },
        // ... Add more recent requests as needed
    ],

    'log-history': [
        { id: '0001234', ipAddress: '142.250.191.164', tableName: 'companies', createdBy: 'Leasing Admin', action: "" },
        { id: '0001235', ipAddress: '142.250.191.164', tableName: 'companies', createdBy: 'Leasing Admin', action: "" },
        { id: '0001236', ipAddress: '142.250.191.164', tableName: 'companies', createdBy: 'Leasing Admin', action: "" },
        // ... Add more recent requests as needed
    ],
    'reports-occupancy-report': [
        { id: '0001234', projectName: 'KHT-Khalidya Village 4', buildingName: "01 -Khalidya Village B01", unit: "1000 -Abu Dhabi Real Estate", status: 'Available' },
        { id: '0001235', projectName: 'KHT-Khalidya Village 4', buildingName: "KV1-P11A -Khalidya Village", unit: "suresh.k@exalogic.co", status: 'Available' },
        { id: '0001236', projectName: 'KHT-Khalidya Village 4', buildingName: "OFF-C110 -Nation Towers Offices", unit: "suresh.k@exalogic.co", status: 'Available' },
        // ... Add more recent requests as needed
    ],
    'reports-condition-report': [
        { id: '0001234', units: ' P103-P103', rentInRo: "5000", sdInRo: "No Data Available", validFrom: "May 01,2024", validTo: "No Data Available", rentInContract: 'No Data Available', sdInContract: "No Data Available" },
        { id: '0001235', units: 'P102-P102', rentInRo: "4000", sdInRo: "No Data Available", validFrom: "May 01,2024", validTo: "No Data Available", rentInContract: 'No Data Available', sdInContract: "No Data Available" },
        { id: '0001236', units: 'P101-P101', rentInRo: "8000", sdInRo: "No Data Available", validFrom: "May 01,2024", validTo: "No Data Available", rentInContract: 'No Data Available', sdInContract: "No Data Available" },
        // ... Add more recent requests as needed
    ],
    'reports-partnerReport': [
        { id: '0001234', projectName: 'USQ-United Square', building: "No Data Available", unit: "No Data Available", businessPartnerType: "Not Available", bpDescription: "Demo Agent", validFrom: "September 01, 2024", validTo: "No Data Available" },
        { id: '0001235', projectName: 'KHT-Khalidya Village 4', building: "KV4-P11A -قرية الخالدية 4", unit: "No Data Available", businessPartnerType: "Not Available", bpDescription: "Demo Agent", validFrom: "September 01, 2024", validTo: "No Data Available" },
        { id: '0001236', projectName: 'ABG-Al Bateen Gardens', building: "No Data Available", unit: "No Data Available", businessPartnerType: "Not Available", bpDescription: "Demo Agent", validFrom: "September 01, 2024", validTo: "No Data Available" },
        // ... Add more recent requests as needed

    ],
    'reports-measurement-report': [
        { id: '0001234', projectName: 'USQ-United Square', building: "No Data Available", measurementName: "Suite Area", measurementArea: '300SQFT', noOfRooms: "No Data Available", validFrom: "September 01, 2024", validTo: "No Data Available" },
        { id: '0001235', projectName: 'KHT-Khalidya Village 4', building: "KV4-P11A -قرية الخالدية 4", measurementName: "Suite Area", measurementArea: '300SQFT', noOfRooms: "No Data Available", validFrom: "September 01, 2024", validTo: "No Data Available" },
        { id: '0001236', projectName: 'ABG-Al Bateen Gardens', building: "No Data Available", measurementName: "Suite Area", measurementArea: '300SQFT', noOfRooms: "No Data Available", validFrom: "September 01, 2024", validTo: "No Data Available" },
        // ... Add more recent requests as needed

    ],


}

export const sampleViewTableData: any = {
    companies: [
        { id: '0001234', masterPlanName: 'Gate And Arc', masterPlanCode: 'D - 983', status: 'Unlauched', },
        { id: '0001235', masterPlanName: 'Abu Dhabi Real Estate', masterPlanCode: 'D - 983', status: 'Unlauched', },
        { id: '0001236', masterPlanName: 'Abc Real Estate', masterPlanCode: 'D - 983', status: 'Unlauched', },
        // ... Add more recent requests as needed
    ],
}


