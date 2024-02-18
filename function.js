const result = document.querySelector("#resultado");
const buttons = document.querySelectorAll(".buttongon");

function numberWithCommas(number) {
    const parts = number.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');  
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
    
        const regex = new RegExp(",", 'g');
        result.textContent = result.textContent.replace(regex, '');
        var buttonValue;
        if (button.id === "cero") {
            buttonValue = "0"
        } else {
            buttonValue = button.textContent;
        }

        if (button.id === "C") {
            result.textContent = "0";
            return;
        }

        if (button.id === "borrar") {
            if (result.textContent.length === 1) {
                result.textContent = "0";
            } else {
            result.textContent = result.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "igual") {
            try {
                var operationResult = result.textContent
                                .replace("×", "*")
                                .replace("÷", "/");
                result.textContent = eval(operationResult)
                    .toFixed(2)
                    .replace(/\.00$/, '');
                result.textContent = numberWithCommas(result.textContent);

            } catch {
                result.textContent = "Error";
            }
            return;
        }

        if (button.id === "porcentaje") {
            result.textContent = (parseFloat(result.textContent) / 100).toString();
            return;
        }

        if (result.textContent === "0") {
            result.textContent = buttonValue;
        } else {
            result.textContent = result.textContent + buttonValue;
            result.textContent = numberWithCommas(result.textContent);
        }
    })
})