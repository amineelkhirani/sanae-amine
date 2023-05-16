let stars=document.getElementById('stars');
let moon= document.getElementById('moon2');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let vollar=document.querySelector('.vollar');
window.onscroll=function(){
let value=scrollY;
stars.style.left=value+'px';
moon.style.top=value*4+'px';
mountains3.style.top=value*2+'px';
mountains4.style.top=value*1.5+'px';
river.style.top=value+'px';
boat.style.top=value+'px';
boat.style.left=value*3+'px';
vollar.style.fontSize=value+'px';
if(scrollY>=250){
    vollar.style.fontSize=250+'px';
    vollar.style.position='fixed';
    if(scrollY>=774){
vollar.style.display='none';
 }else{
    vollar.style.display='block';
 }
 if(scrollY>=292){
document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';
 }
 else{
    document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)';
 }
}
}