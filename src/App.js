import React from 'react';
import './App.css';
import BoxClicker from './components/BoxClicker';


const items = [
  {
    label: 'Tab 1',
    content: 'Tab 1 content',
    callback: () => console.log('Clicked on the first tab')
  },
  {
    label: 'Tab 2',
    content: 'Tab 2 content',
    callback: () => console.log('Clicked on the second tab')
  },
  {
    label: 'Tab 3',
    content: 'Tab 3 content',
    callback: () => console.log('Clicked on the third tab')
  },
]
function App() {
  return (
    <div className="App">
      <BoxClicker items={items} /> 
    </div>
  );
}

export default App;
