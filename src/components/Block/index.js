import React from 'react';
import { MatrixBox } from './styledComponents';

const Block = ({ filled, onClick, deactivated, isDisabled }) => {
  return (
    <MatrixBox
      type="button"
      filled={filled}
      deactivated={deactivated}
      onClick={onClick}
      disabled={isDisabled}
    />
  );
};

export default Block;
