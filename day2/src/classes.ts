// constructor
    // super()

// private property
// public property

// private method
// public method

// static property
// static method

// get and set

// super class 
class Person{
    constructor(public canwalk:string){}
}
// interface
interface IHero{
    title:string;
    fullname():string;
}

class Hero extends Person implements IHero{
    static version:number = 1001;
    //--------------------------------------
    constructor(
        public title:string, 
        private _firstname:string, 
        private _lastname:string,
        ncw:string){
        super(ncw)
    }
    //--------------------------------------
    fullname(){
        return this._firstname+ " "+this._lastname;
    }
    get firstname(){
        return this._firstname;
    }
    set firstname(nfirstname:string){
        this._firstname = nfirstname;
    }
    get lastname(){
        return this._lastname;
    }
    set lastname(nlastname:string){
        this._lastname = nlastname;
    }
};

let hero = new Hero("Spiderman","Peter","Parker","I can fly");

console.log(hero.title)
console.log(hero.firstname);
console.log( hero.canwalk );