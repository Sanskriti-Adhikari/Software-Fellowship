//console.log("Hello World") : print statement
//console.log("Javascript is fun")
//var:function scope, let/const:block scope 

let fruits=[]
function addfruit(name,isFavourite){
    let fruit={
        name:name,
        favourite:isFavourite
    }
    fruits.push(fruit)
};
function showfruit(){
    console.log("-------Fruits--------")
    for(let i=0;i<fruits.length;i++){
        let fruit=fruits[i]
        let isFav=fruit.favourite?"(Favourite)":"";
        console.log(`${i+1}.${fruit.name}${isFav}`)  
    }
}
function showFavourites(){
    console.log("--------Favourite Fruits----------")
    fruits.forEach(function(fruit,index){
        if(fruit.favourite){
            console.log(`${fruit.name}`)
        }
    })
}
addfruit("Apple",true)
addfruit("Banana",false)
addfruit("Litchi",true)

showfruit()
showFavourites()

//show previw, external browser, inspect, console