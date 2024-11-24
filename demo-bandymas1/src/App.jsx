import Products from "./components/Products";
import data from "./components/data";
import Header from './components/Header'
import "./App.css";

function App() {
  
 
  const productComponents = data.map((item) => (
    
   
    <Products key={item.id} product={item} />
  ));

  return (
    <div>
      <Header/>
      <div>{productComponents}</div>;
    </div>

  )
  
 
}

export default App;
