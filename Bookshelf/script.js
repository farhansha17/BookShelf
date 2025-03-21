var Addbtn = document.querySelector('.Add-btn');
var overlay = document.querySelector('.overlay');
var popup = document.querySelector('.popup');
var closebtn = document.getElementById('Close-btn');
var container = document.querySelector('.container');
var Addbtn2 = document.querySelector('.AddBook-btn');
var input1 = document.getElementById('bookName');
var input2 = document.getElementById('authorName');
var Textarea = document.getElementById('description');
var btndel = document.querySelector('.btn'); 


Addbtn.addEventListener('click', function(){
  input1.value = '';
  input2.value = '';
  Textarea.value = '';
  overlay.style.display = 'block';
  popup.style.display = 'block';
});


closebtn.addEventListener('click', function(){
  overlay.style.display = 'none';
  popup.style.display = 'none';
});



Addbtn2.addEventListener('click', function(){
    var div = document.createElement('div');
    div.setAttribute("class", "box-container");
    div.innerHTML = `<h2>${input1.value}</h2>
            <h5>${input2.value}</h5>
            <p>${Textarea.value}</p> 
             <button class="btn" onclick="deleteBook(event)">DELETE</button>`
    container.append(div);
    overlay.style.display = 'none';
    popup.style.display = 'none';       
})

function deleteBook(event){
    event.target.parentElement.remove();

}



