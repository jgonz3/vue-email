import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
  entries: [
    // Nuxt
    {
      input: 'src/module.ts',
      outDir: 'dist',
      name: 'nuxt',
      format: 'esm',
      ext: 'mjs',
    },
    {
      input: 'src/module.ts',
      outDir: 'dist',
      name: 'nuxt',
      format: 'cjs',
      ext: 'js',
    },
    // Copy runtime folder with mkdist
    {
      builder: 'mkdist',
      input: 'src/nuxt/runtime',
      outDir: 'dist/runtime',
      declaration: true,
    },
  ],
  externals: ['vue', '@nuxt/kit', '@nuxt/schema', 'vue-email'],
})
