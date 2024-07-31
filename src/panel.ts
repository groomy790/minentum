import { Panel } from "./lib/tab"

import { google } from "./tabs/google"
import { duckduckgo } from "./tabs/duckduckgo"

const panel = new Panel([
    google,
    duckduckgo
])

const panelbtn = document.querySelector("#panelbtn") as HTMLButtonElement
panelbtn.addEventListener("click", () => panel.switch())

google.onload()
