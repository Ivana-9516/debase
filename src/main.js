const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*`CREATE TABLE  Users
CRUD Col1 DataType PRIMARY KEY,
CREATE Col2 DataType,
READCol3 Datatype
);
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

let sql = `CREATE TABLE IF NOT EXISTS Users(
    ID TEXT PRIMARY KEY,
    Username TEXT,
    Emali TEXT,
    DOB TEXT
);
`

let b = `SELECT name FROM pragma_table_info("Users");`
let c = `ALTER TABLE Users
RENAME COLUMN Email TO Emali;`

let d = `INSERT INTO Users(ID,Username,Emali,DOB)
VALUES("13581","Bob","bob@csie.com","2005-10-28");
`
let e = `SELECT * FROM Users`;
let f = `SELECT ID FROM Users
WHERE Username ="Bob";
`
let g = `UPDATE Users
SET EMALI = "jake@csie.com"
WHERE ID ="13581";
`
let h = `DELETE FROM Users
WHERE ID = "13581"
`
db.all(h, CallbackFunc);

//db.exec(sql, CallbackFunc);