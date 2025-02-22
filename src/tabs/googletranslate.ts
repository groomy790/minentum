import { Tab } from "../lib/tab"

const panel = document.querySelector("#panel") as HTMLDivElement

function load() {
    const root = document.createElement("div")
    root.classList.add("tab")
    root.id = "googletranslate"

    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "@Ko to En")

    root.appendChild(input)
    panel.appendChild(root)

    input.addEventListener("change", () => {
        location.href = `https://translate.google.co.kr/?sl=ko&tl=en&text=${input.value}%0A&op=translate`
    })

    input.focus()
}

function unload() {
    const tab = document.querySelector(".tab#googletranslate")
    tab?.remove()
}

export const googletranslate: Tab = {
    onload: load,
    ondestroy: unload
}
