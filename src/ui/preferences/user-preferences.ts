const body = document.getElementById('body')
const container = document.getElementById('app-container')

export function setTextColor(textColor: string): void {
    container!.style.color = textColor
}

export function setBgColor(backgroundColor: string): void {
    body!.style.backgroundColor = backgroundColor
    container!.style.backgroundColor = backgroundColor
}

export function setFont(fontName: string): void {
    container!.style.fontFamily = `"${fontName}"`
}

export function setFontSize(fontSize: string): void {
    container!.style.fontSize = `${fontSize}px`
}
