export function q(selector: string, from: HTMLElement | Element) {
    const element = from.querySelector(selector)
    if (element === null) throw new Error(`Fail to query DOM with "${selector}"`)

    return element
}

export const BODY = document.body
