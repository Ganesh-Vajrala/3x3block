import React, { useState } from 'react';
import { MatrixContainer, Wrapper } from './styledCompoents';
import Block from '../Block';

const MainComponent = () => {
  const matrix = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ];

  const [order, setOrder] = useState([]);
  const [deactivatedCells, setDeactivatedCells] = useState(new Set());
  const [isDeactivated, setIsDeactivated] = useState(false);

  const deactivateCells = () => {
    setIsDeactivated(true);
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        const newDeactivatedCells = new Set(deactivatedCells);
        if (newOrder.length > 0) {
          newDeactivatedCells.add(newOrder[0]); 
          newOrder.shift();
        } 
        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivated(false);
        }
        setDeactivatedCells(newDeactivatedCells);
        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    console.log(newOrder);

    if (newOrder.length === matrix.flat(1).length) {
      deactivateCells();
    }
  };

  return (
    <Wrapper>
      <MatrixContainer>
        {matrix.flat(1).map((value, index) => (
          <Block 
            key={index} 
            filled={order.includes(index)} 
            onClick={() => activateCells(index)} 
            deactivated={deactivatedCells.has(index)}
            isDisabled={order.includes(index) || isDeactivated} 
          />
        ))}
      </MatrixContainer>
    </Wrapper>
  );
};

export default MainComponent;
