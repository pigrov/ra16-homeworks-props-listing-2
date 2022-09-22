import "./App.css";
import Listing from "./components/Listing";
import data from "./data/etsy.json";

function App() {
  const listing = JSON.parse(JSON.stringify(data));
  //const listing = JSON.parse(data);

  return <Listing items={listing} />;
}

export default App;
