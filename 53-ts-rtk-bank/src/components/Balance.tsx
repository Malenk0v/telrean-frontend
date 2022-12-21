import { useCallback } from 'react';
//import { useMemo } from 'react';
//import { useState } from 'react';
import { useSelector } from 'react-redux';
import { accountReducer } from '../reducers/accountReducer';
import quoteReducer from '../reducers/quoteReducer';
import { RootState } from '../store/configureStore';
import { getBank, getReandomIndex, names } from '../utils/constants';
import Bank from './Bank';

const Balance = () => {
  const { balance } = useSelector<RootState, ReturnType<typeof accountReducer>>(
    (state) => state.account
  );
  const { text } = useSelector<RootState, ReturnType<typeof quoteReducer>>(
    (state) => state.quote
  );

  // const info = 'Braavos';
  //const [info, setInfo] = useState({ name: 'Braavos' });
  const index = getReandomIndex(names.length);

  //const info = { name: names[index] };
  //const info = useMemo(() => ({ name: names[index] }), [index]);

  //const info = (index: number) => getBank(index);
  const info = useCallback(getBank, [index]);
  return (
    <div>
      <Bank info={info} index={index} />
      <h4 className="text-center text-uppercase">{text}</h4>
      <h3 className="text-center text-uppercase">Balance = {balance}</h3>
    </div>
  );
};

export default Balance;
