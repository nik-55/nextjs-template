/**
 * lint-staged configuration file
 * @see https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged
 */

const path = require('path');

/**
 * next lint --file file1 --file file2
 * prettier file1 file2 --check
 * file1, file2 are the staged files that are provided by the lint-staged
 */

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
  `prettier ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')} --check`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*': [buildPrettierCommand],
};
