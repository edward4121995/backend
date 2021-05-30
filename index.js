const express = require('express')
const app = express() 

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('my')
db.serialize(function(){
    db.run("CREATE TABLE IF NOT EXISTS data (desc TEXT)")
    // var stmt = db.prepare("INSERT INTO data values (?)")
    // for (var i=0; i<2; i++){
    //     stmt.run('No' + i)
    // }
    //stmt.finalize()
    db.each('SELECT desc FROM data', function(err,row){
        console.log(row.desc)
    })
})

db.close()

<h1>Selamat Datang di APP ToDoList </h1>
<div>
    <form method="POST" action="/todo">
        <input type="text" name="list" value="<%= data.desc %>" />
        <button onClick="add()">Add</button>

        
    </form>
</div>

app.get('/', (req,res) =>{
    res.send(' ')    
    function add() {
        var a = document.getElementsByName("list")
        var stmt = d