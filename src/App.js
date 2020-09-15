import React from 'react';
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import './App.css';

function App() {
  return (
    <div className="App">
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </div>
  );
}

export default App;
