/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v1.quasar.dev/quasar-cli/quasar-conf-js
/* eslint-env node */
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = function (/* ctx */) {
	return {
		// https://v1.quasar.dev/quasar-cli/supporting-ts
		supportTS: false,

		// https://v1.quasar.dev/quasar-cli/prefetch-feature
		// preFetch: true,

		// app boot file (/src/boot)
		// --> boot files are part of "main.js"
		// https://v1.quasar.dev/quasar-cli/boot-files
		boot: ["i18n"],

		// https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
		css: ["app.scss"],

		// https://github.com/quasarframework/quasar/tree/dev/extras
		extras: [
			// 'ionicons-v4',
			// 'mdi-v5',
			// 'fontawesome-v5',
			// 'eva-icons',
			// 'themify',
			// 'line-awesome',
			// 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

			"roboto-font", // optional, you are not bound to it
			"material-icons", // optional, you are not bound to it
		],

		// Full list of options: https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
		build: {
			vueRouterMode: "history", // available values: 'hash', 'history'

			// transpile: false,

			// Add dependencies for transpiling with Babel (Array of string/regex)
			// (from node_modules, which are by default not transpiled).
			// Applies only if "transpile" is set to true.
			// transpileDependencies: [],

			// rtl: false, // https://v1.quasar.dev/options/rtl-support
			// preloadChunks: true,
			// showProgress: false,
			// gzip: true,
			// analyze: true,

			// Options below are automatically set depending on the env, set them if you want to override
			// extractCSS: false,

			// https://v1.quasar.dev/quasar-cli/handling-webpack
			// "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
			chainWebpack(chain) {
				chain.plugin("eslint-webpack-plugin").use(ESLintPlugin, [{ extensions: ["js", "vue"] }]);
				chain.resolve.alias.merge({
					slides: path.resolve(__dirname, "./slides"),
				});
			},
		},

		// Full list of options: https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
		devServer: {
			https: false,
			port: 8080,
			open: true, // opens browser window automatically
		},

		// https://v1.quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
		framework: {
			iconSet: "material-icons", // Quasar icon set
			lang: "en-us", // Quasar language pack
			config: {
				dark: true,
			},
			cssAddon: false,

			// Possible values for "importStrategy":
			// * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
			// * 'all'  - Manually specify what to import
			importStrategy: "auto",

			// For special cases outside of where "auto" importStrategy can have an impact
			// (like functional components as one of the examples),
			// you can manually specify Quasar components/directives to be available everywhere:
			//
			// components: [],
			// directives: [],

			// Quasar plugins
			plugins: [],
		},

		// animations: 'all', // --- includes all animations
		// https://v1.quasar.dev/options/animations
		animations: [],

		// https://v1.quasar.dev/quasar-cli/developing-ssr/configuring-ssr
		ssr: {
			pwa: true,
		},

		// https://v1.quasar.dev/quasar-cli/developing-pwa/configuring-pwa
		pwa: {
			workboxPluginMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
			workboxOptions: { skipWaiting: true, clientsClaim: true }, // only for GenerateSW
			manifest: {
				name: `Broadsign Ace`,
				short_name: `Broadsign Ace`,
				description: `A Slideshow for Broadsign`,
				display: "standalone",
				orientation: "landscape",
				background_color: "#000000",
				theme_color: "#001464",
				icons: [
					{
						src: "/icons/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/icons/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "/icons/android-chrome-maskable-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "/icons/android-chrome-maskable-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "/icons/apple-touch-icon-60x60.png",
						sizes: "60x60",
						type: "image/png",
					},
					{
						src: "/icons/apple-touch-icon-76x76.png",
						sizes: "76x76",
						type: "image/png",
					},
					{
						src: "/icons/apple-touch-icon-120x120.png",
						sizes: "120x120",
						type: "image/png",
					},
					{
						src: "/icons/apple-touch-icon-152x152.png",
						sizes: "152x152",
						type: "image/png",
					},
					{
						src: "/icons/apple-touch-icon-180x180.png",
						sizes: "180x180",
						type: "image/png",
					},
					{
						src: "/icons/apple-touch-icon.png",
						sizes: "180x180",
						type: "image/png",
					},
					{
						src: "/icons/favicon-16x16.png",
						sizes: "16x16",
						type: "image/png",
					},
					{
						src: "/icons/favicon-32x32.png",
						sizes: "32x32",
						type: "image/png",
					},
					{
						src: "/icons/msapplication-icon-144x144.png",
						sizes: "144x144",
						type: "image/png",
					},
					{
						src: "/icons/mstile-150x150.png",
						sizes: "150x150",
						type: "image/png",
					},
				],
			},

			metaVariables: {
				appleMobileWebAppCapable: "yes",
				appleMobileWebAppStatusBarStyle: "default",
				appleTouchIcon120: "icons/apple-icon-120x120.png",
				appleTouchIcon180: "icons/apple-icon-180x180.png",
				appleTouchIcon152: "icons/apple-icon-152x152.png",
				appleSafariPinnedTab: "icons/safari-pinned-tab.svg",
				msapplicationTileImage: "icons/ms-icon-144x144.png",
				msapplicationTileColor: "#000000",
			},
		},

		// Full list of options: https://v1.quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
		cordova: {
			// noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
		},

		// Full list of options: https://v1.quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
		capacitor: {
			hideSplashscreen: true,
		},

		// Full list of options: https://v1.quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
		electron: {
			bundler: "packager", // 'packager' or 'builder'

			packager: {
				// https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
				// OS X / Mac App Store
				// appBundleId: '',
				// appCategoryType: '',
				// osxSign: '',
				// protocol: 'myapp://path',
				// Windows only
				// win32metadata: { ... }
			},

			builder: {
				// https://www.electron.build/configuration/configuration

				appId: "broadsignace",
			},

			// More info: https://v1.quasar.dev/quasar-cli/developing-electron-apps/node-integration
			nodeIntegration: true,

			extendWebpack(/* cfg */) {
				// do something with Electron main process Webpack cfg
				// chainWebpack also available besides this extendWebpack
			},
		},
	};
};
