import axios from 'axios';

import { ApiResponseData } from '@/common/types';

const API_URL = 'https://www.episodate.com/api';

const axiosApi = axios.create({
  baseURL: API_URL,
});

export const getSeries = async (
  page: number,
  search: string,
): Promise<ApiResponseData & { status: number }> => {
  const endpoint = search ? `/search?q=${search}&page=${page}` : `/most-popular?page=${page}`;
  const response = await axiosApi.get(endpoint);
  return { ...response.data, status: response.status, seriesData: response.data['tv_shows'] };
};
