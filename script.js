var buttons = document.getElementsByTagName('button');
var display = document.getElementById('calculationBar');

var operator = null;
var operand1 = 0 ;
var operand2 = null;

// display.innerText='hello';
display.style.fontSize='larger';

for(var i=0 ; i<buttons.length ; i++){
    buttons[i].addEventListener('click' , function(){
        var value = this.textContent;

        if(value == '+'){
            operator='+';
            operand1 = parseFloat(display.textContent);
            display.innerHTML='';

        } else if(value == '-'){
            operator='-';
            operand1 = parseFloat(display.textContent);
            display.innerHTML='';

        } else if(value == '*'){
            operator='*';
            operand1 = parseFloat(display.textContent);
            display.innerHTML='';

        } else if(value == '/') {
            operator='/';
            operand1 = parseFloat(display.textContent);
            display.innerHTML='';

        } else if(value == '=') {
            operand2 = parseFloat(display.textContent);
            var sol = eval(operand1 + operator + operand2);
            display.innerText= sol;

        } else if(value == 'AC'){
            display.innerText='';
        } else{
            display.innerText += value;
        }
    });
}