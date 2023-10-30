import { AxiosHeaders } from 'axios';

export type SeriesData = {
  id: number;
  name: string;
  country: string;
  network: string;
  start_date: string;
  status: string;
  action: JSX.Element;
};

export type TableSchema<T> = {
  Header: string;
  accessor: keyof T;
}[];

export type ApiResponseData = {
  page: number;
  pages: number;
  total: string;
  seriesData: Omit<SeriesData, 'action'>[];
};

export type ApiResponse = {
  status: number;
  data: ApiResponseData;
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  statusText: string;
};
