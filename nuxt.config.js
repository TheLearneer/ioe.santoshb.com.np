import path from 'path';
import glob from 'glob';
import Mode from 'frontmatter-markdown-loader/mode';

export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: [],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap'
  ],
  build: {
    extend (config, ctx) {
		config.module.rules.push({
			test: /\.md$/,
			include: path.resolve(__dirname, 'contents'),
			loader: 'frontmatter-markdown-loader',
			options: {
				mode: [Mode.HTML, Mode.VUE_COMPONENT]
			}
		});
		// config.node = { fs: 'empty' };
    }
  },
  generate: {
	routes: getRoutes()
  },
  // Sitemap config...
  sitemap: {
    hostname: 'https://ioe.santoshb.com.np',
	routes: getRoutes()
  }
}

function getRoutes() {
	// Department routes
	const programs = glob.sync('programs/*.md', { cwd: 'contents' }).map((file) => {
		return `/programs/${path.basename(file, '.md')}`;
	});
	// Course routes
	const courses = glob.sync('courses/*.md', { cwd: 'contents' }).map((file) => {
		return `/${path.basename(file, '.md')}`;
	});
	// Notes routes
	const notes = glob.sync('notes/**/*.md', { cwd: 'contents' }).map((file) => {
		return `/${path.dirname(file).split('/').slice(-1)[0]}/${path.basename(file, '.md')}`
	});
	// Returning the list...
	return [].concat(programs, courses, notes).sort();
}