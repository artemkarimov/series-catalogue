import Link from 'next/link';

import { Route } from '@/common/enums';
import HomePageWrapper from '@/styles/pages/StyledHomePage';

const HomePage = () => (
  <HomePageWrapper>
    <div className="content-wrapper">
      <h1 className="heading">
        <span className="heading-part heading-part--first">Series</span>
        <span className="heading-part heading-part--second">Catalogue</span>
      </h1>
      <Link href={Route.Catalogue}>
        <button className="cta-button">View the catalogue</button>
      </Link>
    </div>
  </HomePageWrapper>
);

export default HomePage;
