/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  extends: [
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'all',
        semi: true,
        tabWidth: 2,
        singleQuote: true,
        arrowParens: 'always',
      },
    ], // Use our .prettierrc file as source
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    'import/newline-after-import': ['error'],
    curly: ['error'],
    'object-shorthand': ['error'],
    'quote-props': ['error', 'as-needed'],
    'prefer-object-spread': ['error'],
    'no-array-constructor': ['error'],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
    ],
    quotes: ['error', 'single'],
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-eval': 'error',
    'arrow-parens': ['error', 'always'],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'func-style': ['error', 'expression'],
    'no-loop-func': 'error',
    'prefer-rest-params': 'error',
    'default-param-last': ['error'],
    'no-new-func': 'error',
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'space-before-blocks': 'error',
    'no-param-reassign': 'error',
    'prefer-spread': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'generator-star-spacing': ['error', { before: false, after: true }],
    'dot-notation': 'error',
    'prefer-const': 'error',
    'no-multi-assign': 'error',
    'no-plusplus': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-mixed-operators': 'error',
    'brace-style': 'error',
    'no-else-return': 'error',
    'new-cap': ['error', { properties: false }],
    'no-underscore-dangle': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'method',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'parameterProperty',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'snake_case', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
    'no-duplicate-imports': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
  },
};
