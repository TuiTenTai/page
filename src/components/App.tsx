import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import api from 'api';
import { fetchApiFail, fetchApiSuccess } from 'state/action-creators/data';
import GlobalStyles from 'styles';
import Topbar from './Topbar';
import Slidebar from './Slidebar';
import HomePage from 'pages/HomePage';
import { statusList, typeList } from 'constant';
import ContentPage from 'pages/ContentPage';
import Error404 from 'pages/ErrorPage/404Error';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
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

  return (
    <Router>
      <GlobalStyles />
      <Topbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Slidebar />
              <HomePage />
            </>
          }
        />
        {typeList.map((type) => (
          <Route path={`/${type}`} key={type}>
            <Route path='' element={<ContentPage type={type} status='all' />} />
            {statusList.map((status) => (
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
              <Slidebar />
              <Error404 />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
