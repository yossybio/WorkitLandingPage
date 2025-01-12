import styleSheet from "./assets/styles/App.module.css";
import heroIllustration from "./assets/images/image-hero.webp";
import Hero from "./components/hero";
import Ornamental from "./components/Ornamental";
import Value from "./components/Value";
import founderImg from "./assets/images/image-founder.webp";
import ButtonPrimary from "./components/ButtonPrimary";
import decorationImg from "./assets/images/bg-pattern-3.svg";

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
          <div className={styleSheet.values}>
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
      <section className={styleSheet.cta}>
        <div className={styleSheet.content}>
          {/* <div className={styleSheet.headshot}>
            <img
              className={styleSheet.imgSize}
              src={founderImg}
              alt="Founder profile Image"
            />
          </div> */}
          <img
            className={styleSheet.imgSize}
            src={founderImg}
            alt="Founder profile Image"
          />
          <div className={styleSheet.ctaContent}>
            <div className={styleSheet.ctaContentMain}>
              <h3>Be the first to test</h3>
              <p>
                Hi, I&apos; m Louis Graham, the founder of the company. Book a
                demo call with me to become a beta tester for our app and
                kickstart your company. Apply for access below and I’ll be in
                touch to schedule a call.
              </p>
              <div>
                <ButtonPrimary name="Apply for access" />
              </div>
              <img src={decorationImg} alt="Img for decoration" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
