export const currentYear = new Date().getFullYear();

export const Copyright = () => {
  return (
    <footer className="copyright bottom-0 p-[7px] font-bold text-center text-[clamp(var(--gap),5vw,1.2rem)] bg-[rgb(179,179,245)]">
      <p>&copy; Copyright {currentYear}, All Rights Reserved</p>
    </footer>
  );
};
