function my$(id) {
    return document.getElementById(id);
}
// to consider the compatibility
// encapsulation two function
function setText(node,text) {
    if(typeof node.innerText == "undefined"){
        node.textContent = text;
    }else {
        node.innerText = text;
    }
}
function getText(node) {
    if(typeof node.innerText == "undefined"){
        return node.textContent;
    }else {
        return node.innerText;
    }
}