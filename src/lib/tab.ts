export interface Tab {
    onload(): void
    ondestroy(): void
}

class Ranged {
    private value: number
    private max: number
    private min: number

    constructor(_min: number, _max: number) {
        this.value = 0
        this.min = _min
        this.max = _max
    }

    inc() {
        if (this.value == this.max) {
            this.value = this.min
            return this.min
        }

        this.value++
        return this.value
    }

    dec() {
        if (this.value == this.min) {
            this.value = this.max
            return this.max
        }

        this.value--
        return this.value
    }
}

export class Panel {
    private tabs: Array<Tab>
    private index: Ranged

    constructor(_tabs: Array<Tab>) {
        this.tabs = _tabs
        this.index = new Ranged(0, _tabs.length - 1)
    }

    switch() {
        const cur = this.index.inc()

        this.tabs.forEach((item, index) => {
            if (cur === index) {
                item.onload()
                return
            }

            item.ondestroy()
        })
    }
}
