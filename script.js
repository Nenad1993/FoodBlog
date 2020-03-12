function showHide(){
var searchForm = document.getElementById("search-txt");
if(searchForm.classList.contains("hidding")){
searchForm.classList.remove("hidding");
}else{
    searchForm.classList.add("hidding");
}

}

function expandNav(){
    var nav = document.getElementById("click-nav");
    if(nav.classList.contains("mobile")){
        nav.classList.remove("mobile");
        }else{
            nav.classList.add("mobile");
        }
}

    function selecting(parameter){
        var breakfast = document.getElementById("recipt1");
        var lunch = document.getElementById("recipt2");
        var dinner = document.getElementById("recipt3");
        var recipts = document.getElementsByClassName("recipt");
        
         if(parameter == "1"){
            for(var i = 0; i<recipts.length; i++){
                recipts[i].classList.remove("activate");
             }
                lunch.classList.add("activate");
               
        }else if(parameter == "2"){
            for(var i = 0; i<recipts.length; i++){
                recipts[i].classList.remove("activate");
            }
              dinner.classList.add("activate");
        }else{
            for(var i = 0; i<recipts.length; i++){
                recipts[i].classList.remove("activate");
        }
            breakfast.classList.add("activate");
      }shadowing();
}

      function shadowing(){
        var recipts = document.getElementsByClassName("recipt");
        var selector = document.getElementsByClassName("selector");
        for(var i = 0; i< recipts.length; i++){
           if(recipts[i].classList.contains("activate")){
                selector[i].classList.remove("shadow");
           }else{
               selector[i].classList.add("shadow");
           }
        }
      }

    //###########################################################
    
    function goLeft(){
             next("prev");
             }

    function goRight(){
        next("next");
        }
     
     function next(direction){
        var slider = document.getElementsByClassName("slide-item");
        var position = 0;

        if(direction == "next" && position!=slider.length-1){
            position++;
          }else if(direction == "prev" && position!=0){
            position--;
          }
            
        
        for (var i = 0; i < slider.length; i++) {
           slider[i].classList.remove("active");
        }
        slider[position].classList.add("active");

        if (position == 0){
            slideLeft();
        }else if(position == slider.length-1){
            slideRight();
        }
        }
    
    function slideLeft(){
        var arrowLeft = document.getElementById("arrowLeft");
        var arrowRight = document.getElementById("arrowRight");
        if(!arrowLeft.classList.contains("shade")){
            arrowLeft.classList.add("shade");
        } 
        if(arrowRight.classList.contains("shade")){
            arrowRight.classList.remove("shade");
        } }

    function slideRight(){
        var arrowLeft = document.getElementById("arrowLeft");
        var arrowRight = document.getElementById("arrowRight");
            if(!arrowRight.classList.contains("shade")){
                arrowRight.classList.add("shade");
         } 
            if(arrowLeft.classList.contains("shade")){
                arrowLeft.classList.remove("shade");
               
            } }  
