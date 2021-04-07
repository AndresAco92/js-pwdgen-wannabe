var nome = prompt('Inserisci il tuo nome: ');
var cognome = prompt('Inserisci il tuo cognome: ');
var colore = prompt('Inserisci il tuo colore preferito: ');

document.getElementById('text').innerHTML = 'Ecco la tua password generata: ' + nome + cognome + colore + '21';

alert('Password Debolissima')