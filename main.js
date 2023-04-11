const calcButton = document.getElementById('calc_button');

calcButton.addEventListener("click", () => {
    const weightVal = document.getElementById('weight').value;
    const heightVal = document.getElementById('height').value;

    const output = document.getElementById('calculator-output');
    const imc = weightVal / (heightVal / 100) ** 2
    output.innerText = `IMC = ${Math.round(imc * 100) / 100}`;

    const outputDetail = document.getElementById('calculator-output-detail');
    const mainContainer = document.getElementById("calculator-container");
    let imcDetail = "";

    switch(true){
        case imc < 15:
            imcDetail = "Delgadez muy severa.";
            mainContainer.style.boxShadow = "rgba(255, 0, 0, 0.32) 0px 4px 12px";
            break;
        case imc >= 15 && imc < 16:
            imcDetail = "Delgadez severa.";
            mainContainer.style.boxShadow = "rgba(255, 0, 0, 0.32) 0px 4px 12px";
            break;
        case imc >= 16 && imc < 18.5:
            imcDetail = "Delgadez.";
            mainContainer.style.boxShadow = "rgba(255, 149, 0, 0.32) 0px 4px 12px";
            break;
        case imc >= 18.5 && imc < 25:
            imcDetail = "Peso saludable."; 
            mainContainer.style.boxShadow = "rgba(26, 255, 0, 0.574)0px 4px 12px";

            break;
        case imc >= 25 && imc < 30:
            imcDetail = "Sobrepeso.";
            mainContainer.style.boxShadow = "rgba(255, 149, 0, 0.32) 0px 4px 12px";
            break;
        case imc >= 30 && imc < 35:
            imcDetail = "Obesidad moderada.";
            mainContainer.style.boxShadow = "rgba(255, 0, 0, 0.32) 0px 4px 12px";
            break;
        case imc >= 35 && imc < 40:
            imcDetail = "Obesidad severa.";
            mainContainer.style.boxShadow = "rgba(255, 0, 0, 0.32) 0px 4px 12px";
            break;
        case imc >= 40:
            imcDetail = "Obesidad mórbida.";
            mainContainer.style.boxShadow = "rgba(255, 0, 0, 0.32) 0px 4px 12px";
            break;
    }

    outputDetail.innerText = imcDetail;
})