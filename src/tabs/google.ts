import { Tab } from "../lib/tab"

const panel = document.querySelector("#panel") as HTMLDivElement

function load() {
    const root = document.createElement("div")
    root.classList.add("tab")
    root.id = "google"

    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "@Google")

    root.appendChild(input)
    panel.appendChild(root)

    input.addEventListener("change", () => {
        location.href = `https://www.google.com/search?q=${input.value}`
    })

    input.focus()
}

function unload() {
    const tab = document.querySelector(".tab#google")
    tab?.remove()
}

export const google: Tab = {
    onload: load,
    ondestroy: unload
}
