var uuid=require("uuid");
var menu=[{
    id:uuid.v4(),
    name:"tabouleh",
    cost:5000,
    type:"appetizer"
},
         {
             id:uuid.v4(),
             name:"ma3moulbeashta",
             cost:10000,
             type:"dessert",
         },
              {
             id:uuid.v4(),
             name:"mashawi",
             cost:40000,
             type:"maincourse",
         },
         
         ];
module.exports=menu;