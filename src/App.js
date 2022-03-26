import './App.css';
import Products from './Component/Products/Products';
import Question from './Component/Question/Question';

function App() {
  return (
    <div>
      <div className='shop'>
      <h1>ORGANIC PRODUCTS SHOP</h1>
      </div>
      <Products/>
      <Question/>
    </div>
  );
}

export default App;
