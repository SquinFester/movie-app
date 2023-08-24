module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      // Disable some rules that we ruthlessly abuse in unit tests.
      files: ['**/*.ts', '**/*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false,
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx', '.ts'] }], //should add ".ts" if typescript project

    '@typescript-eslint/ban-types': 'warn',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'camelcase': [
      'error',
      {
        allow: ['UNSAFE_componentWillMount', 'UNSAFE_componentWillReceiveProps'],
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignorePattern: "d='[^']*'",
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-async-promise-executor': 'off',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-indent': 'off',
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'standard/no-callback-literal': 'off',
    'react/jsx-handler-names': 'off',
  },
}
