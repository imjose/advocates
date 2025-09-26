export interface PaginationOptions {
    page: number;
    pageSize: number;
}

export interface PaginatedResult<T> {
    data: T[];
    totalItems: number;
}