import * as React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'pages/NotFound';



import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const NewContact = lazy(() => import('pages/NewContact/NewContact'));
const EditContact = lazy(() => import('pages/EditContact/EditContact'));
const Welcome = lazy(() => import('pages/Welcome/Welcome'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute redirectTo="/login" component={<Home />} />
              }
            />
            <Route 
              path="/newcontact" 
              element={
                <PrivateRoute redirectTo="/login" component={<NewContact />} />
              }
            />
            <Route 
              path="/:id" 
              element={
                <PrivateRoute redirectTo="/login" component={<EditContact />} />
              }
              />
            <Route path="/" element={<LoginPage />} />
            <Route path="/welcome" element={<Welcome />} />
            
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
        <ToastContainer />
      </ChakraProvider>
    </>
  );
}
