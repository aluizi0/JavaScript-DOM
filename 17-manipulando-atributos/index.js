const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function () {
    input.value = 'Olá, mundo!'

    console.log(input.value)
    console.log(input.getAttribute('value'))

})

document.getElementById('type').addEventListener('click', function () {
    // input.type = input.type !== 'date' ? 'date' : 'text'
    input.setAttribute('type', input.getAttribute('type') !== 'date' ? 'date' : 'text')

})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite algo aqui'
})

document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disapled)
})

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse
    console.log("O valor do data-something-else é: ", data)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log("O valor do data-something-else agora é: ", input.dataset.somethingElse)
})