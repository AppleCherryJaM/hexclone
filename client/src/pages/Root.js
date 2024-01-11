import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main({});

const RootLayout = () => {
  return (
    <>
      <Header />
      <Main className='mb-5'>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default RootLayout;
