import { SeriesData, TableSchema } from '@/common/types';

export const SERIES_CATALOGUE_TABLE_SCHEMA: TableSchema<SeriesData> = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Network',
    accessor: 'network',
  },
  {
    Header: 'Start Date',
    accessor: 'start_date',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];

export const DEFAULT_PAGE = 1;

export const STORAGE_KEY = 'series-catalogue-favourites';
