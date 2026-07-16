const form = document.querySelector('form')
// this use case will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    let bmi;

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid weight ${weight}`
    } else {
        bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result 

        result.innerHTML= `<span>${bmi}</span>`
    
    }

    if (bmi < 18.6){
            result.appendChild(document.createTextNode(` Under Weight`))
        } else if (bmi >= 18.6 && bmi < 24.9){
            result.appendChild(document.createTextNode(` Normal Weight`))
        } else {
            result.appendChild(document.createTextNode(` Over Weight`))
        }

})