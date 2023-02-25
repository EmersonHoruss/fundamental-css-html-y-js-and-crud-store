import { ProductApi } from "./api/product-api.js"

const tr = document.createElement("tr")
const td = document.createElement("td")
td.textContent = "Loading ..."
tr.appendChild(td)
const table = document.getElementsByTagName("table")[0]
table.appendChild(tr)

let products = await ProductApi.get()

table.removeChild(tr)

// const updateProduct = 


for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")

    td1.textContent = i + 1
    td2.textContent = product._name
    td3.textContent = product._amount
    td4.textContent = product._price

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    const td5 = document.createElement("td")
    const buttonDelete = document.createElement("button")
    const buttonUpdate = document.createElement("button")

    buttonDelete.setAttribute("type", "button")
    buttonUpdate.setAttribute("type", "button")

    buttonDelete.classList = ["button-warning"]
    buttonUpdate.classList = ["button-primary"]

    buttonDelete.textContent = "Eliminar"
    buttonUpdate.textContent = "Actualizar"

    buttonDelete.addEventListener("click", function(product) {
        console.log(product)
    })

    td5.appendChild(buttonUpdate)
    td5.appendChild(buttonDelete)
    td5.classList = ["options"]

    tr.appendChild(td5)

    table.appendChild(tr)
}


function deletProduct(id) { }
