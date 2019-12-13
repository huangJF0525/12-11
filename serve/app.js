const express=require("express");
const bodyparser=require("body-parser");
const app =express();
app.use(bodyparser.urlencoded({extended:false}))
// app.get("/get",(req,resp)=>{
//     resp.end("我是get")
// })
// app.post("/post",(req,resp)=>{
//     resp.json(req.body)
// })
const mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  port     : '3306',
  database : 'test'
});
 
connection.connect();

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Max-Age", "3600");
    next();
  });
  const result = {
    status: "200",
    message: "success"
  };
// app.post('/list',function(req,res){
    
//     // 构造sql（查询用户名和密码是否存在）
//     const sqlStr = "select * from list";
//     // 执行sql语句
//     connection.query(sqlStr, (err, result) => {
//       if (err) throw err;
//       // 判断
//       res.json(result);
//     }); 
// })
app.post('/lists',function(req,res){
  let { id } = req.body;
  const sqlStr = `select * from list where show_id = '${id}'`;
  // 执行sql语句
  connection.query(sqlStr, (err, result) => {
    if (err) throw err;
    // 判断
    res.json(result);
  }); 
})
app.post('/listid',function(req,res){
    let { id } = req.body;
    const sqlStr = `select * from list where list_id = '${id}'`;
    // 执行sql语句
    connection.query(sqlStr, (err, result) => {
      if (err) throw err;
      // 判断
      res.json(result);
    }); 
})
app.post('/login',function(req,res){
    let { username, password } = req.body;
    const sqlStr = `select * from user where user_name='${username}' and user_password='${password}'`;
    // 执行sql语句
    connection.query(sqlStr, (err, data) => {
      if (err) throw err;
      // 判断
      if (!data.length) {
        // 如果不存在
        res.send({ error_code: 1, reason: "请检查用户名或密码!" });
      } else {
        res.send({ error_code: 0, reason: "欢迎您!登录成功！" });
      }
    }); 
})
app.post('/column',function(req,res){
  const sqlStr = "select * from columns";
  connection.query(sqlStr, (err, result) => {
    if (err) throw err;
    res.json(result);
  }); 
})
app.post('/columnadd',function(req,res){
  let { id, name,router } = req.body;
  const sqlStr = "INSERT INTO columns(column_id,column_name,column_to) VALUES(?,?,?)";
  connection.query(sqlStr,[id,name,router], (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log(result)
  }); 
})
app.post('/columndel',function(req,res){
  let { id} = req.body;
  const sqlStr = `DELETE FROM columns where column_id='${id}'`;
  connection.query(sqlStr, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log(result)
  }); 
})
app.post('/columncompile',function(req,res){
  let { id,name,router} = req.body;
  const sqlStr =`UPDATE  columns SET column_name="${name}",column_to="${router}" where column_id="${id}"`;
  connection.query(sqlStr, (err, result) => {
    if (err) throw err;
    res.json(result);
    console.log(result)
  }); 
})



app.listen(8088,function(){
    console.log("服务起来了")
})