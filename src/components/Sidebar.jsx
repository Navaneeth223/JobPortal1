import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Building2,
  Briefcase,
  FileText,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const navItemBase =
  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition sm:px-4 sm:py-3";

const navItemStyle = ({ isActive }) =>
  `${navItemBase} ${
    isActive
      ? "bg-indigo-500/15 text-[var(--text)] shadow-[0_0_20px_rgba(99,102,241,0.25)]"
      : "text-muted-strong hover:bg-[var(--pill)] hover:text-[var(--text)]"
  }`;

const navItems = [
  {
    to: "/",
    label: "Dashboard",
    icon: LayoutGrid,
  },
  {
    to: "/company",
    label: "Create Company",
    icon: Building2,
  },
  {
    to: "/jobs",
    label: "Jobs",
    icon: Briefcase,
    badge: "3",
  },
  {
    to: "/applications",
    label: "Applications",
    icon: FileText,
    badge: "3",
  },
];

const Navigation = ({ onNavigate }) => (
  <nav className="mt-10 space-y-2">
    {navItems.map(({ to, label, icon: Icon, badge }) => (
      <NavLink key={to} to={to} className={navItemStyle} onClick={onNavigate}>
        <Icon className="h-4 w-4" />
        {label}
        {badge ? (
          <span className="ml-auto rounded-full pill px-2 py-0.5 text-xs">
            {badge}
          </span>
        ) : null}
      </NavLink>
    ))}
  </nav>
);

export const MobileHeader = ({ onOpen }) => (
  <header className="sidebar border-b px-4 py-3 sm:px-6 sm:py-4 lg:hidden">
    <div className="flex items-center justify-between gap-3 sm:gap-4">
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-xl border btn-ghost sm:h-10 sm:w-10"
        onClick={onOpen}
        aria-label="Open navigation menu"
      >
        <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 sm:h-10 sm:w-10">
          <Building2 className="h-4 w-4 text-white sm:h-4.5 sm:w-4.5" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold sm:text-base">JobPortal</p>
          <p className="text-xs text-muted sm:text-sm">Company & Careers</p>
        </div>
      </div>
      <div className="h-9 w-9 sm:h-10 sm:w-10" />
    </div>
  </header>
);

export const MobileSidebar = ({ open, onClose, theme, onToggleTheme }) => {
  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/60 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close navigation menu"
      />
      <aside
        className={`sidebar absolute left-0 top-0 flex h-full w-72 max-w-[85vw] flex-col justify-between border-r px-5 py-6 transition-transform duration-200 sm:w-80 sm:px-6 sm:py-8 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 sm:h-11 sm:w-11">
                <Building2 className="h-4 w-4 text-white sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="text-base font-semibold sm:text-lg">JobPortal</p>
                <p className="text-xs text-muted sm:text-sm">
                  Company & Careers
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-xl border btn-ghost sm:h-9 sm:w-9"
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <X className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </button>
          </div>
          <Navigation onNavigate={onClose} />
        </div>

        <button
          className="mt-8 flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition btn-ghost sm:mt-10 sm:px-4 sm:py-3"
          onClick={onToggleTheme}
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </aside>
    </div>
  );
};

const Sidebar = ({ theme, onToggleTheme }) => {
  return (
    <aside className="sidebar hidden lg:flex lg:w-72 lg:flex-col lg:justify-between border-r px-6 py-8">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-base font-semibold">JobPortal</p>
            <p className="text-xs text-muted">Company & Careers</p>
          </div>
        </div>

        <Navigation />
      </div>

      <button
        className="mt-10 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition btn-ghost"
        onClick={onToggleTheme}
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </aside>
  );
};

export default Sidebar;
