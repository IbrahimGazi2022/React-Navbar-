import "./MobileNav.css";

const MobileNav = ({ isOpen }) => {
  return <div className={`content ${isOpen ? "active" : ""}`}></div>;
};

export default MobileNav;
