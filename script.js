let screen_num=0;

let buffer=0;

let num1 = 0;
let num2 = 0;
let sign ="";

const buttons = document.querySelectorAll(".cal-button");

console.log(buttons);


buttons.forEach(pressButton);

function pressButton(button) {
     button.addEventListener("click",function() {
        const temp = parseInt(button.innerHTML);
        let screen = document.querySelector(".screen");
        if(temp>=0 && temp<10){
            if(buffer === 0)
            {
               screen.innerHTML= temp;
               buffer = temp;    
            }
            else{
                screen.innerHTML = buffer.toString() + temp.toString();
                buffer = parseFloat(screen.innerHTML);
            }
            
        }
        else{
            if(button.innerHTML === "AC"){
                console.log("1");
                screen.innerHTML = 0;
                buffer = 0;
            }
            else if(button.innerHTML === "+/-"){
                if(buffer>0){
                    screen.innerHTML = "-" + buffer.toString();
                    buffer = parseFloat(screen.innerHTML);
                }
                else{
                    screen.innerHTML =  buffer.toString().substring(1);
                    buffer = parseFloat(screen.innerHTML);
                }
            }
            else if(button.innerHTML === "%"){
                screen.innerHTML = buffer/100;
                buffer = parseFloat(screen.innerHTML);
            }
            else if(button.innerHTML === "="){
                if(sign === "+"){
                    num2 = buffer;
                    screen.innerHTML = num1 + num2;
                    buffer = parseFloat(screen.innerHTML);
                }
                else if(sign === "-"){
                    num2 = buffer;
                    screen.innerHTML = num1 - num2;
                    buffer = parseFloat(screen.innerHTML);
                }
                else if(sign === "×"){
                    num2 = buffer;
                    screen.innerHTML = num1 * num2;
                    buffer = parseFloat(screen.innerHTML);
                }
                else if(sign === "÷"){
                    num2 = buffer;
                    screen.innerHTML = num1 / num2;
                    buffer = parseFloat(screen.innerHTML);
                }
                
                
            }
            else {
                  num1 = buffer;
                  buffer = 0;
                  sign = button.innerHTML;
            }
        }
        
     })
}


