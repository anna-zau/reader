import React from 'react';
import { Reader } from './Reader/Reader';
import publications from '../data/publications.json';

export const App = () => {
  return (
    <div>
      <Reader items={publications} />
    </div>
  );
};
