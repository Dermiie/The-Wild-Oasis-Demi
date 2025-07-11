import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import Cabins from './pages/Cabins';
import Bookings from './pages/Bookings';
import Users from './pages/Users';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}>
            <Route
              index
              element={<Navigate replace to={'dashboard'}></Navigate>}
            />
            <Route path="dashboard" element={<Dashboard></Dashboard>} />
            <Route path="bookings" element={<Bookings></Bookings>} />
            <Route path="cabins" element={<Cabins></Cabins>} />
            <Route path="users" element={<Users></Users>} />
            <Route path="settings" element={<Settings></Settings>} />
            <Route path="account" element={<Account></Account>} />
          </Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },

          style: {
            fontSize: '16px',
            maxWidth: '500px',
            backgroundColor: 'var(--color-grey-0)',
            padding: '16px, 24px',
            color: 'var(--color-grey-700)',
          },
        }}
      ></Toaster>
    </QueryClientProvider>
  );
}

export default App;
