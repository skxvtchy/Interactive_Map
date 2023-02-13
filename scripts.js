let _startX = 0,
    _startY = 0,
    _scrollTop = 0,
    _scrollLeft = 0;

document.onmousedown = OnMouseDown;
document.onmouseup = OnMouseUp;

function OnMouseDown(event) {
    document.onmousemove = OnMouseMove;
    _startX = event.clientX;
    _startY = event.clientY;
    _scrollTop = document.documentElement.scrollTop;
    _scrollLeft = document.documentElement.scrollLeft;
}

function OnMouseMove(event) {
    window.scrollTo({
        left: _scrollLeft + (_startX - event.clientX),
        top: _scrollTop + (_startY - event.clientY)
    });
}

function OnMouseUp() {
    document.onmousemove = null;
}

function zoomin(){
        var myImg = document.getElementById("map1");
        var currWidth = myImg.clientWidth;
        if(currWidth == 25000) return false;
         else{
            myImg.style.width = (currWidth + 250) + "px";
        } 
        var mypin = document.getElementById("pin1");
        var currWidth = mypin.clientWidth;
        if(currWidth == 25000) return false;
         else{
            mypin.style.width = (currWidth + 250) + "px";
        } 
    }
function zoomout(){
    var myImg = document.getElementById("map1");
    var currWidth = myImg.clientWidth;
    if(currWidth == 1000) return false;
		else{
            myImg.style.width = (currWidth - 250) + "px";
            // myImg.style.height = auto;
        }
    var mypin = document.getElementById("pin1");
    var currWidth = mypin.clientWidth;
    if(currWidth == 1000) return false;
        else{
            mypin.style.width = (currWidth - 250) + "px";
        } 
    }
function openNav() {
  document.getElementById("mySidepanel").style.width = "32%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function openNav() {
    document.getElementById("mySidebar").style.width = "35%";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function openNav1() {
    document.getElementById("mySidebar1").style.width = "35%";
}
  
function closeNav1() {
    document.getElementById("mySidebar1").style.width = "0";
}

function openNav2() {
    document.getElementById("mySidebar2").style.width = "35%";
}
  
function closeNav2() {
    document.getElementById("mySidebar2").style.width = "0";
}

function openNav3() {
    document.getElementById("mySidebar3").style.width = "35%";
}
  
function closeNav3() {
    document.getElementById("mySidebar3").style.width = "0";
}

function openNav4() {
    document.getElementById("mySidebar4").style.width = "35%";
}
  
function closeNav4() {
    document.getElementById("mySidebar4").style.width = "0";
}

// function openNav5() {
//     document.getElementById("mySidebar5").style.width = "35%";
// }
  
// function closeNav5() {
//     document.getElementById("mySidebar5").style.width = "0";
// }



//scripts