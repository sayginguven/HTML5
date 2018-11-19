let aDomObj = document.getElementById('test');

aDomObj.addEventListener('dblclick', addSomeText);

function addSomeText(){
   setTimeout(function(){
         aDomObj.innerHTML = "this will apear after 5 seconds";
   },5000);
}