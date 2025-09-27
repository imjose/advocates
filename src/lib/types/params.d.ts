export type SearchPaginationParams = SearchParams & PaginationOptions;

export interface SearchParams {
    query?: string;
}

export interface PaginationOptions {
    page: number;
    pageSize: number;
}

export interface PaginatedResult<T> {
    data: T[];
    totalItems: number;
}