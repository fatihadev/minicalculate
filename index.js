
let num1 = document.getElementById("numone")
let num2 = document.getElementById("numtwoo")
let sum = document.getElementById ("Sum")


function add(){
  let result = parseFloat(num1.value) + parseFloat(num2.value)
  sum.innerText = "Sum it's = " + result
    
}

function Soustraction(){
    let result = parseFloat(num1.value) - parseFloat(num2.value)
    sum.innerText = "Sum it's = " + result
      
  }

function Multiply(){
    let result = parseFloat(num1.value) * parseFloat(num2.value)
    sum.innerText = "Sum it's = " + result
      
}

function Diviser(){
    let result = parseFloat(num1.value) / parseFloat(num2.value)
    sum.innerText = "Sum it's = " + result
      
}
