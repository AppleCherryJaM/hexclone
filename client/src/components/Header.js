import React from 'react';
// import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

// const StyledHeader = styled.header`
//   position: relative;
//   display: flex;
//   flex-wrap: nowrap;
//   justify-content: flex-start;
//   align-items: center !important;
// `;

const Header = () => {
  return (
    <div className="container">
      <header className="navbar navbar-light navbar-expand-lg border-bottom align-items-center py-lg-3 mb-4">
        <Link className="navbar-brand pt-lg-0 pb-lg-2 " to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            
          </svg>
        </Link>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
