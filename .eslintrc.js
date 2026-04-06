module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app'],
  rules: {
    // React 17+ new JSX transform — no longer need React in scope
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
}
