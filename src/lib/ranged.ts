export class Ranged {
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
