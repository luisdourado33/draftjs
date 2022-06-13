import React from 'react';

function App() {
  const [text, setText] = React.useState('');
  return (
    <div>
      <h1>
        Text: <span>{text}</span>
      </h1>
    </div>
  );
}

export default App;
