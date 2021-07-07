function buildFilter(filter) {
    let activeFilters = {};
    for (let keys in filter) {
        if (filter[keys].length > 0) {
            activeFilters[keys] = filter[keys];
        }
    }
    return activeFilters;
}
export  default buildFilter;