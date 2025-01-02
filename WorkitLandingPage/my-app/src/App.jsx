import styleSheet from "./assets/styles/App.module.css";
import heroIllustration from "./assets/images/image-hero.webp";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <header className={styleSheet.headerContainer}>
        {/* <div
          style={{ backgroundColor: "red", height: "934px", width: "100vw" }}
        ></div> */}
        <Hero />
        <img
          src={heroIllustration}
          className={styleSheet.heroIllustration}
          alt="smartphone image"
        />
      </header>
    </>
  );
}

export default App;
