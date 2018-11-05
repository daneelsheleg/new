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
    var ul = document.createElement('ul')
        function generateMenu(input) {
            for( var i = 0; i < input; i++){
                var li = document.createElement('li');
                var p = document.createElement('p');
                ul.appendChild(li);
                li.appendChild(p);
                li.style = 'background-color:green;';
            }
    }
    document.body.appendChild(ul);
    generateMenu(input);
})
