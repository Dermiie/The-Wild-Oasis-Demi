import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
  return (
    <>
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
    </>
  );
}

export default App;
