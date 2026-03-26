import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export interface ExportColumn {
  key: string;
  label: string;
  format?: (value: any) => string;
}

export interface ExportOptions {
  filename: string;
  sheetName?: string;
  columns: ExportColumn[];
  data: any[];
}

/**
 * Export data to Excel (.xlsx) format
 */
export function exportToExcel(options: ExportOptions) {
  const { filename, sheetName = 'Sheet1', columns, data } = options;

  // Transform data to match column structure
  const formattedData = data.map(row => {
    const formattedRow: any = {};
    columns.forEach(col => {
      const value = row[col.key];
      formattedRow[col.label] = col.format ? col.format(value) : value;
    });
    return formattedRow;
  });

  // Create worksheet
  const worksheet = XLSX.utils.json_to_sheet(formattedData);

  // Auto-size columns
  const columnWidths = columns.map(col => ({
    wch: Math.max(col.label.length, 15)
  }));
  worksheet['!cols'] = columnWidths;

  // Create workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Generate Excel file
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { 
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
  });

  // Save file
  const timestamp = new Date().toISOString().split('T')[0];
  saveAs(blob, `${filename}-${timestamp}.xlsx`);
}

/**
 * Export data to CSV format
 */
export function exportToCSV(options: ExportOptions) {
  const { filename, columns, data } = options;

  // Transform data to match column structure
  const formattedData = data.map(row => {
    const formattedRow: any = {};
    columns.forEach(col => {
      const value = row[col.key];
      formattedRow[col.label] = col.format ? col.format(value) : value;
    });
    return formattedRow;
  });

  // Create worksheet
  const worksheet = XLSX.utils.json_to_sheet(formattedData);

  // Convert to CSV
  const csv = XLSX.utils.sheet_to_csv(worksheet);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

  // Save file
  const timestamp = new Date().toISOString().split('T')[0];
  saveAs(blob, `${filename}-${timestamp}.csv`);
}

/**
 * Format date for export
 */
export function formatDateForExport(date: string | Date): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  });
}

/**
 * Format array for export (joins with commas)
 */
export function formatArrayForExport(arr: any[]): string {
  if (!arr || !Array.isArray(arr)) return '';
  return arr.join(', ');
}
