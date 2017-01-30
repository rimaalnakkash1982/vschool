var cars=[];
function Car (color,model,miles){
    this.color=color;
    this.model=model;
    this.miles=miles;
    this.run=function(){
    console.log(this.car+this.model+this.miles+"is runing"
); 
    }
};
cars.push(new Car ( "red","ferrari", "1000miles"));
cars.push(new Car ( "black","bmw", "1000miles"));
cars.push(new Car ( "silver","porsh", "1000miles"));
for(i=0;i<cars.lemght;i++) {
    cars[i].run();
}        


    
