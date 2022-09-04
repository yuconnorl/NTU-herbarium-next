module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  rules: {
    'max-nesting-depth': null,
    'at-rule-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'string-quotes': 'single',
    'block-closing-brace-empty-line-before': 'never',
    'no-descending-specificity': null,
    'no-missing-end-of-source-newline': true,
    'selector-list-comma-newline-after': 'always',
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        'rules',
      ],
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'import-normalize',
          'mixin',
          'extend',
          'include',
          'each',
          'function',
          'return',
          'if',
          'else',
          'for',
          'use',
          'media',
          'tailwind',
        ],
      },
    ],
  },
}
