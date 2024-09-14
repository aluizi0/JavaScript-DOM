document.getElementById('sessionBtn').addEventListener('click', function() {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function() {
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
})

document.getElementById('localBtn').addEventListener('click', function() {
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function() {
    const t = localStorage.getItem('text')
    alert('O texto salvo é: ' + t)
})

document.getElementById('cookieBtn').addEventListener('click', function() {
    const input = document.getElementById('cookie')
    // cookieName = value; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/

    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024, 9, 14) + ';'
    const path = 'path=/'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function() {
    const input = document.getElementById('cookie2')
    // cookieName = value; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/

    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024, 9, 14) + ';'
    const path = 'path=/'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})