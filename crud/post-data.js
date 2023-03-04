import { cleanData, loadData } from "./load-data.js"
import { ProductApi } from "./api/product-api.js";

export function listenerPostData() {
    document.getElementById("save").addEventListener("click", e => {
        postData()
    })
}

async function postData() {
    const form = getForm()
    await ProductApi.post(form)
    cleanData()
    await loadData()
}

function getForm() {
    const form = {}
    const inputs = document.getElementsByTagName("input")

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        form[input.name] = input.value
    }

    return JSON.stringify(form)
}
