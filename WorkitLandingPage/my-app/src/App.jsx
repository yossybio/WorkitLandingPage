import styleSheet from "./assets/styles/App.module.css";
import heroIllustration from "./assets/images/image-hero.webp";
import Hero from "./components/hero";
import Ornamental from "./components/Ornamental";
import Value from "./components/Value";

function App() {
  return (
    <>
      <header className={styleSheet.headerContainer}>
        <Hero />
        <img
          src={heroIllustration}
          className={styleSheet.heroIllustration}
          alt="smartphone image"
        />
      </header>
      <section className={styleSheet.sectionValues}>
        <div className={styleSheet.valuesContainer}>
          <div className={styleSheet.content}>
            <Value
              sequence="1"
              caption="Actionable insights"
              details="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
            />
            <Value
              sequence="2"
              caption="Data-driven decisions"
              details="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
            />
            <Value
              sequence="3"
              caption="Always affordable"
              details="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
            />
          </div>
        </div>
        <Ornamental />
      </section>
    </>
  );
}

export default App;
