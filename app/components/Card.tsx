import { ReactNode } from 'react';

import CardWrapper from '@/styles/StyledCard';

const Card = ({ children }: { children: ReactNode }) => <CardWrapper>{children}</CardWrapper>;

export default Card;
