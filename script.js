let input = document.getElementById("textbox")
let fahrenheit = document.getElementById("fahrenheit")
let celcius = document.getElementById("celcius")
let answer = document.getElementById("ans")
let val


function calculate()
{
    if(fahrenheit.checked)
    {
        val = Number(input.value)
        val = 9/5 * val + 32
        answer.textContent = `Fahrenheit: ${val.toFixed(2)}F`

    }
    else if(celcius.checked)
    {
        val = Number(input.value)
        val = (val - 32)* 5/9
        answer.textContent = `Celcius: ${val.toFixed(2)}C`

    }
    else{
        answer.textContent = `Select an option from above`
    }

    
    
}