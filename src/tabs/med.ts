import { Tab } from "../lib/tab"

const panel = document.querySelector("#panel") as HTMLDivElement

function load() {
    const root = document.createElement("div")
    root.classList.add("tab")
    root.id = "med"

    const input = document.createElement("input")
    input.setAttribute("type", "button")
    input.setAttribute("value", "@Markdown Editor")

    root.appendChild(input)
    panel.appendChild(root)

    input.addEventListener("click", () => {
        location.href = "https://stackedit.io/app#"
    })

    input.focus()
}

function unload() {
    const tab = document.querySelector(".tab#med")
    tab?.remove()
}

export const med: Tab = {
    onload: load,
    ondestroy: unload
}
