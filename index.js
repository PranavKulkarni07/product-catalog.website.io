"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function to display the popup and update its content
function showPopup(productData) {
    const popupCard = document.querySelector('.popup');
    const productName = document.querySelector('#product-name');
    const productDescription = document.querySelector('#product-description');
    ;
    const productPrice = document.querySelector('#product-price');
    ;
    const productImage = document.querySelector('#product-image');
    ;
    const overlay = document.getElementById('overlay'); // Get the overlay element
    const closeBtn = document.querySelector('.close-button');
    popupCard.style.transform = 'translate(-50%, -50%) scale(1)'; // Scale up
    popupCard.style.opacity = '1'; // Make it visible
    popupCard.style.zIndex = '1'; // Bring it to the front
    // Show the close button
    closeBtn.style.display = 'block';
    productName.textContent = productData.name;
    productDescription.textContent = productData.description;
    productPrice.textContent = `Rs ${productData.price}`;
    productImage.src = productData.image;
    popupCard.style.display = 'block';
    // Display the overlay
    overlay.style.display = 'block';
}
// Function to close the popup
function closePopup() {
    const popupCard = document.querySelector('.popup');
    ;
    const overlay = document.getElementById('overlay');
    ; // Get the overlay element
    const closeBtn = document.querySelector('.close-button');
    ;
    // Apply the animation to close the popup
    popupCard.style.transform = 'translate(-50%, -50%) scale(0)'; // Scale down and hide
    popupCard.style.opacity = '0'; // Hide it
    popupCard.style.zIndex = '-1'; // Place it behind other content
    // Hide the close button
    closeBtn.style.display = 'none';
    popupCard.style.display = 'none';
    // Hide the overlay
    overlay.style.display = 'none';
}
// Function to open the popup and fetch product data from JSON
function openPopup(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('products.json');
            if (response.ok) {
                const data = yield response.json();
                ;
                const productData = data.find(product => product.id === productId);
                if (productData) {
                    showPopup(productData);
                }
                else {
                    alert('Product not found.');
                }
            }
            else {
                alert('Failed to fetch product data.');
            }
        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred while fetching product data.');
        }
    });
}
