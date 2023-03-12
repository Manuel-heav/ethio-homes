import "./index.css"
import "./App.css"
import Home from "./pages/Home"
import Card from "./pages/Card";
// import products from "./assets/products.json"
// import Product from "./components/Product";

export default function App() {
  return (
    <div className="app">
      <Home />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
