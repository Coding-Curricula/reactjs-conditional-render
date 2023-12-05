import Product from './components/Product'
import { ProductProvider } from './context/ProductContext';
import { ModeProvider } from './context/ModeContext';
import './App.css';

import TimeOfDayGreeting from './components/TimeOfDayGreeting';

function App() {
  return (
    <div className="App">
      <ModeProvider>
        <ProductProvider>
          <Product />
        </ProductProvider>
      </ModeProvider>
      {/* <TimeOfDayGreeting /> */}
    </div>     
  );
}


export default App;
