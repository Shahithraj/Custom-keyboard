const keyboard = {
    elements:{
        main:null,
        keysContainer:null,
        keys:[]
    },
    eventHandlers:{
        oninput:null,
        onclose:null
    },
    properties: {
        value: "",
        capsLock: false
    },

    init() {

        // Create main elements

        this.elements.main = document.createElement('div')
        this.elements.keysContainer = document.createElement('div')


        //  adding class list

        this.elements.main.classList.add('keyboard','1keyboard--hidden')
        this.elements.keysContainer.classList.add('keyboard__keys')


        // Add to DOM

        this.elements.main.appendChild(this.elements.keysContainer)
        document.body.appendChild(this.elements.main)
    },


    _createKeys() {
const fragment = document.createDocumentFragment()
const keyLayout = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
    "space"
];

//  create icons

const createIconHTML = (icon_name) => {
    return `<i class="material-icons">${icon_name}</i>`
}


keyLayout.forEach(key => {
    const keyElement = document.createElement("button")
    const insertLineBreak = ["backspace",'p','enter',"?"].indexOf(key) != -1;

    // Add attributes/classes
    
    keyElement.setAttribute("type", "button");
    keyElement.classList.add("keyboard__key");

    switch(key) {
        case "backspace":
            keyElement.classList.add('keyboard__key--wide')
            keyElement.innerHTML = createIconHTML("backspace")

        case "enter":
            keyElement.classList.add('keyboard__key--extra-wide')
    }

})

    },


    _triggerEvents(handlerName) {
console.log(`Event Name is ${handlerName}`)
    },


    _toggleCapsLock() { 
        console.log(`caps lock toggle`)
    },


    open(initialValue,oninput,onclose) {
    }

    close() {

    }
}

window.addEventListener('DOMContentLoaded',() => {
    keyboard.init()
})