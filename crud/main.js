import { loadData, cleanData } from "./load-data.js";
import { listenerPostData } from "./post-data.js";

loadData()
listenerPostData()

document.getElementById("clean").addEventListener("click", e => { cleanData() })

