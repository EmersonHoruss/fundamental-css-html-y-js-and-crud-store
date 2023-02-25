// import myDefaultConfigApi, { ConfigApi, ConfigApiClass, getConfigApi } from "./confic-api";
import { ConfigApi } from "./confic-api.js";

const path = ConfigApi.path + "/product"

export const ProductApi = {
    get: async () => {
        return await fetch(path, {
            method: "GET",
            headers: ConfigApi.headers
        }).then(response => response.json())
            .then(data => data)
            .catch(err => console.log(err))
    },

    post: async () => { }
}
