import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PizzaIngredientPage from './pages/PizzaIngredientPage';
import PizzaSaucePage from './pages/PizzaSaucePage';
import ResultPage from './pages/ResultPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/PizzaIngredient" element={<PizzaIngredientPage />} />
      <Route path="/PizzaSaucePage" element={<PizzaSaucePage />} />
      <Route path="/ResultPage" element={<ResultPage />} />
      <Route index element={<MainPage />} />
    </Routes>
  );
};

export default App;
