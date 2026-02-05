import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Building2,
  Briefcase,
  FileText,
  Moon,
  Sun,
} from "lucide-react";

const navItemBase =
  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition";

const navItemStyle = ({ isActive }) =>
  `${navItemBase} ${
    isActive
      ? "bg-indigo-500/15 text-[var(--text)] shadow-[0_0_20px_rgba(99,102,241,0.25)]"
      : "text-muted-strong hover:bg-[var(--pill)] hover:text-[var(--text)]"
  }`;

const Sidebar = ({ theme, onToggleTheme }) => {
  return (
    <aside className="sidebar hidden md:flex md:w-72 md:flex-col md:justify-between border-r px-6 py-8">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600">
            <Briefcase className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-base font-semibold">JobPortal</p>
            <p className="text-xs text-muted">Company & Careers</p>
          </div>
        </div>

        <nav className="mt-10 space-y-2">
          <NavLink to="/" className={navItemStyle}>
            <LayoutGrid className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink to="/company" className={navItemStyle}>
            <Building2 className="h-4 w-4" />
            Create Company
          </NavLink>
          <NavLink to="/jobs" className={navItemStyle}>
            <Briefcase className="h-4 w-4" />
            Jobs
            <span className="ml-auto rounded-full pill px-2 py-0.5 text-xs">
              3
            </span>
          </NavLink>
          <NavLink to="/applications" className={navItemStyle}>
            <FileText className="h-4 w-4" />
            Applications
            <span className="ml-auto rounded-full pill px-2 py-0.5 text-xs">
              3
            </span>
          </NavLink>
        </nav>
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
