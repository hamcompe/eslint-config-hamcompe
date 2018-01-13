module.exports = {
  extends: 'airbnb',
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
    'react/prop-types': 'off'
  }
}
