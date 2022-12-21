import React from 'react';
import { useState } from 'react';
import { startPage, pages } from '../utils/constants';
import Cats from './Cats';
import Start from './Start';

const StartApp = () => {
  const [page, setPage] = useState(startPage);
  switch (page) {
    case startPage:
      return <Start setPage={() => setPage(pages[1])} />;
    case pages[1]:
      return <Cats />;
  }
};

export default StartApp;
