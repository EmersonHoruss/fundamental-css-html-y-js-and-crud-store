import { ProductApi } from "./api/product-api.js"

const tableElement = document.getElementsByTagName("table")[0]
const loadingElement = createLoading()

function createLoading() {
    const tr = document.createElement("tr")
    const td = document.createElement("td")

    td.textContent = "Loading ..."
    tr.appendChild(td)

    return tr
}

export async function loadData() {
    // startLoading()

    let products = await ProductApi.get()

    console.log(products)

    // endLoading()

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        insertRow(i, product)
    }
}

function startLoading() {
    tableElement.appendChild(loadingElement)
}

function endLoading() {
    tableElement.removeChild(loadingElement)
}

function insertRow(i, product) {
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

    buttonDelete.addEventListener("click", function (product) {
        console.log(product)
    })

    td5.appendChild(buttonUpdate)
    td5.appendChild(buttonDelete)
    td5.classList = ["options"]

    tr.appendChild(td5)

    tableElement.appendChild(tr)
}

export function cleanData() {
    const trs = document.getElementsByTagName("tr")
    const trsDepured = []

    for (let i = 1; i < trs.length; i++) {
        trsDepured.push(trs[i])
    }

    while (trsDepured.length > 0) {
        const tr = trsDepured.pop()
        tableElement.removeChild(tr)
    }
}