import { Tab } from "../lib/tab"

const panel = document.querySelector("#panel") as HTMLDivElement

function load() {
    const root = document.createElement("div")
    root.classList.add("tab")
    root.id = "duckduckgo"

    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "@Duckduckgo")

    root.appendChild(input)
    panel.appendChild(root)

    input.addEventListener("change", () => {
        location.href = `https://www.duckduckgo.com?q=${input.value}`
    })

    input.focus()
}

function unload() {
    const tab = document.querySelector(".tab#duckduckgo")
    tab?.remove()
}

export const duckduckgo: Tab = {
    onload: load,
    ondestroy: unload
}
