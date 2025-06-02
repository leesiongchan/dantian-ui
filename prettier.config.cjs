/** @type {import("prettier").Config} */
module.exports = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  // sort-imports
  importOrder: [
    '<TYPES>',
    '',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderTypeScriptVersion: '5.0.0',
}
