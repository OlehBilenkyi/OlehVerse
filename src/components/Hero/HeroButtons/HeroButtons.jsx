import PropTypes from "prop-types";

const HeroButtons = ({ onShowResume }) => (
  <div className="heroButtons">
    <a href="#portfolio" className="btn">
      🎨 My Work
    </a>
    <a href="#contact" className="btn">
      📬 Contact Me
    </a>
    <button type="button" className="btn" onClick={onShowResume}>
      📄 View CV
    </button>
    <a href="/resume/Oleh-Bilenkyi-CV.pdf" download className="btn">
      ⬇️ Download CV
    </a>
  </div>
);

HeroButtons.propTypes = {
  onShowResume: PropTypes.func.isRequired,
};

export default HeroButtons;
