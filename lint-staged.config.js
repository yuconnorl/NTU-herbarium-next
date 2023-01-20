export default {
  '*.{js,vue,ts}?(x)': (filenames) =>
    filenames.map((filename) => `eslint "${filename}" --max-warnings 0`),
  '**/*.{js,vue,ts}?(x)': (filenames) =>
    filenames.map((filename) => `prettier --write "${filename}"`),
}
