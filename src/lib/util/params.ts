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