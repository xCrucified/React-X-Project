import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/routes/Layout"
import NoPage from "./components/routes/EmptyPage"
import Posts from './components/Posts';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path='/home' element={<Home />}/> */}
          <Route index element={<Posts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
