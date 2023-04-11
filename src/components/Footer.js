import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center mb-5">
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by LenaChe.
        </h4>
        <h4>
        <a href="https://github.com/LenaChe2022"> My GitHub</a>
        </h4>
        <h4>
        <a href="mailto:LenaChe2022@gmail.com"> LenaChe2022@gmail.com</a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
