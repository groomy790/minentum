import { q, BODY } from "../lib/query"

const duckduckgo = q("input", q("#duckduckgo", BODY)) as HTMLInputElement

duckduckgo.addEventListener("change", (e) => {
    e.preventDefault()

    location.href = `https://www.duckduckgo.com?q=${duckduckgo.value}`
})
