"use client";
import { Button } from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [chBox, setchBox] = useState(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 p-24">
      <Button
        variant={"default"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      ></Button>
      <div>

      <Checkbox id='cb' checked={chBox} onCheckedChange={() => setchBox((prev) => !prev)} />
        <label htmlFor="cb" className="select-none">Label {chBox ? "true": "false"}</label>
      </div>
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </div>
  );
}
