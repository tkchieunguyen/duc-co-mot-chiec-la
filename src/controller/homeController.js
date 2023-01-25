const { query } = require("express");
const { connection } = require("../connectDB");


let getHomepage = async (rep, res) => {
    const [row, field] = await connection.execute('SELECT * FROM `employees`;')
    return res.render('home', { dataUser: row })
    // let data = []
    // connection.query(
    //     //simple querry
    //     'SELECT * FROM `employees`;',
    //     function (err, result, field) {
    //         console.log('>>>>check sql connecttion')
    //         result.map((row) => {
    //             data.push({
    //                 id: row.id,
    //                 email: row.email,
    //                 firstname: row.first_name,
    //                 lastname: row.last_name,
    //             })
    //         })
    //         //console.log(result)
    //         return res.render('home', { dataUser: data })
    //     })
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
let getInfoUser = async (rep, res) => {
    console.log("check request params", rep.params)
    let userID = rep.params.userid
    const [user] = await connection.execute('SELECT * FROM `employees` WHERE id= ?;', [userID])
    return res.render('infoPage', { dataUser: user })
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
    getInfoUser,
}