import React from 'react';
import { useNavigate } from 'react-router';

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <h1 id='main-heading'>My Daily Sugar & BP</h1>
      <div className="header-add-div">
        <button type="button" onClick={() => navigate('/addbp')}>Add BP</button>
        <button type="submit" onClick={() => navigate('/addsugar')}>Add Sugar</button>
      </div>
      <div className="header-get-div">
        <button type="button" onClick={() => navigate('/getbp')}>Show BP</button>
        <button type="submit" onClick={() => navigate('/getdiabetes')}>Show Sugar</button>
      </div>
    </>
  )
}

export default Header;