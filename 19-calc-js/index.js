const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

// impedir que o usuario digite letras

const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','(',')','.'];

document.querySelectorAll('.charKey').forEach( function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value;
        input.value += value;
    });
});


/**
 * Event listener for the input element to prevent the user from typing letters.
 * 
 * Ouvinte de evento para o elemento input para evitar que o usuário digite letras.
 * 
 * @param {Event} ev - O objeto de evento keydown.
 * @returns {void}
 */

input.addEventListener('keydown', (ev) => {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key;
        return;
    }
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1);
    }
    if (ev.key === 'Enter'){
        calculate();
    }
});

function calculate(){
    console.log('calculate');
}


