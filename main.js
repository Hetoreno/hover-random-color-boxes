const boxes = document.querySelectorAll(".box");


boxes.forEach(event=>{
    event.addEventListener("mouseover",()=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.style.background= "#" + randomColor;
    
    })

    event.addEventListener("mouseout",()=>{
        event.style.background= "#1d1d1d";
    })
})