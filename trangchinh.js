var img = document.getElementById("img");
var imgs = [ 
"sildeanh/neymar.jpg","sildeanh/neymar1.jpg","sildeanh/neymar2.webp","sildeanh/neymar3.webp","sildeanh/neymar4.jpg","sildeanh/neymar5.jpg","sildeanh/neymar7.jpg"];
var i = 0;
function anhh(){
img.setAttribute("src",imgs[i]);
i++;
if(i == imgs.length) 
i = 0;
}
setInterval(anhh,3000);