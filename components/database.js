const {createPool} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "toor",
    database: "test",
    connectionLimit: 10
})

function search(username , image){
    pool.query(`select ${image} from userinfo where username='${username}'` , (err , result , fields) => {
        if(err){
            return console.log(err);
        }
        return console.log(result);
    })
}

search('test' , 'image1');