import "./style.css";

export const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="copyright">
      <p>&copy; Copyright {currentYear}, All Rights Reserved</p>
    </footer>
  );
};
