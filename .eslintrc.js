/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['expo', 'prettier'],
  plugins: [
    'prettier',
    'unicorn',
    '@typescript-eslint',
    'unused-imports',
    'simple-import-sort',
    'eslint-plugin-react-compiler',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'prettier/prettier': 'warn',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['/android', '/ios', 'App.tsx'], // Added App.tsx to ignore list
      },
    ],
    'max-params': ['error', 4],
    'max-lines-per-function': ['error', 200],
    'react/display-name': 'off',
    'react/no-inline-styles': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
            disallowTypeAnnotations: true,
          },
        ],
      },
    },
    {
      files: ['.eslintrc.js', '*.config.js', 'env.js'],
      env: {
        node: true,
      },
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  ],
};
