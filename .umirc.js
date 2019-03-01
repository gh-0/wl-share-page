import routes from './config/routes';
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: {
        webpackChunkName: true
      },
      title: 'share-page',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  routes,
  history: 'hash',
  proxy: {
    '/api': {
      target: 'https://server.wenliaokeji.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/'
      },
    },
  },
  targets: {
    safari: 9,
  },
}
