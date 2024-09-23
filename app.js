const palindromo = (frase) => {
    const fraseLimpia = frase.replace(/\s+/g, '').toLowerCase();

    const longitud = fraseLimpia.length;
    for (let i = 0; i < Math.floor(longitud / 2); i++) {
        if (fraseLimpia[i] !== fraseLimpia[longitud - 1 - i]) {
            return false;
        }
    }
    return true;
};

document.getElementById('resultado').addEventListener('click', () => {
    const entrada = document.querySelector('.input-small').value.trim();

    if (entrada === '') {
        Swal.fire({
            icon: 'warning',
            title: '¡Atención!',
            text: 'Por favor, ingresa una frase',
            confirmButtonClass: 'btn-custom' 
        });
        return;
    }

    if (palindromo(entrada)) {
        Swal.fire({
            icon: 'success',
            title: '¡Es un palíndromo!',
            text: `La frase "${entrada}" es un palíndromo.`,
            confirmButtonClass: 'btn-custom' 
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Intenta de nuevo, no es un palíndromo.',
            confirmButtonClass: 'btn-custom' 
        });
    }
});
