import globals from "globals";

export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        g: true,
      },
    },
    ignores: ["*.mjs"],
    rules: {
      "no-dupe-args": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-inner-declarations": "error",
      "no-irregular-whitespace": [
        "error",
        {
          skipStrings: true,
          skipComments: true,
          skipRegExps: true,
          skipTemplates: true,
        },
      ],
      "no-undef": "error",
    },
  },
];
