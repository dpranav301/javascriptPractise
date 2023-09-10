const date=new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString('en-IN'));
let date1=new Date(2023,2,23);
// console.log(date1.toDateString());

console.log(date.toLocaleString('default',{
    weekday:"long",
    day:"numeric"
}));