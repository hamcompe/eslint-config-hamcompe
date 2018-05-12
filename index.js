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
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'react/prefer-stateless-function': 'off',
    'react/sort-comp': 'off'
  }
}
