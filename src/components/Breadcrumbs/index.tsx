import React from 'react';
import { useSelector } from 'react-redux';
import { isResponsiveSelector } from 'state/reducers/responsive';
import { capitalize } from '@mui/material';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { AppBar } from 'styles';
import Sidebar from 'components/Sidebar';
import { BreadcrumbsLink, Toolbar } from 'styles/Breadcrumbs';
import SearchField from 'components/SearchField';
import { statusInterface, typeInterface } from 'constant/interface';

interface BreadcrumbsProps {
  type: typeInterface;
  status: 'all' | statusInterface;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ type, status }) => {
  const isResponsive = useSelector(isResponsiveSelector);

  const upCaseType = capitalize(type);
  const upCaseStatus = capitalize(status);
  const path = '/' + type + '/' + status;

  return (
    <AppBar>
      <Toolbar>
        <MuiBreadcrumbs separator={<NavigateNextIcon fontSize='small' />}>
          <BreadcrumbsLink to='/'>
            <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
            Home
          </BreadcrumbsLink>
          <BreadcrumbsLink to={`/${type}`}>{upCaseType}</BreadcrumbsLink>
          {upCaseStatus !== 'All' && <BreadcrumbsLink to={path}>{upCaseStatus}</BreadcrumbsLink>}
        </MuiBreadcrumbs>
        {!isResponsive && <SearchField />}
        <Sidebar />
      </Toolbar>
    </AppBar>
  );
};

export default Breadcrumbs;
