module.exports = {
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended"
  ],
  "plugins": [ "react", "babel", "jest", "import", "prettier"],
  rules: {
    "quotes": 0,
    "babel/quotes": 0,
    "no-trailing-spaces": 0,
    "global-require": 0,
    "class-methods-use-this": [
      "error",
      {
        "exceptMethods": [
          "componentDidMount",
          "componentDidUpdate",
          "componentWillMount",
          "componentWillReceiveProps",
          "componentWillUnmount",
          "componentWillUpdate",
          "render",
          "shouldComponentUpdate"
        ]
      }
    ],
    "semi": ["warn", "always"],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-expressions": "off",
    "no-underscore-dangle": "off",
    "object-shorthand": "warn",
    "consistent-return": "warn",
    "generator-star-spacing": ["warn", "after"],
    "react/jsx-uses-vars": "warn",
    "react/display-name": "off",
    "react/prefer-stateless-function": [
      "error",
      {
        "ignorePureComponents": true
      }
    ],
    "react/forbid-prop-types": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".jsx", ".js"]
      }
    ],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/onclick-has-role": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-for": [
      "warn",
      {
        "components": ["Label"],
        "required": {
          "every": ["nesting", "id"]
        },
        "allowChildren": false
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/extensions": 0,
    "import/no-dynamic-require": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
  }
};
