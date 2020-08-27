// sets
const nameArray = ['ryu','chun', 'ryu', 'shaun'];
console.log(nameArray);

//const namesSet = new Set(['ryu','chun', 'ryu', 'shaun']);
//const namesSet = new Set(nameArray);

//console.log(namesSet);

//const uniqueNames = [...namesSet];

const uniqueNames = [...new Set(nameArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25);
ages.delete(25);
console.log(ages, ages.size);
console.log(ages.has(20));

ages.clear();


const ninjas = new Set([
    {name:'shaun', age:30},
    {name:'crystal', age:29},
    {name:'chun-li', age:32}
]);

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
})