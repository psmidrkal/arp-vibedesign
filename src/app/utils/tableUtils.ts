export type SortDirection = 'asc' | 'desc' | null;

export interface SortConfig {
  key: string;
  direction: SortDirection;
}

/**
 * Sort data based on configuration
 */
export function sortData<T>(data: T[], config: SortConfig | null): T[] {
  if (!config || !config.direction) {
    return data;
  }

  return [...data].sort((a, b) => {
    const aValue = (a as any)[config.key];
    const bValue = (b as any)[config.key];

    // Handle null/undefined
    if (aValue == null && bValue == null) return 0;
    if (aValue == null) return 1;
    if (bValue == null) return -1;

    // Compare values
    let comparison = 0;
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      comparison = aValue.localeCompare(bValue);
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      comparison = aValue - bValue;
    } else if (aValue instanceof Date && bValue instanceof Date) {
      comparison = aValue.getTime() - bValue.getTime();
    } else {
      // Convert to string and compare
      comparison = String(aValue).localeCompare(String(bValue));
    }

    return config.direction === 'asc' ? comparison : -comparison;
  });
}

/**
 * Filter data based on search query
 */
export function searchData<T>(data: T[], query: string, searchKeys: (keyof T)[]): T[] {
  if (!query.trim()) {
    return data;
  }

  const lowerQuery = query.toLowerCase();
  return data.filter(item => {
    return searchKeys.some(key => {
      const value = item[key];
      if (value == null) return false;
      
      // Handle arrays
      if (Array.isArray(value)) {
        return value.some(v => String(v).toLowerCase().includes(lowerQuery));
      }
      
      return String(value).toLowerCase().includes(lowerQuery);
    });
  });
}

/**
 * Filter data based on multiple filter criteria
 */
export function filterData<T>(data: T[], filters: Record<string, any>): T[] {
  return data.filter(item => {
    return Object.entries(filters).every(([key, filterValue]) => {
      // Skip if filter is not set
      if (filterValue === '' || filterValue === null || filterValue === undefined) {
        return true;
      }

      const itemValue = (item as any)[key];

      // Handle array filters (multi-select)
      if (Array.isArray(filterValue)) {
        if (filterValue.length === 0) return true;
        
        // If item value is array, check for intersection
        if (Array.isArray(itemValue)) {
          return filterValue.some(fv => itemValue.includes(fv));
        }
        
        return filterValue.includes(itemValue);
      }

      // Handle single value
      return itemValue === filterValue;
    });
  });
}

/**
 * Get unique values for a column (for filter options)
 */
export function getUniqueValues<T>(data: T[], key: keyof T): any[] {
  const uniqueSet = new Set<any>();
  
  data.forEach(item => {
    const value = item[key];
    if (value != null) {
      if (Array.isArray(value)) {
        value.forEach(v => uniqueSet.add(v));
      } else {
        uniqueSet.add(value);
      }
    }
  });

  return Array.from(uniqueSet).sort();
}

/**
 * Paginate data
 */
export function paginateData<T>(data: T[], page: number, pageSize: number): T[] {
  const startIndex = (page - 1) * pageSize;
  return data.slice(startIndex, startIndex + pageSize);
}

/**
 * Calculate total pages
 */
export function getTotalPages(totalItems: number, pageSize: number): number {
  return Math.ceil(totalItems / pageSize);
}
