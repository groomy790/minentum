import { q, BODY } from "./lib/query"
import { Ranged } from "./lib/ranged"

class Tab {
    public dom: HTMLDivElement
    public name: string
    
    private onload: Function

    constructor(_dom: HTMLDivElement, _name: string, _onload: Function) {
        this.dom = _dom
        this.name = _name
        this.onload = _onload
    }

    load() {
        this.onload()
    }
}

const tabs = [
    new Tab(
        q("#google", BODY) as HTMLDivElement,
        "google",
        () => (q("input", q("#google", BODY)) as HTMLElement).focus()
    ),
    new Tab(
        q("#duckduckgo", BODY) as HTMLDivElement,
        "duckduckgo",
        () => (q("input", q("#duckduckgo", BODY)) as HTMLElement).focus()
    ),
    new Tab(
        q("#todolist", BODY) as HTMLDivElement,
        "todolist",
        () => { alert("Coming soon") }
    )
]

const tabbtn = q("#tabbtn", BODY)

const index = new Ranged(0, 2)

tabbtn.addEventListener("click", () => {
    const cur = index.inc()

    tabs.forEach((item, index) => {
        if (index == cur) {
            item.dom.classList.remove("hidden")
            item.load()
        } else {
            item.dom.classList.add("hidden")
        }
    })
})

tabs[0].load()
