import { Tab } from "../lib/tab"

const panel = document.querySelector("#panel") as HTMLDivElement

function load() {
    const root = document.createElement("div")
    root.classList.add("tab")
    root.id = "url"

    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "@Url")

    root.appendChild(input)
    panel.appendChild(root)

    input.addEventListener("change", () => {
        location.href = input.value
    })

    input.focus()
}

function unload() {
    const tab = document.querySelector(".tab#url")
    tab?.remove()
}

export const url: Tab = {
    onload: load,
    ondestroy: unload
}
