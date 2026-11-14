import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Flat config takes objects, not legacy strings: the old file ended the array
// with "plugin:mdx/recommended", so ESLint refused to load the config at all
// ("Unexpected non-object config") and `npm run lint` never ran a single rule.
// Formatting stays Prettier's job (`npx prettier --write .`); eslint-config-prettier
// only switches off the rules that would fight it.
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
];

export default eslintConfig;
