var nome = window.prompt('Qual é seu nome: ')
document.writeln(`Seu nome tem <strong>${nome.length}</strong> letras.`);
document.writeln(`Seu nome em maiúsculas é ${nome.toUpperCase()}`);
document.writeln(`Seu nome em minúsculas é ${nome.toLocaleLowerCase()}`);