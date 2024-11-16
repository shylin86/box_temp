function unit1()
{    
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("box2").style.border = "1px solid darkgray";
    document.getElementById("box2").style.background = "#fff";
    document.getElementById("box3").style.border = "1px solid darkgray";
    document.getElementById("box3").style.background = "#fff";
    document.getElementById("box1").style.border = "1px solid #ff1365";
    document.getElementById("box1").style.background = "#fff6f6";
    document.getElementById("radioinp1").checked = false;
    document.getElementById("radioinp2").checked = false;
    document.getElementById("radioinp").checked = true;
    document.getElementById("content1").style.display = "block";
}
function unit2()
{
    document.getElementById("content1").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("box1").style.border = "1px solid darkgray";
    document.getElementById("box1").style.background = "#fff";
    document.getElementById("box3").style.border = "1px solid darkgray";
    document.getElementById("box3").style.background = "#fff";
    document.getElementById("box2").style.border = "1px solid #ff1365";
    document.getElementById("box2").style.background = "#fff6f6";
    document.getElementById("radioinp").checked = false;
    document.getElementById("radioinp2").checked = false;
    document.getElementById("radioinp1").checked = true;
    document.getElementById("content2").style.display = "block";
}
function unit3()
{
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("box1").style.border = "1px solid darkgray";
    document.getElementById("box1").style.background = "#fff";
    document.getElementById("box2").style.border = "1px solid darkgray";
    document.getElementById("box2").style.background = "#fff";
    document.getElementById("box3").style.border = "1px solid #ff1365";
    document.getElementById("box3").style.background = "#fff6f6";
    document.getElementById("radioinp1").checked = false;
    document.getElementById("radioinp").checked = false;
    document.getElementById("radioinp2").checked = true;
    document.getElementById("content3").style.display = "block";
}
