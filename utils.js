function renderElement(element) {
    return (
        document.querySelector(element)
    )
}
function createTag(tag){
    return (
        document.createElement(tag)
    )
}
function elementId(id){
    return (
        document.getElementById(id)
    )
}
function renderElementAll(element) {
    return (
        document.querySelectorAll(element)
    )
}
function textContent(text){
    return (
        document.createTextNode(text)
    )
}