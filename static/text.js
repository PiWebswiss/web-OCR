let lang;

// Define translations dictionary
const translations = {
    'en': {
        'h1': 'Optical Character Recognition',
        'p1': 'Or commonly called OCR is a technology that recognizes text within an image. There are different ways of achieving OCR one common approach is to use deep learning. I\'ve implemented a system to recognize text from an image.',
        'p2': 'You can try optical character recognition using the interface below. Default recognise language is English. I have enabled auto-submit for faster responses, so don\'t have to wait too long to see the results.',
        'h3-1': 'Optical Character Recognition',
        'span-1': 'Click to Upload File',
        'drop-text': 'or drag and drop your file here',
        'btn-choose-image': 'Choose an image',
        'btn-submit': 'Submit',
        'btn-copy-1': 'Copy text',
        'h4-1': 'Your OCR history',
        'table-title-1': 'Date and time',
        'table-title-2': 'Detected Text',
        '0p-1': 'To extract text from an image, simply drag and drop your image or use the "Choose Image" button. Your image is automatically submitted, and the extracted text is returned.',
        '0p-2': 'The text is saved for 2 hours in your browser storage, allowing you to copy it.',
        '0p-3': 'After 2 hours, OCR history are deleted, so be sure to copy your text!',
        '0p-5': 'Do not upload sensitive images, as there is no safeguard in place, and your image may be used by <a href="https://ocr.space/ocrapi" target="_blank">OCR Space</a>.',
        '1p-1': 'I use the <a href="https://ocr.space/ocrapi" target="_blank">OCR Space API</a> to perform optical character recognition on images. It provides good accuracy and is fast.',
        '1p-2': 'You have a rate limit of 500 requests per day using their OCR Engine 2.',
        '1p-3': 'OCR Space is a cloud-based OCR service that can extract text found in a image.',
        '1p-4': 'It supports multiple languages, but currently, only English is supported in my application.',
        '1p-5': 'It supports various image formats, including PNG, JPEG, PDF and offers excellent accuracy.',
        '1p-6': 'For now, only images are supported, OCR with video is coming soon!',
        '1p-7': 'Link to <a href="https://ocr.space/ocrapi" target="_blank">OCR Space API</a>',
        'a-back-to-top': 'Back to top',
        'footer-p1': 'All the code is open source. You can find it in the <a href="#">GitHub repository</a>.',
        'footer-p2': 'Your predicted text is saved for two hours so that you can copy it. After that, your data is deleted.',
        'footer-p3': 'I run a local cleaning schedule every hour to remove expired data.',
        'footer-p4': 'If you wish, you can delete all the data stored on your device using the button below.',
        'btn-delete': 'Delete your data',
    },
    'fr': {
    'h1': 'Reconnaissance optique de caractères',
    'p1': "Appelée couramment ROC, c'est une technologie qui reconnaît le texte dans une image. Il existe différentes manières de réaliser la ROC, l'une des approches courantes étant l'apprentissage profond. J'ai implémenté un système pour reconnaître le texte d'une image.",
    'p2': "Vous pouvez essayer la reconnaissance optique de caractères en utilisant l'interface ci-dessous. Pour l'instant, seul l'anglais est pris en charge.",
    'h3-1': 'Reconnaissance optique de caractères',
    'span-1': 'Cliquez pour télécharger le fichier',
    'drop-text': 'ou glissez-déposez votre fichier ici',
    'btn-choose-image': 'Choisir une image',
    'btn-submit': 'Soumettre',
    'btn-copy-1': 'Copier le texte',
    'h4-1': 'Votre historique',
    'table-title-1': 'Date et heure',
    'table-title-2': 'Texte détecté',
    '0p-1': 'Pour extraire le texte d\'une image, il suffit de glisser-déposer votre image ou d\'utiliser le bouton "Choisir une image". Votre image est automatiquement soumise et le texte extrait est renvoyé.',
    '0p-2': 'Le texte est sauvegardé pendant 2 heures dans le stockage de votre navigateur, vous permettant de le copier.',
    '0p-3': 'Après 2 heures, l\'historique ROC est supprimé, assurez-vous donc de copier votre texte !',
    '0p-5': 'N\'envoyez pas d\'images sensibles, car il n\'y a pas de protection en place, et votre image peut être utilisée par <a href="https://ocr.space/ocrapi" target="_blank">OCR Space</a>.',
    '1p-1': 'J\'utilise l\'<a href="https://ocr.space/ocrapi" target="_blank">API OCR Space</a> pour effectuer la reconnaissance optique de caractères sur les images. Elle offre une bonne précision et est rapide.',
    '1p-2': 'Vous avez une limite de 500 requêtes par jour avec leur OCR Engine 2.',
    '1p-3': 'OCR Space est un service ROC basé sur le cloud qui peut extraire le texte trouvé dans une image.',
    '1p-4': 'Il prend en charge plusieurs langues, mais actuellement, seul l\'anglais est pris en charge dans mon application.',
    '1p-5': 'Il prend en charge divers formats d\'images, y compris PNG, JPEG, PDF et offre une excellente précision.',
    '1p-6': 'Pour l\'instant, seules les images sont prises en charge, la ROC avec vidéo arrive bientôt !',
    '1p-7': 'Lien vers <a href="https://ocr.space/ocrapi" target="_blank">l\'API OCR Space</a>',
    'a-back-to-top': 'Retour en haut',
    'footer-p1': 'Tout le code est open source. Vous pouvez le trouver dans le <a href="#">GitHub</a>.',
    'footer-p2': 'Votre texte prédit est sauvegardé pendant deux heures pour que vous puissiez le copier. Ensuite, vos données sont supprimées.',
    'footer-p3': 'Un processus de nettoyage est lancé toutes les heures pour supprimer les données expirées.',
    'footer-p4': 'Si vous le souhaitez, vous pouvez supprimer toutes les données stockées sur votre appareil en utilisant le bouton ci-dessous.',
    'btn-delete': 'Supprimer vos données',
    }

};


// Function to translate elements based on data-translate attribute
function translatePage(lang) {
    // Select all elements with the data-translate attribute
    const translatableElements = document.querySelectorAll('[data-translate]');

    // Loop through each element and translate its text
    translatableElements.forEach(element => {
        let key = element.getAttribute("data-translate");
        let translation = translations[lang][key];

        // Ensure we have some text
        if (translation) {
            // Use innerHTML to preserve HTML tags in translations
            element.innerHTML = translation;
        }
    });
}


/* Buttons  */
document.getElementById('translateToFr').addEventListener('click', function() {
    lang = "fr";
    localStorage.setItem('lang', lang);
    translatePage(lang);
    
  });
  
  document.getElementById('translateToEn').addEventListener('click', function() {
    lang = "en";
    localStorage.setItem('lang', lang);
    translatePage(lang);
  });
  
  
  
  // Set initial language default ("en")
  lang = localStorage.getItem('lang') || 'en';
  /* Translate page */
  translatePage(lang);