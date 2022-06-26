import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from '../pages/mainpage';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/main" element={<Main />} />
        </Routes>

      </BrowserRouter>
    )
  }
}