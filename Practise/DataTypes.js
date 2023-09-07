const bigInt=12345n;
console.log(" typeof bigInt==",typeof bigInt);
const symbol1=Symbol("1");
const symbol2=Symbol("2");
console.log("Is=="+(symbol1===symbol2));
console.log("value of symbol1=="+typeof symbol1+"  and its value=="+symbol1.description);

const array1=["1","2","3"];
console.log("Type of array1=="+typeof array1);
const func1=function(){
    console.log("My Name is Function");
}
console.log("Type of func1=="+typeof func1);
const obj={
    "name":"Hello",
    "age":23
};
console.log("Type of obj=="+typeof obj);
console.log("Type of null=="+typeof null);
console.log("Type of undefined==",typeof undefined);