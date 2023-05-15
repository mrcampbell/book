import React, { useState } from 'react';
import clsx from 'clsx';

interface Delta {
  start: number;
  end: number;
}

const InterestHolders = () => {

  const employeeDelta = useState<Delta>({ start: 0, end: 0 });
  const averageIncomeDelta = useState<Delta>({ start: 0, end: 0 });



  return <div>
    (interactive chart in the works, for now just a placeholder)


  </div>;
};

export default InterestHolders;