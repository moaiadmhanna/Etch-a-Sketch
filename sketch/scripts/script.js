const container=document.getElementById("container");
const btn=document.getElementById("chosse");
let Choices=document.querySelectorAll(".choice");
const para=document.getElementById("para")








  
  
 const draw=function(){
    const content =document.createElement("div");
    content.classList.add("grid");
    container.appendChild(content);
  
    };
    
        
    let Add=function(){
        let Size=prompt("choose size 64px or 32px or 16px or 8px note:(type only the number)" )
        let allgrids =document.querySelectorAll('.grid');
        allgrids.forEach(grid => container.removeChild(grid));
        if(Size==="64"){
            for(let i=0;i<150;i++){
                const content =document.createElement("div");
                content.classList.add("grid");
                container.appendChild(content);
                content.style.width="64px"
                content.style.height="64px";
                para.innerHTML=(":WELL DONE NOW DRAW")
                para.style.color="green";
            }
        }
        else if(Size==="32"){
            for(let i=0;i<600;i++){
                const content =document.createElement("div");
                content.classList.add("grid");
                container.appendChild(content);
                content.style.width="32px"
                content.style.height="32px";
                para.innerHTML=(":WELL DONE NOW DRAW")
                para.style.color="green";
            }
        }
            else if(Size==="16"){
                for(let i=0;i<2400;i++){
                    const content =document.createElement("div");
                    content.classList.add("grid");
                    container.appendChild(content);
                    content.style.width="16px"
                    content.style.height="16px";
                    para.innerHTML=(":WELL DONE NOW DRAW")
                para.style.color="green";
                }
        }
        else if(Size==="8"){
            for(let i=0;i<9600;i++){
                const content =document.createElement("div");
                content.classList.add("grid");
                container.appendChild(content);
                content.style.width="8px"
                content.style.height="8px";
                para.innerHTML=(":WELL DONE NOW DRAW")
                para.style.color="green";
            }
        }
        else{
            para.innerHTML=(":PLEASE REWRITE THE SIZE")
            para.style.color="Red";
        }
    }
    function randomColor (){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var color = `rgb(${r},${g},${b})`
        return color;
    
    }
        
    let mousePressed = false;

window.addEventListener("mousedown", function() {
        mousePressed = true;
});

window.addEventListener("mouseup", function() {
        mousePressed = false;
});
    let Color=function(e){
        const allgrids=document.querySelectorAll(".grid");
        const playerchoice=e.target.id;
        allgrids.forEach((grid) => {
            grid.addEventListener("mouseover",function(){

                if(playerchoice==="black"&&mousePressed===true){
                grid.style.backgroundColor="black";
            }
            else if(playerchoice==="Red"&&mousePressed===true){
                grid.style.backgroundColor="red";
            }
            else if(playerchoice==="orange"&&mousePressed===true){
                grid.style.backgroundColor="orange";
            }
            else if(playerchoice==="green"&&mousePressed===true){
                grid.style.backgroundColor="green";
            }
            else if(playerchoice==="randomcolor"&&mousePressed===true){
                grid.style.backgroundColor=randomColor();
            }
            else if(playerchoice==="white"&&mousePressed===true){
                grid.style.backgroundColor="white";
            }
            else if(playerchoice==="blue"&&mousePressed===true){
                grid.style.backgroundColor="#00035b";
            }
            else if(playerchoice==="violet"&&mousePressed===true){
                grid.style.backgroundColor="#35063e";
            }
            
            })
        }
    )}
    
    Choices.forEach(choice => choice.addEventListener("click",Color)); 
    if(document.body.onmousedown===true){
        Color(e);
    }
    else{
        console.log("doNothing")
    }
    
    
   
            
    
    
    
        
       
    
    

    




