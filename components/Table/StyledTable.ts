import styled from 'styled-components';

const TableWrapper = styled.header`
  font-size: 1.6rem;

  .search-input {
    font-size: 1.8rem;
    width: 28rem;
    padding: 1rem;
    margin-bottom: 2rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 0.5rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
      width: 100%;
    }
  }

  .table-wrapper {
    overflow-x: scroll;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    border: 0.1rem solid ${({ theme }) => theme.colors.lightGray};

    &-header,
    &-data {
      padding: 0.8rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.lightGray};
      text-align: center;
    }

    &-header {
      background-color: ${({ theme }) => theme.colors.paleGray};
      color: ${({ theme }) => theme.colors.black};
      font-weight: bold;
    }

    &-data {
      color: ${({ theme }) => theme.colors.gray};
    }

    &-row {
      &:nth-child(odd) {
        background-color: ${({ theme }) => theme.colors.white};
      }

      &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.trafficWhite};
      }
    }
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    .pagination {
      font-size: 1.6rem;
      padding: 1.6rem 1.2rem;

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 1.4rem;
        padding: 0;
      }
    }
  }
`;

export default TableWrapper;
