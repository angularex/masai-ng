"use strict";
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
class Person {
    canwalk;
    constructor(canwalk) {
        this.canwalk = canwalk;
    }
}
class Hero extends Person {
    title;
    _firstname;
    _lastname;
    static version = 1001;
    //--------------------------------------
    constructor(title, _firstname, _lastname, ncw) {
        super(ncw);
        this.title = title;
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    //--------------------------------------
    fullname() {
        return this._firstname + " " + this._lastname;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(nfirstname) {
        this._firstname = nfirstname;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(nlastname) {
        this._lastname = nlastname;
    }
}
;
let hero = new Hero("Spiderman", "Peter", "Parker", "I can fly");
console.log(hero.title);
console.log(hero.firstname);
console.log(hero.canwalk);
