var deletebutton = document.getElementById('deletebutton');
var addbutton = document.getElementById('addbutton');
var addtodo = document.getElementById('addtodo');
var todopage = document.getElementsByClassName('todo');

addbutton.addEventListener('click',function(){
    const olusturli = document.createElement("li");
    olusturli.style.textDecoration = "none";    
    olusturli.onclick = function () {
        if(olusturli.style.textDecoration != 'none'){
            olusturli.style.textDecoration = 'none';
            olusturli.style.opacity = 1;
            }else{
                olusturli.style.textDecoration = 'line-through';
                olusturli.style.opacity = 0.5;
            }
    };
    olusturli.className ="list-group-item list-group-item-secondary";
    const olusturbutton = document.createElement("button");
    olusturbutton.className = "btn-close";
    olusturbutton.onclick = function() {
        document.getElementById("list").removeChild(olusturli);
    }

    document.getElementById("list").appendChild(olusturli);
    olusturli.innerHTML = addtodo.value.trim();
    olusturli.appendChild(olusturbutton);

   addtodo.value = "";
});
