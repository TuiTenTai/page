import React, { useState, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataSelector, errSelector, pendingSelector } from 'state/reducers/data';
import { searchSelector } from 'state/reducers/search';
import { isResponsiveSelector } from 'state/reducers/responsive';
import { ITEM_PER_PAGE } from 'constant';
import useRightClick from 'hooks/useRightClick';
import { Loading } from 'styles';
import Container from '@mui/material/Container';
import Breadcrumbs from 'components/Breadcrumbs';
import SearchField from 'components/SearchField';
import AddNewButton from 'components/AddNewButton';
import FormModal from 'components/FormModal';
import { CardsContainer } from 'styles/Card';
import Card from 'components/Card';
import RightClickMenu from 'components/RightClickMenu';
import Pagination from 'components/Pagination';
import Error400 from 'pages/ErrorPage/400Error';

interface ContentPageProps {
  type: string;
  status: string;
}

const ContentPage: React.FC<ContentPageProps> = ({ type, status }) => {
  const isPending = useSelector(pendingSelector);
  const errMess = useSelector(errSelector);
  const data = useSelector(dataSelector);
  const search = useSelector(searchSelector);
  const isResponsive = useSelector(isResponsiveSelector);
  const [x, y, isShowMenu] = useRightClick();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { pathname } = useLocation();

  useEffect((): void => {
    setCurrentPage(1);
  }, [pathname]);

  const indexOfLastItem = currentPage * ITEM_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEM_PER_PAGE;

  if (isPending) return <Loading />;
  if (errMess !== null) return <Error400 />;

  const filterData = data
    .filter((item) => item.type === type)
    .filter((item) => status === 'all' || item.status === status)
    .filter((item) => item.name.toLowerCase().includes(search));

  const pageData = filterData.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumber = Math.ceil(filterData.length / ITEM_PER_PAGE);

  return (
    <Container maxWidth='lg'>
      <Breadcrumbs type={type} status={status} />
      {isResponsive && <SearchField fullWidth style={{ marginBottom: '10px' }} />}

      {pageData.length !== 0 ? (
        <>
          <CardsContainer>
            {pageData.map((item) => (
              <Card key={item._id} content={item} />
            ))}
          </CardsContainer>
          <Pagination count={pageNumber} setCurrentPage={setCurrentPage} />
          <RightClickMenu x={x} y={y} show={isShowMenu} />
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>No match found</div>
      )}

      <AddNewButton />
      <FormModal />
      <Outlet />
    </Container>
  );
};

export default ContentPage;
