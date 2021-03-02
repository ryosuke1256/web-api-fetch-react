import React, { useState } from 'react';

let i = 0;

const App = () => {
  const [userName, setUserName] = useState('');
  const onButtonClick = async () => {
    const params = {
      method: 'GET',
    };
    const res = await window.fetch('https://jsonplaceholder.typicode.com/users', params);
    const jsonData = await res.json();
    if (i >= 9) {
      setUserName('もうありません');
    } else {
      setUserName(jsonData[i].name);
      i++;
    }
  };

  return (
    <>
      <button onClick={() => onButtonClick()}>新しいユーザ名を取得してみよう！</button>
      <div>{userName}</div>
    </>
  );
};

export default App;
