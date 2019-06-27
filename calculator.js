function init(){
    document.querySelector('.caculator').addEventListener("click", test);
}


function test(event){
    console.log(event.target.innerText);
    const temp2 = addTwo(event.target.innerText);
    console.log(temp2);
}

function addTwo(vlaue){
   return vlaue+2;
}

init();
