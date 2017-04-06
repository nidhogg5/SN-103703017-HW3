function light(n){
    if(n==1){
        $("#one").get(0).style.backgroundColor = "#93FF93"
    }
    else {
        $("#two").get(0).style.backgroundColor = "#93FF93"
    }
};
function lightout(n){
    if(n==1){
        $("#one").get(0).style.backgroundColor = "#FFFFFF"
    }
    else {
        $("#two").get(0).style.backgroundColor = "#FFFFFF"
    }
};

var s = 1;

function big(n){
    s++;
    $("p").css("font-size",s+"rem");
};

function small(n){
    if(s>1)
        s--;
    $("p").css("font-size",s+"rem");
};

function up() {
    window.scrollTo(0, 0);
}