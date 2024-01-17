"use client";
import { Switch } from "@nextui-org/switch";
import { Loader, Loader2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loader className="animate-spin h-5 w-5 ml-1" />;

  return (
    <>
      <Switch
        color="default"
        isSelected={theme === "light" ? true : false}
        onValueChange={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
        startContent={<Sun color="white" />}
        endContent={<Moon />}
      />
    </>
  );
}
