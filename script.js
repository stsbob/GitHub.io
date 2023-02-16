document.querySelector('button').onclic = myClick;
function myClick(){
let a = document.querySelector('.i').value;
console.log(a);//выводим в консоль значение
document.getElementById("demo").innerHTML = a;
}
