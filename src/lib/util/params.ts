/**
 * Resolves search parameters from a generic object into URLSearchParams
 * @param options - (optional) generic object containing key-value pairs to be converted to URLSearchParams
 * @returns URLSearchParams
 */
export function resolveSearchParams<T>(options?: T): URLSearchParams {
    const searchParams = new URLSearchParams();
    if (options) {
        Object.entries(options).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                searchParams.append(key, String(value));
            }
        });
    }
    return searchParams;
}