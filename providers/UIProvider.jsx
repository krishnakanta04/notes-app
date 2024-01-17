"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function UIProvider({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        storageKey="notes-theme"
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
