var myDate = new Date(); 
var minutes = myDate.getMinutes();
var hours = myDate.getHours();
var time = hours*60 + minutes;
var celld;
var cellr = myDate.getDay();

if(time<585)celld=1
else if(time<645)celld=2
else if(time<705)celld=3
else if(time<765)celld=4
else if(time<870)celld=5
else if(time<930)celld=6
else{celld=1;cellr=cellr+1;if(cellr>4){cellr=1}}

if(cellr==0){cellr=1;celld=1}
if(cellr==6 && celld==2){cellr=1;celld=3}
if(cellr==6 && celld==3){cellr=1;celld=4}
if(cellr==5 && celld==3){cellr=1;celld=4}

var newStyles = document.createElement('style')
document.head.append(newStyles);
newStyles.innerHTML = "tr:nth-child("+(cellr+1)+") td:nth-child("+(celld+1)+"){background-color: #ffff00}";

var t=document.getElementById("t").children[0].children[cellr].children[celld].children[1]
for(i=0; i<4; i++) {t.appendChild(document.createElement('span'))}
document.getElementById("t").children[0].children[1].children[celld].scrollIntoView(true)
