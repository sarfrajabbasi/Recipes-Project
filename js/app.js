
const getElement = (selector)=>{
    const element = document.querySelector(selector);
    if(element){
        console.log("%cYes element exist :)","color:rgba(0,255,0,0.8);padding 5px;font-size:16px;");
        return element;
    }else{
        throw Error(
            `Please double check Your class names,there is noe ${selector} class`
        )
    }
    
}

const links = getElement('.nav-links')
const navBtnDOM = getElement(".nav-btn")

navBtnDOM.addEventListener('click',()=>{
    links.classList.toggle("show-links")
})

const date =getElement('#date')
const currentyear = new Date().getFullYear();
date.textContent = currentyear;