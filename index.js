module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true }
    ],
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/prefer-stateless-function': 0,
    'import/prefer-default-export': 0,
    'react/prefer-stateless-function': 0,
    'react/sort-comp': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-array-index-key': 0,
    'react/no-multi-comp': 0,
    'react/no-unused-prop-types': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/accessible-emoji': 0
  }
}
