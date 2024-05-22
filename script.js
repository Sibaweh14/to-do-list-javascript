document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').nodeValue.length == 0){
        alert("please Enter a Task")
        
    }
}