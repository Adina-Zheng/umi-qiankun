import routes from './router.config'

export default {
    dva: {
        hmr: false,
        // skipModelValidate: true,
        // disableModelsReExport: true,
        // lazyLoad: true,
    },
    routes,
    qiankun: {
        master: {
            apps: [
                {
                    name: 'microapp1',
                    entry: 'http://localhost:8001',
                }
            ],
        }
    }
}