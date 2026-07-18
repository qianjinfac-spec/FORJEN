import { mkdir, readFile, writeFile } from "node:fs/promises";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

const source = await readFile("app/globals.css", "utf8");
const result = await postcss([tailwindcss()]).process(source, {
  from: "app/globals.css",
  to: "public/styles/forjen.css",
});

await mkdir("public/styles", { recursive: true });
await writeFile("public/styles/forjen.css", result.css, "utf8");

