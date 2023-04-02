var numberOfActive = 1

var circles = document.querySelectorAll(".circle")
var progress = $("#progress-line")


$("#next").click(function(){
    
    numberOfActive++

    document.querySelectorAll(".circle")[numberOfActive - 1].classList.add("active")
    
    

    if(numberOfActive > 4) {
        numberOfActive = 4
    }
    update()
})
$("#prev").click(function(){
    numberOfActive--

    document.querySelectorAll(".circle")[numberOfActive].classList.remove("active")

    if(numberOfActive < 1) {
        numberOfActive = 1
    }
    update()
    
})

function update(){

    const active = document.querySelectorAll(".active")

    document.querySelector(".progress-line").style.width = ((( active.length - 1 ) / (circles.length - 1)  )* 100 +"%")

    if(numberOfActive == 1){
        document.querySelector("#prev").disabled = true;

    }
    else if(numberOfActive == $(".circle").length){
        document.querySelector("#next").disabled = true;
    }
    else{
        document.querySelector("#next").disabled = false;
        document.querySelector("#prev").disabled = false;
    }
    

}