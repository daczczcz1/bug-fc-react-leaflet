import React from 'react';
import BadMap from './BadMap';
import GoodMap from './GoodMap';

const App: React.FC = () => {
  return (
    <div className="App">
      <BadMap />
      <br />
      <br />
      <GoodMap />
    </div>
  );
}

export default App;
