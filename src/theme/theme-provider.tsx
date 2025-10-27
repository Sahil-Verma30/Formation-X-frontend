"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}


//  use below one for doing it thourgh parameters








// // components/theme/theme-provider.tsx
// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import type { ThemeProviderProps } from "next-themes/dist/types";

// const ThemeContext = createContext<{ theme: string; setTheme: (theme: string) => void } | undefined>(undefined);

// export function ThemeProvider({ children, defaultTheme = "light", ...props }: ThemeProviderProps) {
//   const [theme, setTheme] = useState(defaultTheme);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <NextThemesProvider attribute="class" defaultTheme={theme}>
//         {children}
//       </NextThemesProvider>
//     </ThemeContext.Provider>
//   );
// }

// export function useCustomTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error("useCustomTheme must be used within ThemeProvider");
//   return context;
// }
