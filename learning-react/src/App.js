import './tailwind.css';
import React from 'react';
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <CounterExample />
      {/*<HelloWorld name="BALULA"/>*/}
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
