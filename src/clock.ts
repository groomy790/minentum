const meridiem = document.querySelector("#meridiem") as HTMLSpanElement
const time = document.querySelector("#time") as HTMLSpanElement

const AM_EMOJI = "☀️"
const PM_EMOJI = "🌕"

const ticking = () => {
    // get date info
    const date = new Date()
    
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    // show meridiem with emoji
    meridiem.innerText = hour > 12 ? PM_EMOJI : AM_EMOJI
    
    // show time
    const format_hour = hour > 12 ? hour - 12 : hour
    const format_minute = minute > 10 ? minute : `0${minute}`
    const format_second = second > 10 ? second : `0${second}`

    time.innerText = `${format_hour}:${format_minute}:${format_second}`
}

setInterval(ticking, 1000)
ticking()
