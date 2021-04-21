var bgslides=new Array()
bgslides[0]="img2.svg"
bgslides[1]="img3.svg"
bgslides[2]="img4.svg"
bgslides[3]="img5.svg"
bgslides[4]="img6.svg"
bgslides[5]="img2.svg"

//Specify interval between slide (in miliseconds)
var speed=3000

//preload images
var processed=new Array()
for (i=0;i<bgslides.length;i++){
processed[i]=new Image() 
processed[i].src=bgslides[i]
}

var inc=-1

function slideback(){
if (inc<bgslides.length-1)
inc++
else
inc=0
document.body.background=processed[inc].src
}

if (document.all||document.getElementById)
window.onload=new Function('setInterval("slideback()",speed)')