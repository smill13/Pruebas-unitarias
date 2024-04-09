const fs = require('fs');
const path = require('path');

// Leer el contenido del archivo index.html
const htmlContent = fs.readFileSync(path.resolve(__dirname, 'Index.html'), 'utf8');

// Extraer el título de la página
const titleRegex = /<title>(.*?)<\/title>/;
const match = htmlContent.match(titleRegex);
const pageTitle = match ? match[1] : null;

// Prueba unitaria para verificar el título de la página
test('Page title is correct', () => {
    expect(pageTitle).toBe('My Simple Page');
});
