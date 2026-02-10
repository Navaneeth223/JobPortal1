import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar, {
  MobileHeader,
  MobileSidebar,
} from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen app-shell">
      <div className="min-h-screen app-gradient">
        <div className="flex min-h-screen flex-col lg:flex-row">
          <MobileHeader onOpen={() => setMenuOpen(true)} />
          <Sidebar
            theme={theme}
            onToggleTheme={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
          />
          <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
            <div className="mx-auto w-full max-w-5xl">
              <AppRoutes />
            </div>
          </main>
        </div>
        <MobileSidebar
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          theme={theme}
          onToggleTheme={() =>
            setTheme((current) => (current === "dark" ? "light" : "dark"))
          }
        />
      </div>
    </div>
  );
}
