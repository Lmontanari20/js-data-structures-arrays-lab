// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name){
    drivers.push(name);
};

function destructivelyPrependDriver(name){
    drivers.unshift(name);
};

function destructivelyRemoveLastDriver(){
    drivers.pop();
};

function destructivelyRemoveFirstDriver(){
    drivers.shift();
};

function appendDriver(name){
    let arr = drivers.concat(name);
    return arr;
};

function prependDriver(name){
    let array = [name,...drivers];
    return array;
};

function removeLastDriver(name){
    let arr = drivers.slice(0,drivers.length-1);
    return arr;
};

function removeFirstDriver(name){
    let arr = drivers.slice(1, drivers.length)
    return arr;
};