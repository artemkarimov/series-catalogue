import { ReactNode } from 'react';

import CardWrapper from './StyledCard';

const Card = ({ children }: { children: ReactNode }) => <CardWrapper>{children}</CardWrapper>;

export default Card;
