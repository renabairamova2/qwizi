//1
const num = [1, 2, 3, 4]

let sum = 0;
for (let i=0; i < num.length; i++) {sum = sum + num[i];}

console.log('ჯამი:', sum);

//2
function ave() {
    const num = [1,-2,3,-4,5,-6];
    let sum = 0;
    let count = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0 && num[i] % 2 === 0) {
            sum = sum + num[i];
            count = count + 1;
        }
    }
    if(count === 0){
        console.log(0)
        return 0;}
    let average = sum / count;
    console.log("საშუალო:", average);
};


ave();




//3
const obj = {
    name: "Beka",
    age: 23,
    isEmployed: true,
    address: {
        name: "Tbilisi",
        age: 10
    }
}

const updobj = structuredClone(obj);
obj.address.age = 15;

console.log(obj.address.age);
console.log(updobj.address.age)
