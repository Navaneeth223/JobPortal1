import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen }) => {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="border-t border-white/10 bg-black/95 px-4 py-4">
        <NavLinks className="flex-col items-start gap-4" />
      </div>
    </div>
  );
};

export default MobileMenu;
