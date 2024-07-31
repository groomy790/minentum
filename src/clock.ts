const meridiem = document.querySelector("#meridiem") as HTMLSpanElement
const time = document.querySelector("#time") as HTMLSpanElement

const AM_EMOJI = "☀️"
const PM_EMOJI = "🌕"

setInterval(() => {
    // get date info
    const date = new Date()
    
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()

    // show meridiem with emoji
    meridiem.innerText = h > 12 ? PM_EMOJI : AM_EMOJI
    
    // show time
    time.innerText = `${h > 12 ? h - 12 : h}:${m}:${s}`
}, 1000)
