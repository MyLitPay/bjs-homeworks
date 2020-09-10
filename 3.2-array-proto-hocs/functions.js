"use strict";

console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

const getNames = () => weapons.map(w => w.name);
console.log(getNames());

const getCountReliableWeapons = dur => weapons.filter(w => w.durability > dur).length;
console.log(getCountReliableWeapons(300));

const hasReliableWeapons = dur => weapons.some(w => w.durability > dur);
console.log(hasReliableWeapons(200));

const getReliableWeaponsNames = dur => {
    return weapons.filter(w => w.durability > dur).map(w => w.name);
}
console.log(getReliableWeaponsNames(300));

const getTotalDamage = () => {
    let sum = 0;
    weapons.forEach(w => sum += w.attack);
    return sum; 
}
console.log(getTotalDamage());

const getValuestCountToSumValues = (arr, val) => {
    let sum = 0;
    let newArr = [];
    arr.forEach(n => {
        sum += n;
        newArr.push(n);
        if (sum >= val) {
            newArr.pop(n)
        }
    });
    if (sum >= val) {
        return newArr.length + 1;
    }
    return newArr.length;
}
console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20));
