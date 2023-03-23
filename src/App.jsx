import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { NotFound } from './pages/NotFound';
import { AddictionPage } from './pages/AddictionPage';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/addiction" element={<AddictionPage />} />
      {/* <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идет загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        /> */}
      {/* <Route
          path="*"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route> */}
    </Routes>
  );
}

export default App;
