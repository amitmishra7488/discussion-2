
import './App.css';
import Cart from './components/Cart';
import Product from './components/Product';
import ProductProvider from './context/context';
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Product/>
        <hr className='seperator'/>
        <Cart/>
      </ProductProvider>
    </div>
  );
}

export default App;
