// Objetivo: Selecionar elementos do DOM
function show(){

    // Utilizar o método getElementById para selecionar um elemento do DOM
    const contactList = document.getElementById('contact-list');
    console.log(contactList);

    // Utilizar o método getElementsByClassName para selecionar elementos do DOM
    const listElements = document.getElementsByTagName('li');
    console.log(listElements);

    // Utilizar o método getElementsByTagName para selecionar elementos do DOM
    const contactInputs = document.getElementsByClassName('contact-input');
    console.log(contactInputs);

    // Utilizar o método querySelector para selecionar um elemento do DOM
    const contacts = document.querySelectorAll('#contact-list > li > label');
    console.log(contacts);

    // Utilizar o método querySelectorAll para selecionar elementos do DOM
    const contact1 = document.getElementsByName('contact1');
    console.log(contact1);

    // Utilizar o método querySelector para selecionar um elemento do DOM
    const firstContact = document.querySelector('#contact-list > li > label');
    console.log(firstContact);
}