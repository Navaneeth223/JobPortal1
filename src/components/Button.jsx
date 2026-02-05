export default function Button({ variant = "primary", children }) {
  const base = "px-6 py-3 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-indigo-600 hover:bg-indigo-500",
    secondary: "border border-white/20 hover:bg-white/10"
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
