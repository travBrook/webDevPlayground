let myFirstVar = "Travis you can do this!";

function myFunct(){
    console.log(myFirstVar);
}

let travis = {

    job: "full stack dev"
    
}

window.onload = function() {

    document.getElementById("comSection").value = "";

    document.getElementById("theCom").value = '';
    document.getElementById("theUser").value = '';
    
}

function postComment(){

    if (document.getElementById("theUser").value == ''){
        alert("Enter a username ass!")
    }   
    else if (document.getElementById("theCom").value == ''){
        alert("Enter a comment ass!")
    }else{
        let prevComments = document.getElementById("comSection").value; 
        document.getElementById("comHeader").style.color = "goldenRod";
        let theUser = document.getElementById("theUser").value;
        let theCom = document.getElementById("theCom").value;
        let theFullComment = theUser.concat(' : ', theCom, "\n")
        document.getElementById("comSection").value = theFullComment.concat(prevComments);

        document.getElementById("theUser").value = '';
        document.getElementById("theCom").value = '';
    }
    
}

