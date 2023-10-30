import Link from 'next/link';
import { Route } from '@/common/enums';

import HeaderWrapper from '@/styles/StyledHeader';

const Header = () => (
  <HeaderWrapper>
    <Link href={Route.Home}>
      <h1 className="header">Series Catalogue</h1>
    </Link>
  </HeaderWrapper>
);

export default Header;
