const backgroundColor = [
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightyellow",
]
export const changeBackground = () => {
    document.body.style.backgroundColor = backgroundColor[Math.floor(Math.random() * backgroundColor.length)];
}