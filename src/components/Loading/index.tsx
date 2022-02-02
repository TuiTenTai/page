import React from 'react';
import { LoadDiv } from 'styles/Loading';

const divList: JSX.Element[] = [];
for (let i = 1; i <= 8; i++) {
  divList.push(<div key={i}></div>);
}

const Loading: React.FC = () => {
  return <LoadDiv>{divList.map((div) => div)}</LoadDiv>;
};

export default Loading;
