import { Panel } from "./lib/tab"

import { google } from "./tabs/google"
import { duckduckgo } from "./tabs/duckduckgo"
import { url } from "./tabs/url"
import { googletranslate } from "./tabs/googletranslate"

const panel = new Panel([
    google,
    googletranslate,
    duckduckgo,
    url
])

const panelbtn = document.querySelector("#panelbtn") as HTMLButtonElement
panelbtn.addEventListener("click", () => panel.switch())

google.onload()
