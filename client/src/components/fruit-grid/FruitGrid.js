import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const FruitGrid = () => {
  const { fruits, useFruits } = useState([]);

  useEffect(() => {
    axios.get('../../../../data/fruits.json').then((res) => {
      console.log(res);
    });
  });

  return (
    <div>
      <h1>Fruit #1</h1>
    </div>
  );
};

export default FruitGrid;
