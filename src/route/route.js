const Express = require('express');
const Homecontroler = require('../controller/homeController');
let router = Express.Router();

const initWebRoute = (app) => {
    router.get('/', Homecontroler.getHomepage)

    router.get('/home', Homecontroler.getHomepage)

    router.get('/link/:slug', Homecontroler.getinkslugpage)  //trang con
    router.get('/link', Homecontroler.getLinkpage)

    router.get('/search', Homecontroler.getSearchpage)
    router.post('/search', Homecontroler.postSearchpage)
    return app.use('/', router)

}
//export default initWebRoute;
module.exports = initWebRoute;

