//add onload functions
function addLoadEvent(func) {
    var old_onload = window.onload;
    if (typeof old_onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function () {
            old_onload();
            func();
        }
    }
}

//insert an element after an element
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (targetElement==parent.lastChild){//not lastElementChild,see test.html
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

//find next element
//pass the currentNode.nextSibling as the parameter
// function getNextElement(node) {
//     if (node.nodeType==1){
//         return node;
//     }
//     if (node.nextSibling){
//         return getNextElement(node.nextSibling);
//     }
//     return null
// }
//improve
function getNextElement(node) {
    if (node.nextSibling){
        var nextNode = node.nextSibling;
        if (nextNode.nodeType==1){
            return nextNode;
        } else {
            return getNextElement(nextNode);
        }
    } else{
        return null;
    }
}

//add class for element
function addClass(element,value) {
    if (!element.className){
        element.className = value;
    } else{
        element.className = element.className+" "+value;
    }
}