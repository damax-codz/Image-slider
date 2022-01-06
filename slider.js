var arr =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxrc0W9TKaGPqvX5JdZ-wCilhBAMum91znw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzW7pD-wUMlUchKYexIbALpXvtSvNij8SU7w&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyH6RgxMpsi-cqG7fIUuXs9rn9mWSRZtc7Ng&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzJ_Lbwo6--eR_y6FcCh7tRm-yyWBk6fVAg&usqp=CAU"]

var i=0;
function vic (){
if(i>=arr.length-1){
i=-1
document.getElementsByTagName("span")[arr.length-1].style.color="rgba(197, 197, 197)"
} 
i++
document.getElementById("pics").src=arr[i];
document.getElementsByTagName("span")[i].style.color="black"
document.getElementsByTagName("span")[i-1].style.color="rgba(197, 197, 197)"
}
setInterval(vic,3000)
// function voc (){
// if(i==0){
// i+=1
// }    
// i-=1

// document.getElementById("pics").src=arr[i]

// document.getElementsByTagName("span")[i].style.color="black"
// document.getElementsByTagName("span")[i+1].style.color="rgba(197, 197, 197)"
// }
