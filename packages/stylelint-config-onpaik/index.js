module.exports = {
  "extends":[
    "stylelint-config-standard",
    "stylelint-config-idiomatic-order",
    "./node_modules/prettier-stylelint/config.js"
  ],
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    // new added rules
    "color-named": "never",
    "font-family-name-quotes": "always-where-recommended",
    "function-url-quotes": "always",
    "string-quotes": "single",
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "declaration-property-unit-whitelist": {
      "/^(transition|animation)/": ["s"]
    },
    "selector-attribute-quotes": "always",
    "selector-max-compound-selectors": 3,
    "selector-max-id": 0,
    "selector-max-universal": 0,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "max-empty-lines": 2,
    "max-nesting-depth": 3,

    // order rules
    "order/order": [
      "custom-properties",
      "at-variables",
      "less-mixins",
      "declarations",
      "at-rules",
      {
        "type": "at-rule",
        "name": "media"
      },
      "rules",
      "dollar-variables",
    ],
  }
};