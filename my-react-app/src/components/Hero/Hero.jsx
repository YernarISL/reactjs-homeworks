import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="cite-container">
        <p className="cite-text">
          "Our beliefs and perceptions are often a trap that limits our
          possibilities. The only knowledge that can propel us forward is the
          knowledge that imagination is capable of anything. And anything that
          is possible in our imagination is also possible in reality."
        </p>
        <p className="cite-author">Albert Einstein</p>
      </div>
      <img className="hero-image" src="/hero.png" alt="hero" />
    </div>
  );
};

export default Hero;
