export default {
  build: {
    target: 'esnext',
    minify: true,
    outDir:"dist",
    root: "",
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
};


