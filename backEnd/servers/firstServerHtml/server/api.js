var express=require("express");
var apiRounter=express.Router();
var uuid=require("uuid");
var validate = require("./validate.js")
var menu=require("./menu1.js");

apiRounter.get("/",function(req,res){
    if (Object.keys(req.query).length==0){
        res.status(200).send(menu)
        }
    else {
            var filteredData=[];
            var query=req.query;
            for(key in query){
                for (var i=0;i<menu.length;i++){
                    if (menu[i][key]==query[key]){
                        filteredData.push(menu[i]);
                    }
                }
            }
        
        }
    res.status(400).send(filteredData)
});
apiRounter.get("/:id",function(req,res){
  var id=req.params.id;
        for (var i = 0; i < menu.length; i++) {
        if (id == menu[i].id) {
            menu.push(menu[i])
            res.status(200).send(menu[i])
        }
    }
    res.status(404)({
        "message": "no such as id  " + id
    })
});
   
apiRounter.post("/", function (req, res) {
    var didPass = validate(req.body);
    if(didPass.pass == false){
        res.status(400).send({
            message: "didPasss.failure"
        })
    } else {
        menu.push(req.body);
        res.status(200).send({
            "message": "success"
        })
    };
});
apiRounter.delete("/:id", function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < menu.length; i++) {
        if (id == menu[i].id) {
            menu.splice(i, 1)
            res.status(200).send({
                "message": "you have delete the item with id " + id
            });
        }
    }
    res.status(404)({
        "message": "no such as id  " + id
    })
});
apiRounter.put("/:id", function (req, res) {
    var id = req.params.id;
    var menus = req.query;
    for (var i = 0; i < menu.length; i++) {
        if (id == menu[i].id) {
            for (key in menus) {
                if (menu[i][key] == undefined) {
                    res.status(400).send({
                        message: "no such key" + key
                    })
                } else {
                    menu[i][key] = menus[key];
                    
                }

            }
            res.status(200).send({
                        "message": "updated" + id
                    }); //like break;
        }

    }
    res.status(404).send({
        "message": "no such as id  " + id
    })
});
module.exports=apiRounter;