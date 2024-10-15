// function task1(){
// let x =10;
// let y =5;
// x+=y;
// y--;
// let z=x*y;
// x/=2;
// z%=x;
// console.log("final values:", x,y,z);}
// task1();
// function task2(){
//     let arr = [20, 13, 12, 19 ,99];
//     arr.sort();
//     console.log("values print:",arr);
//     arr.push(33);
//     console.log("values print:",arr);
//     arr.pop();
//     console.log("values print:",arr);
//     let index=arr.includes[12];
//     searchingArray(arr , 12);
// }
// task2();
// function searchingArray(arr,keyword){
//  let item;
//  if(arr.includes(keyword)){
//     item=arr.indexOf(keyword);
//     console.log("item printed:",item)
//  }
//  else{
//     console.log('item is not found');
//  }
// }
let con = document.getElementById('container');
let par = document.getElementById('par');
let bgColor = con.style.backgroundColor;
let pColor = con.style.color;
let text = con.innerText;

con.addEventListener('mouseover', function (){
    con.style.backgroundColor = 'black';
    con.style.color = 'white';
    par.innerText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose'
});

con.addEventListener('mouseout', function (){
    con.style.backgroundColor = bgColor;
    con.style.color = pColor;
    par.innerText = text;
});