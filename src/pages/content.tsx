import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataSelector, errSelector, pendingSelector } from 'state/reducers/data';
import { searchSelector } from 'state/reducers/search';
import { isResponsiveSelector } from 'state/reducers/responsive';
import useRightClick from 'hooks/useRightClick';
import Loading from 'components/Loading';
import Container from '@mui/material/Container';
import Breadcrumbs from 'components/Breadcrumbs';
import SearchField from 'components/SearchField';
import AddNewButton from 'components/AddNewButton';
import FormModal from 'components/FormModal';
import { CardsContainer } from 'styles/Card';
import Card from 'components/Card';
import RightClickMenu from 'components/RightClickMenu';
import Pagination from 'components/Pagination';
import Error400 from 'pages/400';
import { statusInterface, typeInterface } from 'utils/interface';
import useItemPerPage from 'hooks/useItemPerPage';

interface ContentPageProps {
  type: typeInterface;
  status: 'all' | statusInterface;
}

const ContentPage: React.FC<ContentPageProps> = ({ type, status }) => {
  const isPending = useSelector(pendingSelector);
  const errMess = useSelector(errSelector);
  const data = useSelector(dataSelector);
  const search = useSelector(searchSelector);
  const isResponsive = useSelector(isResponsiveSelector);
  const [x, y, isShowMenu] = useRightClick();
  const itemPerPage = useItemPerPage();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { pathname } = useLocation();

  useEffect((): void => {
    setCurrentPage(1);
  }, [pathname]); // eslint-disable-line

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  const filterData = data
    .filter((item) => item.type === type)
    .filter((item) => status === 'all' || item.status === status)
    .filter((item) => item.name.toLowerCase().includes(search));

  const pageData = filterData.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumber = Math.ceil(filterData.length / itemPerPage) || 1;

  useEffect((): void => {
    if (currentPage <= pageNumber) return;
    setCurrentPage(pageNumber);
  }, [currentPage, pageNumber]);

  if (isPending) return <Loading />;
  if (errMess !== null) return <Error400 />;

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
