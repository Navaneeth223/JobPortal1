import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className="min-h-screen app-shell">
      <div className="min-h-screen app-gradient">
        <div className="flex min-h-screen">
          <Sidebar
            theme={theme}
            onToggleTheme={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
          />
          <main className="flex-1 px-6 py-10 md:px-10">
            <div className="mx-auto w-full max-w-5xl">
              <AppRoutes />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
