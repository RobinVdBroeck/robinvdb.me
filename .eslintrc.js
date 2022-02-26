module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/prop-types': ['warn'],
  },
};
