

function nextLevel(next , prev , imgaes , i){

    next.onclick = function(){

        imgaes[i].style.display = "none";
    
        i++;
    
        if(imgaes.length <= i){
    
            i = 0;
    
        }
    
        imgaes[i].style.display = "block";
    }

    prev.onclick = function(){

        imgaes[i].style.display = "none";
    
        i--;
    
        if(i <= 0){
    
            i = imgaes.length - 1;
    
        }
    
        imgaes[i].style.display = "block";
    }

    setInterval(() => {
        imgaes[i].style.display = "none";
    
        i++;
    
        if(imgaes.length <= i){
    
            i = 0;
            
        }
    
        imgaes[i].style.display = "block";
    }, 2000);

}



function count(plus , minus , reset , output , j){
   

    
    plus.onclick = function(){
        j++;
        output.value = j;
        if(j > 0){
            minus.style.display = "block";
        }
    }
    minus.onclick = function(){
        j--;
        output.value = j;
        if(j < 1){
            minus.style.display = "none";
        }
    }
    reset.onclick = function(){
        j = 0;
        output.value = j;
        if(j < 1){
            minus.style.display = "none";
        }
    }

}
















export{nextLevel , count};
