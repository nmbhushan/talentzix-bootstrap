"use client"
import React, { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { ReusablePaginationProps } from "@/mock/mockSalesMaster";


const DynamicPagination = ({
    defaultPageSize,
    showPagination,
    showEntryCount,
    showPageSizeOptions,
    pageSizeOptions,
    currentPage,
    totalItems,
    onPageChange,
    onPageSizeChange,
    entryLabel = (start, end, total) =>
        `Showing ${start} to ${end} of ${total} entries`,
}: ReusablePaginationProps) => {
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const totalPages = Math.ceil(totalItems / pageSize);

    const handlePageSizeChange = (newSize: string) => {
        const size = parseInt(newSize, 10);
        setPageSize(size);
        onPageSizeChange(size);
        onPageChange(1);
    };

    if (!showPagination) {
        return null;
    }

    const startEntry = (currentPage - 1) * pageSize + 1;
    const endEntry = Math.min(currentPage * pageSize, totalItems);

    return (
        <div className="flex items-center justify-between w-full">
            {showEntryCount && (
                <div className="text-sm text-muted-foreground w-fll">
                    {entryLabel(startEntry, endEntry, totalItems)}
                </div>
            )}
            <Pagination className="contents">
                <PaginationContent>
                    {/* First Page */}
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => onPageChange(1)}
                            className={`${currentPage === 1 ? "pointer-events-none opacity-50" : ""
                                }`}
                            aria-disabled={currentPage === 1}
                        >
                            First
                        </PaginationLink>
                    </PaginationItem>
                    {/* Previous Page */}
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                            className={`${currentPage === 1 ? "pointer-events-none opacity-50" : ""
                                }`}
                            aria-disabled={currentPage === 1}
                        />
                    </PaginationItem>
                    {/* Pagination Numbers */}
                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                            return (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        onClick={() => onPageChange(page)}
                                        isActive={page === currentPage}
                                        aria-current={page === currentPage ? "page" : undefined}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        } else if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                        ) {
                            return <PaginationEllipsis key={page} />;
                        }
                        return null;
                    })}
                    {/* Next Page */}
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                            className={`${currentPage === totalPages
                                ? "pointer-events-none opacity-50"
                                : ""
                                }`}
                            aria-disabled={currentPage === totalPages}
                        />
                    </PaginationItem>
                    {/* Last Page */}
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => onPageChange(totalPages)}
                            className={`${currentPage === totalPages
                                ? "pointer-events-none opacity-50"
                                : ""
                                }`}
                            aria-disabled={currentPage === totalPages}
                        >
                            Last
                        </PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
           
        </div>
    );
}

export default DynamicPagination





