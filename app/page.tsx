'use client';

import { styled } from 'styled-components';

const Wrapper = styled.div`
  background-image: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.primaryLight},
    ${({ theme }) => theme.colors.primaryDark}
  );
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

const Home = () => <Wrapper />;

export default Home;
