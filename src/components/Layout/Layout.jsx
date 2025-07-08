import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <AppBar />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
