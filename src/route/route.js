const Express = require('express');
const home = require('../controller/homeController');
let router = Express.Router();

const initWebRoute = (app) => {
    router.get('/', home.getHomepage)

    router.get('/home', home.getHomepage)

    router.get('/link/:slug', home.getLinkslugpage)  //trang con
    router.get('/link', home.getLinkpage)

    router.get('/search', home.getSearchpage)
    router.post('/search', home.postSearchpage)
    return app.use('/', router)

}
//export default initWebRoute;
module.exports = initWebRoute;

