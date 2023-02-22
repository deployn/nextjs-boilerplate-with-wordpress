import { format } from 'date-fns';

export function formatDate(date: any, pattern = 'PPP') {
  return format(new Date(date), pattern);
}

export function sortObjectsByDate(array: any, { key = 'date' } = {}) {
  return array.sort((a: any, b: any) => {
    const dateA = new Date(a[key]).valueOf();
    const dateB = new Date(b[key]).valueOf();

    return dateB - dateA;
  });
}
