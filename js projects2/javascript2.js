const form = document.querySelector('form')
                                                     // not stored value until submit as it will take emoty  values
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height =parseFloat(document.querySelector('#height').value)
    const weight =parseFloat(document.querySelector('#weight').value)
    const results =document.querySelector('#results')

    if (height ==='' || height === 0 || isNaN(height)) {
        results.innerHTML = "give valid height"
    }
    else if (weight ==='' || weight === 0 || isNaN(weight)) {
        results.innerHTML = "give valid weight"
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }

})
