import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const el = document.getElementById("reset-button");
el.addEventListener("click", fun)

function fun () {
   document.getElementById("myForm").value="";
}

const item = document.getElementById("myForm");
item.addEventListener("keyup", update)

function update () {
   
}
