// Define types for your product data
interface ProductData {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

// Function to display the popup and update its content
function showPopup(productData:ProductData) {
    const popupCard = document.querySelector('.popup') as HTMLElement;
    const productName = document.querySelector('#product-name') as HTMLElement;
    const productDescription = document.querySelector('#product-description') as HTMLElement;;
    const productPrice = document.querySelector('#product-price') as HTMLElement;;
    const productImage = document.querySelector('#product-image') as HTMLImageElement;;
    const overlay = document.getElementById('overlay') as HTMLElement; // Get the overlay element
    const closeBtn = document.querySelector('.close-button') as HTMLElement;

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
    const popupCard = document.querySelector('.popup') as HTMLElement;;
    const overlay = document.getElementById('overlay') as HTMLElement;; // Get the overlay element
    const closeBtn = document.querySelector('.close-button') as HTMLElement;;
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
async function openPopup(productId: number) {
    try {
        const response = await fetch('products.json');
        if (response.ok) {
            const data = await response.json() as ProductData[];;
            const productData = data.find(product => product.id === productId);
            if (productData) {
                showPopup(productData);
            } else {
                alert('Product not found.');
            }
        } else {
            alert('Failed to fetch product data.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching product data.');
    }
}
