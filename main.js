let namee = document.querySelector("#name")
let price = document.querySelector("#productprice")
let Category = document.querySelector("#Category")
let Count = document.querySelector("#Count")
let Description = document.querySelector("#Description")
let submit = document.querySelector("#submit")
let index = 0
let arry = []

if (localStorage.getItem("nerd") != null) {
    arry = JSON.parse(localStorage.getItem("nerd"))
    loop()
}
function add() {
    let prdouct = {
        nam: namee.value,
        pric: price.value,
        cate: Category.value,
        Coun: Count.value,
        Descrip: Description.value,

    }
    arry.push(prdouct)


    loop()
    localStorage.setItem("nerd", JSON.stringify(arry))
}




function loop() {
    let trr = ""
    for (let i = 0; i < arry.length; i++) {
        trr += `<tr>
    <th scope="row">${i}</th>
   
    <td>${arry[i].nam}</td>
    <td>${arry[i].pric}</td>
    <td>${arry[i].cate}</td>
    <td>${arry[i].Coun}</td>
    <td>${arry[i].Descrip}</td>
    <td><button class="btn btn-danger" onclick="Delete(${i})">Delete</button></td>
    <td><button class="btn btn-success"onclick="update(${i})">update</button></td>
 
</tr>`
    }
    document.querySelector(".tbo").innerHTML = trr


}

function Delete(index) {
    arry.splice(index, 1)
    localStorage.setItem("nerd", JSON.stringify(arry))
    loop()
}
function update(i) {
    namee.value = arry[i].nam
    price.value = arry[i].pric
    Category.value = arry[i].cate
    Count.value = arry[i].Coun
    Description.value = arry[i].Descrip
    submit.style.display = "none"
    document.getElementById("upp").style.display = "block"
    index = i
}
function up() {
    let prdouct = {
        nam: namee.value,
        pric: price.value,
        cate: Category.value,
        Coun: Count.value,
        Descrip: Description.value,

    }
    arry[index] = prdouct
    localStorage.setItem("nerd", JSON.stringify(arry))
    loop()
    submit.style.display = "block"
    document.getElementById("upp").style.display = "none"
}