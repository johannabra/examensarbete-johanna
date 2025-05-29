import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Showcase from "./components/Showcase.jsx";
import Gallery from "./components/Gallery.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Showcase />
        <Gallery />
      </main>
    </>
  );
}

export default App;
