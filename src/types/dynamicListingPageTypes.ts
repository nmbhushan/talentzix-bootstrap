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