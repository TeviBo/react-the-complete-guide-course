module.exports = {
   env: {
      browser: true,
      es2021: true
   },
   extends: ["airbnb", "prettier"],
   overrides: [],
   parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
   },
   plugins: ["react", "prettier"],
   rules: {
      "prettier/prettier": "error",
      "react/function-component-definition": [
         "error",
         {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function"
         }
      ],
      "react/forbid-prop-types": 0,
      "react/jsx-props-no-spreading": 0,
      "no-useless-return": 0,
      "react/react-in-jsx-scope": 0,
      "react/jsx-no-constructed-context-values": 0,
      "react/jsx-no-bind": 0,
      "consistent-return": 0,
      "jsx-a11y/label-has-associated-control": 0
   }
};
