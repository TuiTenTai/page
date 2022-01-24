import { styled } from '@mui/material';
import MuiToolbar from '@mui/material/Toolbar';
import { Link } from 'styles';

export const BreadcrumbsLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Toolbar = styled(MuiToolbar)`
  margin: 0.25rem;
  display: flex;
  justify-content: space-between;
`;
