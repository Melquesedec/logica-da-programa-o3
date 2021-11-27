

function resultado(){
    let select1 = parseInt(document.getElementById('seleciona-temperatura1').value);
    let select2 = parseInt(document.getElementById('seleciona-temperatura2').value);

    
    // console.log(select);

    let temperatura = parseInt(document.getElementById('temperatura').value);
    let formulaF = (parseInt(temperatura * 1.8) + 32);
    let formulaK = parseInt(temperatura) + 273;
    let resultado = document.getElementById('resultado');
    // let selectA = parseInt(select);
    // if(select1 === 0 || select2 === 0){
    //     let nome = 'Kelvin';
    // } else if(select1 === 1 || select2 === 1){
    //     let nome = 'Fahrenheit';
    // } else if(select1 === 2 || select2 === 2){
    //     let nome = '°Celsius';
    // }

    if(select1 === 0 && select2 === 0 || select1 === 1 && select2 === 1 || select1 === 2 && select2 === 2){
        switch(select1 || select2){
            case 0:
                resultado.innerHTML = (`A temperatura em Kelvin é ${temperatura}`)
            break;
            case 1:
                resultado.innerHTML = (`A temperatura em °Fahrenheit é ${temperatura}`)
            break;
            case 2:
                resultado.innerHTML = (`A temperatura em °Celsius é ${temperatura}`)
            break;
        }
    } else if(select1 === 0 && select2 === 1){
        let formulaF = temperatura -459.67
        resultado.innerHTML = (`${temperatura}K em Fahrenheit é ${formulaF}°Fahrenheit`)
    } else if(select1 === 0 && select2 === 2){
        let formulaC = temperatura -272.15
        resultado.innerHTML = (`${temperatura}K em °Celsius é ${formulaC}°Celsius`)
    } else if(select2 === 0 && select1 === 0){
        let formulaK = temperatura + 1
        resultado.innerHTML = (`${temperatura}K em Kelvin é ${formulaK}Kelvin`)
    } else if(select1 === 2 && select2 === 0){
        let formulaKF = temperatura + 274.15
        resultado.innerHTML = (`${temperatura}C em Kelvin é ${formulaKF}Fahrenheit`)
    } else if(select1 === 1 && select2 === 0){
        let formulaKC = temperatura + 255.927778
        resultado.innerHTML = (`${temperatura}F em Kelvin é ${formulaKC}°Celsius`)
    } else if(select1 === 2 && select2 === 1){
        let formulaFC = temperatura + 33.8
        resultado.innerHTML = (`${temperatura}C em Fahrenheit é ${formulaFC}°Celsius`)
    } else if(select1 === 0 && select2 === 1){
        let formulaFK = temperatura -457.87
        resultado.innerHTML = (`${temperatura}K em Fahrenheit é ${formulaFK}Kelvin`)
    } else if(select1 === 2 && select2 === 2){
        let formulaCF = temperatura + 1
        resultado.innerHTML = (`${temperatura}C em °Celsius é ${formulaCF}Fahrenheit`)
    } else if(select1 === 1 && select2 === 2){
        let formulaCK = temperatura -17.222222
        resultado.innerHTML = (`${temperatura}F em °Celsius é ${formulaCK}Kelvin`)
    }
    
    
        // resultado.innerHTML = (`A temperatura em ${nome} é ${temperatura} ${nome}`)
        //  resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulaK}K`);
        //  resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF}°F`)
    //  console.log(temperatura);
    // resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${resultado}°F`)
    
    // switch(select1){
    //     case 0:
    //         resultado.innerHTML = (`${temperatura}°C em Kelvin é ${formulaK}K`);  
    //     break;
            
    //     case 1:
    //         resultado.innerHTML = (`${temperatura}°C em Fahrenheit é ${formulaF}°F`);
    //     break;

    //     default:
    //         resultado.innerHTML = (``)
    //     break;
    //             }
}