var myDate = new Date();
var time = myDate.getHours()*60 + myDate.getMinutes;
var celld=1;
var cellr = myDate.getDay();

if(time<645)celld=2
else if(time<705)celld=3
else if(time<765)celld=4
else if(time<870)celld=5
else if(time<930)celld=6
else{celld=1;if(cellr>3)cellr=1;}

if(cellr==0){cellr=1;celld=1}
if(cellr==3 && (celld==5 || celld==6)){cellr=4;celld=1}

var newStyles = document.createElement('style')
document.head.append(newStyles);
newStyles.innerHTML = "tr:nth-child("+(cellr+1)+") td:nth-child("+(celld+1)+"){background-color: #ffff00}";

var t=document.getElementById("t").children[0].children[cellr].children[celld].children[1]
var t2=document.getElementById("t2").children[0].children[cellr].children[celld].children[1]
for(i=0; i<4; i++) {t.appendChild(document.createElement('span'));t2.appendChild(document.createElement('span'))}

function CS33(){
	document.getElementById("t2").style.display = "none";
	document.getElementById("t").style.display = "table";
	localStorage.setItem("c",'3');
	document.getElementById("t").children[0].children[1].children[celld].scrollIntoView(true)}
function CS34(){
	document.getElementById("t").style.display = "none";
	document.getElementById("t2").style.display = "table";
	localStorage.setItem("c",'4');
	document.getElementById("t2").children[0].children[1].children[celld].scrollIntoView(true)}
if(localStorage.getItem("c")=="4")CS34();
else CS33();
