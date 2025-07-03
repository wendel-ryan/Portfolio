import React from "react";
import './index.css'
import Main from './routes/Main'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>} />
    </Routes>
    </>
  );
}

export default App;
