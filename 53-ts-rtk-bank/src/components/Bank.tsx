import React from 'react';
interface Props {
  //info: { name: string };
  index: number;
  info: (index: number) => { name: string };
}
const Bank = ({ info, index }: Props) => {
  return (
    <h1 className="text-center text-uppercase">
      Iron Bank of {info(index).name}
    </h1>
  );
};

export default React.memo(Bank);
