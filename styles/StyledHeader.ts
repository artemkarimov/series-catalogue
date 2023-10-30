import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  height: 10vh;

  .header {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 2rem;
      letter-spacing: 0.5rem;
      text-align: center;
    }
  }
`;

export default HeaderWrapper;
