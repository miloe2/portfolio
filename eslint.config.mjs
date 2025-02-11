import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      react: pluginReact,
      "@typescript-eslint": tseslint,
      js: pluginJs,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          tabWidth: 2,
          useTabs: false,
          printWidth: 100, // 줄 길이 제한 추가
        },
      ],
      "react/react-in-jsx-scope": "off", // React 17+에서는 필요하지 않음
      "react/jsx-indent": ["error", 2], // JSX 요소 들여쓰기 2 스페이스 적용
      "react/jsx-indent-props": ["error", 2], // JSX 속성도 2 스페이스 들여쓰기
      "react/jsx-closing-bracket-location": ["error", "line-aligned"], // JSX 닫기 위치 정리
      "react/jsx-props-no-multi-spaces": "error", // JSX 속성 간 불필요한 공백 제거
      "max-len": ["error", { "code": 100, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
    },
    
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
