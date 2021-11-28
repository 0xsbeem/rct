module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname, //__dirname = whatever directory .eslintrc.js is in
        project: ['./tsconfig.json'],
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
      'array-callback-return': 'error', /* probably a mistake because you forgot that an array function (e.g. map()) returns an array with your results. */
      'no-await-in-loop': 'error', /* doing this executes an async task syncrhonously. almost always a mistake unless you intentionally want to throttle requests to the back end */
      'no-constructor-return': 'error', /* returns are ignored, probably a mistake */
      'no-duplicate-imports': 'warn', /* just a basic harmless mistake */
      'no-promise-executor-return': 'error', /* useless code as return values are ignored here, probably written by mistake and probably meant to call resolve() */
      'no-self-compare': 'warn', /* useless code, probably written by mistake */
      'no-template-curly-in-string': 'error', /* probably used '' when you meant to use `` */
      'no-unmodified-loop-condition': 'warn', /* probably accidentally introduced an infinite loop */
      'no-unreachable-loop': 'warn', /* a loop that only runs once. probably a mistake */
      'require-atomic-updates': 'error', /* potential for race conditions. don't break this rule. */
      'eqeqeq': 'error', /* stop using == */
      'no-nested-ternary': 'error', /* this shit kills me please don't */
      'no-shadow': 'error', /* potentially confusing because of reused variable names */
      'no-var': 'error', /* always enforce const and let */
      'prefer-const': 'warn', /* use const when applicable */
      'radix': 'error', /* always specify radix when parsing ints */
      'comma-dangle': ['error', 'always'], /* dangling commas all the time everywhere */
      'comma-spacing': ['error', { 'before': false, 'after': true }], /* enforce that code looks, like, this and not ,like ,this */
      'comma-style': ['error', 'last'], /* enforce that commas go at the end of the current line rather than beginning of the next line */
      'quotes': ['error', 'single'], /* all strings use 'single quotes' but backticks are still allowed for substitution */
      'indent': ['error', 2], /* enforce two spaces for indents in js files */
      'semi-style': ['error', 'last'], /* put semicolons at the end of lines */
      'semi-spacing': ['error', {'before': false, 'after': true}], /* enforce semi spacing looks; like; this; and not;like;this */
      'semi': ['error', 'always'] /* require semicolons all the time */ 
    }
  };