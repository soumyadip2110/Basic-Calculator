// Buttons Functionality
for (var i = 0; i < document.querySelectorAll(".btn").length; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        buttonClick(this);
        if (this.innerHTML != "="){
            addText(this.innerHTML);
        }
    });
}

// CA (clear all) Button
document.querySelector("#btnCA").addEventListener("click", function () {
    document.querySelector("#equation").value = "";
});

// C (clear) Button
document.querySelector("#btnC").addEventListener("click", function(){
    var str = document.querySelector("#equation").value;
    str = str.substring(0, str.length - 2);
    document.querySelector("#equation").value = str;
});

// Equals Button
document.querySelector("#btnEq").addEventListener("click", equalsTo);

function equalsTo(){
    var ans = eval(document.querySelector("#equation").value);
    document.querySelector("#equation").value = ans;
}

function buttonClick(btn){
    btn.classList.add("btnClick");
    setTimeout(function(){
        btn.classList.remove("btnClick");
    }, 100);
}

function addText(num){
    document.querySelector("#equation").value += num;
}

// Dark Mode Button
document.querySelector(".darkMode").addEventListener("click", function(e){
    if(document.querySelector("body").classList.toggle("darkModeBody")){
        e.target.innerHTML = "Light Mode";
    }
    else{
        e.target.innerHTML = "Dark Mode";
    }
    document.querySelector(".heading").classList.toggle("darkModeHeading");
    document.querySelector(".primary_container").classList.toggle("darkModePrimary_container");
});

// Enter Key Press
document.addEventListener("keypress", function(e){
    if (e.key == "Enter"){
        e.preventDefault();
        equalsTo();
    }
});