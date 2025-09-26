import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import DefaultCard from "./components/DefaultCard/DefaultCard";

function App() {
  return (
    <>
      <h1 className="logo">Knowledge Excahnge Hub</h1>
      <div className="main-window">
        <AboutUs />
        <Hero />
      </div>
      <h1>Blog</h1>
      <div className="cards-container">
        <Card />
        <DefaultCard />
        <DefaultCard />
      </div>
    </>
  );
}

export default App;
