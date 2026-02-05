import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop */}
        <div className="hidden lg:flex gap-8">
          <NavLinks />
        </div>

        {/* Mobile */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
