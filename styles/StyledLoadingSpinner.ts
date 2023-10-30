import styled from 'styled-components';

const LoadingSpinnerWrapper = styled.div`
  .backdrop {
    color: ${({ theme }) => theme.colors.black};
    z-index: 1000;
  }
`;

export default LoadingSpinnerWrapper;
