
function doGet() {
  return HtmlService
    .createTemplateFromFile('index')
    .evaluate()
    .setTitle('Untuk Ibu, Cinta Pertamaku ❤️')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// Memanggil file HTML lain, seperti JavaScript.html
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Mengambil pesan kejutan dari server
function getSurpriseMessage() {
  return {
    message: 'Ibu adalah rumah terindah untuk pulang. ❤️',
    sender: 'Anakmu yang selalu menyayangimu'
  };
}
