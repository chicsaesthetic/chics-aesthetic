// Function to change language and update the product descriptions accordingly
function setLanguage(language) {
    const descriptions = {
        en: {
            product1: "Get a personalized gift  for a loved one or yourself with a personal picture and a song or quote of your choice..",
            product2: "Get a personalized gift  for a loved one or yourself with a personal picture and a song or quote of your choice.",
            product3: "Have your favorite characters displayed around your home or as a personalized gift for your loved one with their favorite characters.",
            product4: "Have Stickers of your favorite Character for your personal items .",
            product5: "Be able to Have a custom sign for any occasion.",
            product6: "Get a pajamas that can be personalized for you.",
            product7: "Personalize a Keychain as a memorable gift for someone or for your self .",
            product8: "Get a box for a loved one or as a gift for yourself. We offer Snack Boxes , Makeup Boxes , Art Boxes and your able to get a mixed Boxes..",
            product9: "Get a bouquet for a loved one or as a gift for yourself. We offer Snack Bouquets , Makeup Bouquets , Art Bouquets and your able to get a mixed Bouquets..",
            product10: "If your looking for something other than what is presented or have a vision of something you want , Click the order button..",
            product11: "We offer packages for different occasions such as (Birthdays , Weddings , Movies nights , Sleepover) If you need a package price for any occasion not mentioned feel free to contact us .",
            product12: "Get a custom Mirror to match the aesthetic of your space and to take cute pictures."
        },
        fr: {
            product1: "Obtenez un cadeau personnalisé pour un être cher ou pour vous-même avec une photo personnelle et une chanson ou une citation de votre choix.",
            product2: "Obtenez un cadeau personnalisé pour un être cher ou pour vous-même avec une photo personnelle et une chanson ou une citation de votre choix.",
            product3: "Faites exposer vos personnages préférés dans votre maison ou comme cadeau personnalisé pour votre bien-aimé avec ses personnages préférés.",
            product4: "Ayez des autocollants de votre personnage préféré pour vos objets personnels.",
            product5: "Être en mesure d’avoir un panneau personnalisé pour n’importe quelle occasion.",
            product6: "Procurez-vous un ensemble de pyjama personnalisé pour une soirée pyjama, votre groupe d’amis, un ami, ou même pour vous-même.",
            product7: "Personnalisez un porte-clés comme un cadeau mémorable pour quelqu’un ou pour vous-même.",
            product8: "Procurez-vous une boîte pour un être cher ou comme cadeau pour vous-même. Nous proposons des boîtes à collations, des boîtes de maquillage, des boîtes d’art et vous pouvez obtenir des boîtes mixtes.",
            product9: "Procurez-vous un bouquet pour un être cher ou comme cadeau pour vous-même. Nous proposons des bouquets de collations, des bouquets de maquillage, des bouquets d’art et vous pouvez obtenir des bouquets mixtes",
            product10: "Si vous cherchez autre chose que ce qui est présenté ou si vous avez une vision de quelque chose que vous voulez, cliquez sur le bouton de commande.",
            product11: "Nous proposons des forfaits pour différentes occasions telles que (Anniversaires, Mariages, Soirées cinéma, Soirée pyjama) Si vous avez besoin d’un prix forfaitaire pour toute occasion non mentionnée, n’hésitez pas à nous contacter .",
            product12: "Obtenez un miroir personnalisé pour correspondre à l’esthétique de votre espace et pour prendre de jolies photosObtenez un miroir personnalisé pour correspondre à l’esthétique de votre espace et pour prendre de jolies photos."
        },
        es: {
            product1: "Obtén un regalo personalizado para un ser querido o para ti mismo con una foto personal y una canción o cita de tu elección..",
            product2: "Obtén un regalo personalizado para un ser querido o para ti mismo con una foto personal y una canción o cita de tu elección..",
            product3: "Haga que sus personajes favoritos se exhiban en su hogar o como un regalo personalizado para su ser querido con sus personajes favoritos.",
            product4: "Ten pegatinas de tu personaje favorito para tus artículos personales..",
            product5: "Ser capaz de tener un letrero personalizado para cualquier ocasión.",
            product6: "Consigue un conjunto de pijama personalizado para una fiesta de pijamas, tu grupo de amigos, un amigo, o incluso para ti mismo.",
            product7: "Personaliza un llavero como un regalo memorable para alguien o para ti mismo.",
            product8: "Consigue una caja para un ser querido o como regalo para ti. Ofrecemos cajas de bocadillos, cajas de maquillaje, cajas de arte y su capacidad de obtener cajas mixtas..",
            product9: "Consigue un ramo de flores para un ser querido o como regalo para ti. Ofrecemos ramos de bocadillos, ramos de maquillaje, ramos de arte y su capacidad para obtener un ramo mixto.",
            product10: "Si está buscando algo diferente a lo que se presenta o tiene una visión de algo que desea, haga clic en el botón de pedido.",
            product11: "Ofrecemos paquetes para diferentes ocasiones, como (cumpleaños, bodas, noches de cine, pijamadas) Si necesita un precio de paquete para cualquier ocasión no mencionada, no dude en contactarnos .",
            product12: "Consigue un espejo personalizado que coincida con la estética de tu espacio y para hacer bonitas fotos."
        }
    };

    // Update descriptions for each product
    document.querySelector('#product1 .description').textContent = descriptions[language].product1;
    document.querySelector('#product2 .description').textContent = descriptions[language].product2;
    document.querySelector('#product3 .description').textContent = descriptions[language].product3;
    document.querySelector('#product4 .description').textContent = descriptions[language].product4;
    document.querySelector('#product5 .description').textContent = descriptions[language].product5;
    document.querySelector('#product6 .description').textContent = descriptions[language].product6;
    document.querySelector('#product7 .description').textContent = descriptions[language].product7;
    document.querySelector('#product8 .description').textContent = descriptions[language].product8;
    document.querySelector('#product9 .description').textContent = descriptions[language].product9;
    document.querySelector('#product10 .description').textContent = descriptions[language].product10;
    document.querySelector('#product11 .description').textContent = descriptions[language].product11;
    document.querySelector('#product12 .description').textContent = descriptions[language].product12;
}

// Function to scroll to the selected product
function scrollToProduct() {
    const selectedProduct = document.getElementById('productSelect').value;
    if (selectedProduct) {
        document.getElementById(selectedProduct).scrollIntoView({ behavior: 'smooth' });
        showProduct(selectedProduct);
    }
}

// Function to show only the selected product
function showProduct(productId) {
    const products = document.querySelectorAll('.container');
    products.forEach(product => {
        product.style.display = 'none'; // Hide all products
    });
    document.getElementById(productId).style.display = 'flex'; // Show the selected product
}

// Get the modal and button
var modal = document.getElementById("orderModal");
var btns = document.querySelectorAll(".order-now"); // Ensure that this class is on all 'Order Now' buttons
var span = document.getElementsByClassName("close")[0];

// When the user clicks the 'Order Now' button
btns.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        // Get product details dynamically and update modal content
        var productName = event.target.getAttribute("data-product-name");
        var productDesc = event.target.getAttribute("data-product-description");
        var productVideo = event.target.getAttribute("data-product-video");
        
        document.getElementById("modalProductName").textContent = productName;
        document.getElementById("modalDescription").textContent = productDesc;
        
        // Set the video source for the modal
        var modalVideo = document.getElementById("modalVideo");
        modalVideo.innerHTML = `<video src="${productVideo}" controls></video>`;
        
        // Show the modal
        modal.style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
