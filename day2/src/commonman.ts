/* 
let addpower = function(power:number){
    return function(hero:any){
        return {
            title : hero.title,
            power : power
        }
    }
};

let commonman = {
    title : "Bruce"
};

commonman = addpower(7)(commonman); 
console.log(commonman); 
*/

let AddPower = function(power:number){
    return function(targetClass:any){
        return class {
            title:string = new targetClass().title;
            power:number = power;
        }
    }
}

@AddPower(7)
class CommonMan{
    title:string = "Bruce";
}

console.log( new CommonMan().power );