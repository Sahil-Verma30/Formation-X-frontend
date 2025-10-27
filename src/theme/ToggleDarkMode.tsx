import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";

// const ToggleDarkMode = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleOnClick = () => setTheme(theme === "dark" ? "light" : "dark");

//   return (
//     <button
//       onClick={handleOnClick}
//       className={`fixed bottom-5 right-4 z-50 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-gray-200 ${
//         theme === "dark"
//           ? "dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//           : ""
//       }`}
//       aria-label="Toggle Dark Mode"
//     >
//       {mounted && theme === "dark" ? (
//         <IconMoon className="h-5 w-5" />
//       ) : (
//         <IconSun className="h-5 w-5" />
//       )}
//     </button>
//   );
// };
const themes = [
  { name: "Light" },
  { name: "Dark" },
  { name: "oex" },
  { name: "forest" },
];
const ToggleThemeBotton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  
  useEffect(() => setMounted(true), []);


  if (!mounted) return null;

  return (
    <>
      <div>
        <label htmlFor="theme-select" className="sr-only">
          Choose theme:
        </label>
        <select
          name="theme"
          id="theme-select"
          className="bg-th-nav-bg z-50 backdrop-blur-md text-th-accent border-gray-800 border-none rounded-md mt-1 py-1"
          onChange={(e) => setTheme(e.currentTarget.value)}
          value={theme}
        >
          <option value="system">Defualt</option>
          {themes.map((t) => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ToggleThemeBotton;
