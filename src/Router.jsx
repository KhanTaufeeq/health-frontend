import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetDiabetes from './components/GetDiabetes';
import AddDiabetes from './components/AddDiabetes';
import Header from './components/Header';
import GetBP from './components/GetBP';
import AddBP from './components/AddBP';
import UpdateDiabetes from './components/UpdateDiabetes';
import UpdateBP from './components/UpdateBP';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Header/>}/>
          <Route path = '/getdiabetes' element = {<GetDiabetes/>}/>
          <Route path = '/addsugar' element={<AddDiabetes/>} />
          <Route path = '/getbp' element = {<GetBP/>} />
          <Route path='/addbp' element={<AddBP />} />
          <Route path='/updatediabetes' element={<UpdateDiabetes />} />
          <Route path="/updatebp" element={<UpdateBP/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router;
