const { Router, response } = require("express");
var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "charge_station",
});

var router = express.Router();

router.post("/getChargeStation", jsonParser, async (req, res) => {
  const inputData = req.body.inputData;
  con.connect(async function (err) {
    var sql = `SELECT * FROM charge where location="${inputData}" OR name="${inputData}"`;
    con.query(sql, function (err, data, fields) {
      if (err) throw err;
      res.json(data);
    });
  });
});

const cors = require("cors");
const { json } = require("body-parser");
app.use(
  cors({
    origin: "*",
  })
);

app.use(router);
app.listen(3001, () => {
  console.log("Running on port");
});
