import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import api from 'api';
import { fetchApiFail, fetchApiSuccess } from 'state/action-creators/data';
import { changeIsResponsiveValue } from 'state/action-creators/responsive';
import GlobalStyles from 'styles';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import HomePage from 'pages';
import { STATUS_LIST, TYPE_LIST } from 'utils/constant';
import ContentPage from 'pages/content';
import Error404 from 'pages/404';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect((): void => {
    const fetchApi = async () => {
      try {
        const res = await api.get();
        dispatch(fetchApiSuccess(res.data.reverse()));
      } catch (err) {
        dispatch(fetchApiFail(err));
      }
    };
    fetchApi();
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', (): void => {
      dispatch(changeIsResponsiveValue());
    });

    return (): void => {
      window.removeEventListener('resize', (): void => {
        dispatch(changeIsResponsiveValue());
      });
    };
  }, [dispatch]);

  return (
    <Router>
      <GlobalStyles />
      <Topbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Sidebar />
              <HomePage />
            </>
          }
        />
        {TYPE_LIST.map((type) => (
          <Route path={`/${type}`} key={type}>
            <Route path='' element={<ContentPage type={type} status='all' />} />
            {STATUS_LIST.map((status) => (
              <Route
                path={status}
                element={<ContentPage type={type} status={status} />}
                key={status}
              />
            ))}
          </Route>
        ))}
        <Route
          path='*'
          element={
            <>
              <Sidebar />
              <Error404 />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
