
const body = document.getElementsByTagName("body")[0];

function handleWindowResize(event) {
    const innerWidth = window.innerWidth;
    console.log(innerWidth);
    
    if ( innerWidth <= "1024" ) {
        body.style.backgroundColor = "blue";
    }
    else if ( innerWidth <= "1600" ) {
        body.style.backgroundColor = "purple";
    }
    else {
        body.style.backgroundColor = "yellow";
    }
    
    
}

window.addEventListener("resize", handleWindowResize);