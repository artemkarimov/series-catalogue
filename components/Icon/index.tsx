import { type ReactElement } from 'react';
import { Tooltip } from '@mui/material';

import IconWrapper from './StyledIcon';

type IconProps = {
  id: number;
  icon: ReactElement;
  tooltipMessage?: string;
  onClick: (id: number) => void;
};

const Icon = ({ id, icon, tooltipMessage, onClick }: IconProps) => (
  <IconWrapper onClick={() => onClick(id)}>
    {tooltipMessage ? (
      <Tooltip title={<h1>{tooltipMessage}</h1>} className="tooltip">
        {icon}
      </Tooltip>
    ) : (
      <div>{icon}</div>
    )}
  </IconWrapper>
);

export default Icon;
