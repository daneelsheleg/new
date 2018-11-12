/*document.addEventListener('DOMContentLoaded', function () {
    var header = document.createElement('h1');
    header.innerText = 'hello world';
    header.style.color = 'red';
    var text = document.createElement('p');
    text.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry';
    var button = document.createElement('button');
    button.innerText = 'очистить';
    button.style = 'background-color:green; border:none; color:white;font-size:24px;cursor:pointer';
button.addEventListener('click', function () { 
  
    if ( text.innerText == '0'){
        text.innerText = 'hello'
    }
    else{
        text.innerText = '0'
    };

    if ( header.innerText == '0'){
        header.innerText = 'hello'
    }
    else{
        header.innerText = '0'
    }
})
    document.body.appendChild(header);
    document.body.appendChild(text);
    document.body.appendChild(button);
});*/
document.addEventListener('DOMContentLoaded', function () {
    var input = prompt('меню');

    var ul = document.createElement('ul');
        var one = (function()  {
            for(  var i = 1;  i-1 < input; ){
                var li = document.createElement('li');

                var p = document.createElement('p');
                ul.appendChild(li);
                li.appendChild(p);
                p.innerText = i++;
                p.style = 'text-align:center; padding-top:25px;'
                li.style = 'border:1px solid; border-radius:50%; width:100px; height:100px;display:inline-block;margin-bottom:10px; margin-right:10px;';
            }
    }
())
    document.body.appendChild(ul);


})

