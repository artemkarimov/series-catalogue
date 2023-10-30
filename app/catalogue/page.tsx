'use client';

import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import Header from '@/app/components/Header';
import Card from '@/app/components/Card';
import Table from '@/app/components/Table';
import Icon from '@/app/components/Icon';
import { getSeries } from '@/api/api-helper';
import { SeriesData } from '@/common/types';
import { DEFAULT_PAGE, SERIES_CATALOGUE_TABLE_SCHEMA, STORAGE_KEY } from './constants';
import LoadingSpinner from '../components/LoadingSpinner';

const CataloguePage = () => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [search, setSearch] = useState('');
  const [selectorKey, setSelectorKey] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos', currentPage, search],
    queryFn: () => getSeries(currentPage, search),
  });

  const handlePageChange = useCallback((page: number) => setCurrentPage(page), []);

  const handleSearchChange = useCallback((currentSearch: string) => setSearch(currentSearch), []);

  const addSeriesToFavourites = (seriesId: number) => {
    const favouriteSeries = localStorage.getItem(STORAGE_KEY);
    console.log('hereeeeee');
    if (!favouriteSeries) localStorage.setItem(STORAGE_KEY, JSON.stringify([seriesId]));
    else {
      const parsedData = JSON.parse(favouriteSeries);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...parsedData, seriesId]));
    }
    setSelectorKey(previousValue => previousValue + 1);
  };

  const removeSeriesFromFavourites = (seriesId: number) => {
    const favouriteSeries = localStorage.getItem(STORAGE_KEY);

    if (favouriteSeries) {
      const parsedData = JSON.parse(favouriteSeries);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(parsedData.filter((id: number) => id !== seriesId)),
      );
      setSelectorKey(previousValue => previousValue + 1);
    }
  };

  const addActions = (data?: Omit<SeriesData, 'action'>[]): SeriesData[] | undefined => {
    if (!data) return;

    const favouriteSeries = localStorage.getItem(STORAGE_KEY);

    if (!favouriteSeries) {
      return data.map(seriesData => ({
        ...seriesData,
        action: (
          <Icon
            id={seriesData.id}
            icon={<StarOutlineIcon />}
            tooltipMessage="Add series to favourites"
            onClick={addSeriesToFavourites}
          />
        ),
      }));
    }

    return data.map(seriesData => ({
      ...seriesData,
      action: JSON.parse(favouriteSeries).includes(seriesData.id) ? (
        <Icon
          id={seriesData.id}
          icon={<StarIcon />}
          tooltipMessage="Remove series from favourites"
          onClick={removeSeriesFromFavourites}
        />
      ) : (
        <Icon
          id={seriesData.id}
          icon={<StarOutlineIcon />}
          tooltipMessage="Add series to favourites"
          onClick={addSeriesToFavourites}
        />
      ),
    }));
  };

  // if (!isError)
  //   return <h1>Something went wrong. Please, try reloading the page or try getting data later.</h1>;

  return (
    <LoadingSpinner open={isLoading}>
      <Header />
      <Card>
        {isError ? (
          <h1 className="error">
            Something went wrong. Please, try reloading the page or try getting the data later.
          </h1>
        ) : (
          <Table
            key={selectorKey}
            columns={SERIES_CATALOGUE_TABLE_SCHEMA}
            data={addActions(data?.seriesData) || []}
            pageCount={data?.pages || 0}
            currentPage={currentPage}
            search={search}
            onPageChange={handlePageChange}
            onSearchChange={handleSearchChange}
          />
        )}
      </Card>
    </LoadingSpinner>
  );
};

export default CataloguePage;
