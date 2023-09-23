var relation = document.querySelector("h5")

var btn = document.getElementById("clickable")

var flag = 0

    btn.addEventListener("click",function(){
    if(flag==0){    
        relation.innerHTML="Friends"
        btn.innerHTML="Remove Friend"
        relation.style.color="green"
        flag = 1
    }
    else{
        relation.innerHTML="Stranger"
    btn.innerHTML="Add Friend"
    relation.style.color="red"
    flag = 0
    }
})

    