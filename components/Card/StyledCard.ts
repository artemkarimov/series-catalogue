import styled from 'styled-components';

const CardWrapper = styled.main`
  margin: 1rem;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 1rem 2rem ${({ theme }) => theme.colors.transparentBlack};

  .error {
    font-size: 2.5rem;
    margin: 30rem;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
  }
`;

export default CardWrapper;
