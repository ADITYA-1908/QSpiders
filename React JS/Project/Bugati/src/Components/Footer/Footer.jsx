import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bugatti-footer">
      <div className="footer-icon-wrapper">
        <svg
          class="bugatti-footer-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 699.12 525.6"
          fill="currentColor"
        >
          <path d="M0 0h541.16c.61.13 1.21.35 1.83.38C555.66.93 568.1 3 580.2 6.74c42.46 13.12 72.98 39.79 90.73 80.66 7.23 16.64 10.83 34.17 11.87 52.28.76 13.32.01 26.52-2.66 39.57-5.77 28.21-18.99 52.35-39.87 72.25-.43.41-.79.89-1.16 1.31.19.23.23.3.29.35.64.48 1.28.96 1.92 1.43 23.74 17.5 40.43 40.17 49.82 68.13 3.88 11.55 6.45 23.38 6.98 35.6.03.62.26 1.22.4 1.83v23.02c-.15.76-.36 1.52-.42 2.29-.11 1.35-.04 2.72-.18 4.07-1.12 10.34-3.02 20.54-6.12 30.49-11.58 37.21-33.98 65.84-67.98 85.11-24.33 13.79-50.78 19.97-78.57 19.99-180.7.11-361.39.06-542.09.06H.39V387.2h86.96v25.33c0 8.44-.04 16.88.03 25.26 3.88.49 210.3.31 212.05-.15V301.77h-89.07v41.46c-2.96.56-85.22.42-86.9-.1V172.72h86.92v41.43c2.99.55 87.39.43 89.04-.07V87.25H87.31v44.67H.23V3.32C.23 2.21.08 1.1.01-.01Zm400.29 438.03H538.37c7.38 0 14.69-.66 21.83-2.62 22.38-6.13 37.82-19.87 44.98-42.11 5.09-15.8 4.95-31.82-.19-47.62-5.52-16.97-16.45-29.38-32.59-37.06-10.04-4.78-20.72-6.89-31.81-6.97-9.35-.07-18.71-.01-28.06-.01H400.3v136.4Zm.07-350.94v127.39h127.97c7.16 0 14.19-.93 21.05-2.99 19.73-5.91 33.39-18.35 40.05-37.96 4.23-12.46 4.75-25.27 1.97-38.08-4.68-21.58-17.39-36.41-38.21-44.07-8.88-3.27-18.15-4.29-27.56-4.29-40.86.02-81.71 0-122.57 0h-2.71Z"></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h2 className="footer-title">LÀ MARQUE</h2>
          <h3 className="footer-subtitle">Discover BUGATTI</h3>
          <ul className="footer-links">
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Classic icons</li>
            <li>Historic Models</li>
            <li>Racing Legends</li>
            <li>Les Patrons</li>
            <li>La Maison Pur Sang</li>
            <li>Dealer Finder</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-subtitle">HYPER SPORTS CARS</h3>
          <ul className="footer-links">
            <li>TOURBILLON</li>
            <li>W18 MISTRAL</li>
            <li>BOLLIDE</li>
            <li>CHIRON</li>
            <li>LA VOITURE NOIRE</li>
            <li>DIVO</li>
            <li>CENTODIEU</li>
            <li>Sur Mesure</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-subtitle">CUSTOMER SERVICE</h3>
          <ul className="footer-links">
            <li>Individual Service and Contest</li>
            <li>Maintenance</li>
            <li>Service Partner Network</li>
            <li>Passeport Tranquillité</li>
            <li>Warranty</li>
            <li>Roadside Assistance</li>
            <li>Genuine Parts</li>
            <li>BUGATTI Accessories</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-subtitle">LIFESTYLE</h3>
          <ul className="footer-links">
            <li>Art of Living</li>
            <li>Apparel & Accessories</li>
            <li>Watches & Jewellery</li>
            <li>Collectibles & Model Cars</li>
            <li>Store</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-bottom-left">
            <p>© 2025 BUGATTI AUTOMOBILES S.A.S.</p>
            <div className="footer-legal-links">
              <span>Legal Notice</span>
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
              <span>Privacy Settings</span>
              <span>Compliance & Whistleblower</span>
              <span>Fuel Consumption</span>
            </div>
          </div>

          <div className="footer-bottom-right">
            <h4 className="language-title">LANGUAGE</h4>
            <div className="language-links">
              <span>English</span>
              <span>Français</span>
            </div>
            <div className="additional-links">
              <span>Modern Slavery Statement</span>
              <span>Gender Equality Index</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
