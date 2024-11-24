import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data/data.json";
function App() {
  const maped = data.map((item) => (
  <Card 
  key={item.id}
  company={item.company}
  position={item.position}
  postedAt={item.postedAt}
  contract={item.contract}
  location={item.location}
  logo={item.logo} /> ));

  
  return (
    <>
    <Header/>
     <div>{maped}</div>
     

    </>
  );
}

export default App;
