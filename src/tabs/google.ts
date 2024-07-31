import { q, BODY } from "../lib/query"

const google = q("input", q("#google", BODY)) as HTMLInputElement

google.addEventListener("change", (e) => {
    e.preventDefault()

    location.href = `https://www.google.com/search?q=${google.value}`
})
