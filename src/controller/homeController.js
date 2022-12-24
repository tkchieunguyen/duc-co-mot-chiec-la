const { query } = require("express");

let getHomepage = (rep, res) => {
    return res.render('home');
}
let getLinkpage = (rep, res) => {
    return res.render('link');
}
let getLinkslugpage = (rep, res) => {
    return res.send('this is slug/link');
}
let getSearchpage = (rep, res) => {
    //console.log(rep.query);
    return res.render('search');
}
let postSearchpage = (rep, res) => {
    //console.log(rep.query);
    console.log(rep.body);
    return res.send(rep.body);
}
module.exports = {
    getHomepage,
    getLinkpage,
    getSearchpage,
    postSearchpage,
    getLinkslugpage,
}