import { type PropsWithChildren } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

import LoadingSpinnerWrapper from './StyledLoadingSpinner';

type LoadingSpinnerProps = PropsWithChildren<{ open: boolean }>;

const LoadingSpinner = ({ open, children }: LoadingSpinnerProps) => (
  <LoadingSpinnerWrapper>
    {children}
    <Backdrop className="backdrop" open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  </LoadingSpinnerWrapper>
);

export default LoadingSpinner;
