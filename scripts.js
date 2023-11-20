// // Sample data for restaurants
// const restaurants = [
//     {
//         name: "Pizza Bucket",
//         address: "123 Main St, Chanakyapuri",
//         offer: "Free dessert with every order",
//         image: "Screenshot 2023-11-19 at 6.34.25 PM.png",
//         menu: [
//             { name: "Appetizer", price: "400 Rs" },
//             { name: "Main Course", price: "1500 Rs" },
//             { name: "Soups", price: "200 Rs" },            
//             { name: "Dessert", price: "600 Rs" },
//             { name: "Beverages", price: "MRP" },

//         ]
//     },
//     {
//         name: "Fingerlicious Food",
//         address: "456 Oak St, Mayapuri",
//         offer: "20% off on all orders",
//         image: "Screenshot 2023-11-19 at 6.34.33 PM.png",
//         menu: [
//             { name: "Appetizer", price: "400 Rs" },
//             { name: "Main Course", price: "1500 Rs" },
//             { name: "Soups", price: "200 Rs" },            
//             { name: "Dessert", price: "600 Rs" },
//             { name: "Beverages", price: "MRP" },
//         ]
//     },
//     {
//         name: "Delicious Bites",
//         address: "789 Elm St, Rohini",
//         offer: "Free appetizer with every meal",
//         image: "Screenshot 2023-11-19 at 6.34.39 PM.png",
//         menu: [
//             { name: "Appetizer", price: "400 Rs" },
//             { name: "Main Course", price: "1500 Rs" },
//             { name: "Soups", price: "200 Rs" },            
//             { name: "Dessert", price: "600 Rs" },
//             { name: "Beverages", price: "MRP" },
//         ]
//     },
//     {
//         name: "Pizza Paradise",
//         address: "101 Pine St, Khan Market",
//         offer: "Buy one pizza, get one free",
//         image: "Screenshot 2023-11-19 at 6.34.44 PM.png",
//         menu: [
//             { name: "Appetizer", price: "400 Rs" },
//             { name: "Main Course", price: "1500 Rs" },
//             { name: "Soups", price: "200 Rs" },            
//             { name: "Dessert", price: "600 Rs" },
//             { name: "Beverages", price: "MRP" },
//         ]
//     },
//     {
//         name: "Sushi Sensation",
//         address: "555 Sakura Ave, Rajouri Garden",
//         offer: "Sushi platter for 4500 Rs",
//         image: "Screenshot 2023-11-19 at 6.34.50 PM.png",
//         menu: [
//            { name: "Appetizer", price: "400 Rs" },
//             { name: "Main Course", price: "1500 Rs" },
//             { name: "Soups", price: "200 Rs" },            
//             { name: "Dessert", price: "600 Rs" },
//             { name: "Beverages", price: "MRP" },
//         ]
//     },
//     {
//         name: "Burger Bliss",
//         address: "222 Beef St, Hauz Khas",
//         offer: "Combo meal for 3000 Rs",
//         image: "Screenshot 2023-11-19 at 6.35.03 PM.png",
//         menu: [
//              { name: "Appetizer", price: "400 Rs" },
//             { name: "Main Course", price: "1500 Rs" },
//             { name: "Soups", price: "200 Rs" },            
//             { name: "Dessert", price: "600 Rs" },
//             { name: "Beverages", price: "MRP" },
//         ]
//     },
//     // Add more restaurant data as needed
// ];

// // More sample data for additional restaurants
// const moreRestaurants = [
//     {
//         name: "Cafe Delight",
//         address: "321 Oak St, Palam",
//         offer: "Free coffee with every breakfast",
//         image: "Screenshot 2023-11-19 at 6.35.16 PM.png",
//         menu: [
//             { name: "Appetizer", price: "400 Rs" },
//             { name: "Main Course", price: "1500 Rs" },
//             { name: "Soups", price: "200 Rs" },            
//             { name: "Dessert", price: "600 Rs" },
//             { name: "Beverages", price: "MRP" },
//         ]
//     },
//     {
//         name: "Taco Town",
//         address: "777 Spice St, Dwarka",
//         offer: "Taco Tuesday: 2 for 1",
//         image: "Screenshot 2023-11-19 at 6.35.27 PM.png",
//         menu: [
//              { name: "Appetizer", price: "400 Rs" },
//             { name: "Main Course", price: "1500 Rs" },
//             { name: "Soups", price: "200 Rs" },            
//             { name: "Dessert", price: "600 Rs" },
//             { name: "Beverages", price: "MRP" },
//         ]
//     },
//     {
//         name: "Food Bites",
//         address: "789 Elm St, Vasant Kunj",
//         offer: "Free appetizer with every meal",
//         image: "Screenshot 2023-11-19 at 6.34.56 PM.png",
//         menu: [
//              { name: "Appetizer", price: "400 Rs" },
//             { name: "Main Course", price: "1500 Rs" },
//             { name: "Soups", price: "200 Rs" },            
//             { name: "Dessert", price: "600 Rs" },
//             { name: "Beverages", price: "MRP" },
//         ]
//     },
//     // Add more restaurant data as needed
// ];

// // Merge the existing and additional restaurants
// const allRestaurants = [...restaurants, ...moreRestaurants];

// // Array to store confirmed bookings

// const confirmedBookings = [];





// // Function to open booking modal
// function openBookingModal(restaurantIndex) {
//     // Implement the logic to open the modal and capture user input
//     // ...

//     // After capturing user input, call the bookNow function
//     bookNow(restaurantIndex);
// }

// // Function to close booking modal
// function closeBookingModal() {
//     // Implement the logic to close the modal
//     // ...
// }

// // Call the function to display bookings on page load
// window.onload = displayBookings;

// // Sample data for the menu (replace with actual menu data)
// const menuItems = [
//     { name: "Appetizer", price: "400 Rs" },
//     { name: "Main Course", price: "1200 Rs" },
//     { name: "Dessert", price: "600 Rs" },
//     // Add more menu items as needed
// ];

// // Function to dynamically create restaurant cards
// function createRestaurantCards() {
//     const restaurantFeed = document.getElementById("restaurants-feed");

//     allRestaurants.forEach((restaurant, index) => {
//         const card = document.createElement("div");
//         card.classList.add("restaurant-card");

//         const image = document.createElement("img");
//         // Replace 'your_image_directory' with the actual directory where your images are stored
//         image.src = `images/${restaurant.image}`;
//         image.alt = `${restaurant.name} Image`;

//         const contentWrapper = document.createElement("div");
//         contentWrapper.classList.add("card-content");

//         const name = document.createElement("h2");
//         name.textContent = restaurant.name;

//         const address = document.createElement("p");
//         address.textContent = `Address: ${restaurant.address}`;

//         const offer = document.createElement("p");
//         offer.textContent = `Special Offer: ${restaurant.offer}`;

//         const buttonsWrapper = document.createElement("div");
//         buttonsWrapper.classList.add("buttons-wrapper");

//         const bookBtn = document.createElement("button");
//         bookBtn.classList.add("book-btn");
//         bookBtn.textContent = "Book Now";
//         bookBtn.addEventListener("click", () => openBookingModal(index));

//         const viewMenuBtn = document.createElement("button");
//         viewMenuBtn.classList.add("btn", "btn-outline-secondary");
//         viewMenuBtn.textContent = "View Menu";
//         viewMenuBtn.addEventListener("click", () => openMenuPage(index));

//         buttonsWrapper.appendChild(bookBtn);
//         buttonsWrapper.appendChild(viewMenuBtn);

//         contentWrapper.appendChild(name);
//         contentWrapper.appendChild(address);
//         contentWrapper.appendChild(offer);
//         contentWrapper.appendChild(buttonsWrapper);

//         card.appendChild(image);
//         card.appendChild(contentWrapper);

//         restaurantFeed.appendChild(card);
//     });
// }

// // Function to handle booking
// function bookNow(restaurantIndex) {
//     // Replace the following lines with your logic to capture user input
//     const restaurant = allRestaurants[restaurantIndex].name;
//     const date = "2023-12-01";
//     const time = "19:00";
//     const guests = 2;

//     // Create a booking object
//     const newBooking = { restaurant, date, time, guests };

//     // Add the booking to the confirmedBookings array
//     confirmedBookings.push(newBooking);

//     // Display the updated bookings
//     displayBookings();
// }


// // Function to display confirmed bookings
// function displayBookings() {
//     const bookingsList = document.getElementById("bookings-list");
//     const noBookingsMessage = document.getElementById("no-bookings-message");

//     if (confirmedBookings.length === 0) {
//         // Display the "No bookings" message
//         noBookingsMessage.style.display = "block";
//         bookingsList.innerHTML = ""; // Clear existing bookings
//     } else {
//         // Hide the "No bookings" message
//         noBookingsMessage.style.display = "none";

//         // Display the confirmed bookings
//         const bookingItems = confirmedBookings.map((booking, index) => {
//             return `<div class="booking-item" id="booking-${index}">
//                         <p>Restaurant: ${booking.restaurant}</p>
//                         <p>Date: ${booking.date}</p>
//                         <p>Time: ${booking.time}</p>
//                         <p>Guests: ${booking.guests}</p>
//                     </div>`;
//         });

//         // Append booking items to the bookingsList container
//         bookingsList.innerHTML = bookingItems.join("");
//     }
// }


// function loadMenu() {
//     const menuItemsContainer = document.getElementById("menu-items");

//     // Get the restaurant name from the query parameter
//     const urlParams = new URLSearchParams(window.location.search);
//     const restaurantName = urlParams.get("restaurant");

//     // Find the restaurant data based on the name
//     const restaurant = allRestaurants.find(r => r.name === restaurantName);

//     // Display the restaurant name in the menu heading
//     document.querySelector("#menu h2").textContent = `Menu for ${restaurant.name}`;

//     // Create and append menu items dynamically
//     restaurant.menu.forEach(item => {
//         const menuItem = document.createElement("div");
//         menuItem.classList.add("menu-item");
//         menuItem.innerHTML = `<p>${item.name}</p><p>${item.price}</p>`;
//         menuItemsContainer.appendChild(menuItem);
//     });
// }


// function openBookingModal(restaurantIndex) {
//     const modal = document.getElementById("booking-modal");
//     modal.style.display = "flex";

//     const restaurantName = document.getElementById("booking-restaurant-name");
//     restaurantName.textContent = allRestaurants[restaurantIndex].name;

//     const confirmBtn = document.getElementById("confirm-booking-btn");

//     const confirmBookingHandler = () => {
//         // Replace the following lines with your logic to capture user input
//         const restaurant = allRestaurants[restaurantIndex].name;
//         const date = document.getElementById("booking-date").value;
//         const time = document.getElementById("booking-time").value;
//         const guests = document.getElementById("booking-guests").value;

//         if (!date || !time || !guests) {
//             alert("Please fill in all fields.");
//             return;
//         }

//         // Create a booking object
//         const newBooking = { restaurant, date, time, guests };

//         // Add the booking to the confirmedBookings array
//         confirmedBookings.push(newBooking);

//         // Display the updated bookings
//         displayBookings();

//         // Clear input fields
//         document.getElementById("booking-date").value = "";
//         document.getElementById("booking-time").value = "";
//         document.getElementById("booking-guests").value = "";

//         // Focus on the date input for the next booking
//         document.getElementById("booking-date").focus();
//     };

//     // Add event listener for confirming the booking
//     confirmBtn.onclick = confirmBookingHandler;
// }

// // Function to load menu items on the menu modal
// function loadMenuItems(restaurant) {
//     const menuItemsContainer = document.getElementById("menu-items");

//     // Create and append menu items dynamically
//     restaurant.menu.forEach(item => {
//         const menuItem = document.createElement("div");
//         menuItem.classList.add("menu-item");
//         menuItem.innerHTML = `<p>${item.name}</p><p>${item.price}</p>`;
//         menuItemsContainer.appendChild(menuItem);
//     });
// }

// // Function to display modal
// function showModal(content) {
//     const modal = document.getElementById("menu-modal");
//     modal.innerHTML = content;
//     modal.style.display = "block";
// }

// // Function to close modal
// function closeModal() {
//     const modal = document.getElementById("menu-modal");
//     modal.style.display = "none";
// }
// // Function to open booking modal
// function openBookingModal(restaurantIndex) {
//     const modal = document.getElementById("booking-modal");
//     modal.style.display = "flex";

//     const restaurantName = document.getElementById("booking-restaurant-name");
//     restaurantName.textContent = allRestaurants[restaurantIndex].name;

//     const confirmBtn = document.getElementById("confirm-booking-btn");
//     confirmBtn.onclick = () => {
//         console.log("Confirm button clicked");

//         // Replace the following lines with your logic to capture user input
//         const restaurant = allRestaurants[restaurantIndex].name;
//         const date = document.getElementById("booking-date").value;
//         const time = document.getElementById("booking-time").value;
//         const guests = document.getElementById("booking-guests").value;

//         console.log("Date:", date);
//         console.log("Time:", time);
//         console.log("Guests:", guests);

//         // Validate input (you may need more robust validation)
//         if (!date || !time || !guests) {
//             alert("Please fill in all fields.");
//             return;
//         }

//         // Create a booking object
//         const newBooking = { restaurant, date, time, guests };

//         // Add the booking to the confirmedBookings array
//         confirmedBookings.push(newBooking);

//         // Display the updated bookings
//         displayBookings();

//         // Close the modal
//         closeBookingModal();
//     };
// }

// // Function to close booking modal
// function closeBookingModal() {
//     const modal = document.getElementById("booking-modal");
//     modal.style.display = "none";
// }

// // Function to open menu page for a specific restaurant
// function openMenuPage(restaurantIndex) {
//     // Get the restaurant data
//     const restaurant = allRestaurants[restaurantIndex];

//     // Redirect to the menu page with the restaurant name as a query parameter
//     window.location.href = `menu.html?restaurant=${encodeURIComponent(restaurant.name)}`;
// }

// // Function to update the confirmed bookings section
// function updateConfirmedBookings() {
//     // ... (existing code)
// }



// function createRestaurantCards() {
//     const restaurantFeed = document.getElementById("restaurants-feed");

//     allRestaurants.forEach((restaurant, index) => {
//         const card = document.createElement("div");
//         card.classList.add("restaurant-card");

//         const image = document.createElement("img");
//         image.src = `images/${restaurant.image}`;
//         image.alt = `${restaurant.name} Image`;

//         const contentWrapper = document.createElement("div");
//         contentWrapper.classList.add("card-content");

//         const name = document.createElement("h2");
//         name.textContent = restaurant.name;

//         const address = document.createElement("p");
//         address.textContent = `Address: ${restaurant.address}`;

//         const offer = document.createElement("p");
//         offer.textContent = `Special Offer: ${restaurant.offer}`;

//         const buttonsWrapper = document.createElement("div");
//         buttonsWrapper.classList.add("buttons-wrapper");

//         const bookBtn = document.createElement("button");
//         bookBtn.classList.add("book-btn");
//         bookBtn.textContent = "Book Now";
//         bookBtn.addEventListener("click", () => openBookingModal(index));

//         const viewMenuBtn = document.createElement("button");
//         viewMenuBtn.classList.add("btn", "btn-outline-secondary");
//         viewMenuBtn.textContent = "View Menu";
//         viewMenuBtn.addEventListener("click", () => openMenuModal(index)); // Open menu modal instead of menu page

//         buttonsWrapper.appendChild(bookBtn);
//         buttonsWrapper.appendChild(viewMenuBtn);

//         contentWrapper.appendChild(name);
//         contentWrapper.appendChild(address);
//         contentWrapper.appendChild(offer);
//         contentWrapper.appendChild(buttonsWrapper);

//         card.appendChild(image);
//         card.appendChild(contentWrapper);

//         restaurantFeed.appendChild(card);
//     });
// }
// // Call the function to generate restaurant cards on page load
// window.onload = createRestaurantCards;






// Sample data for restaurants
const restaurants = [
    // ... (existing data)

     {
        name: "Pizza Bucket",
        address: "123 Main St, Chanakyapuri",
        offer: "Free dessert with every order",
        image: "Screenshot 2023-11-19 at 6.34.25 PM.png",
        menu: [
            { name: "Appetizer", price: "400 Rs" },
            { name: "Main Course", price: "1500 Rs" },
            { name: "Soups", price: "200 Rs" },            
            { name: "Dessert", price: "600 Rs" },
            { name: "Beverages", price: "MRP" },

        ]
    },
    {
        name: "Fingerlicious Food",
        address: "456 Oak St, Mayapuri",
        offer: "20% off on all orders",
        image: "Screenshot 2023-11-19 at 6.34.33 PM.png",
        menu: [
            { name: "Appetizer", price: "400 Rs" },
            { name: "Main Course", price: "1500 Rs" },
            { name: "Soups", price: "200 Rs" },            
            { name: "Dessert", price: "600 Rs" },
            { name: "Beverages", price: "MRP" },
        ]
    },
    {
        name: "Delicious Bites",
        address: "789 Elm St, Rohini",
        offer: "Free appetizer with every meal",
        image: "Screenshot 2023-11-19 at 6.34.39 PM.png",
        menu: [
            { name: "Appetizer", price: "400 Rs" },
            { name: "Main Course", price: "1500 Rs" },
            { name: "Soups", price: "200 Rs" },            
            { name: "Dessert", price: "600 Rs" },
            { name: "Beverages", price: "MRP" },
        ]
    },
    {
        name: "Pizza Paradise",
        address: "101 Pine St, Khan Market",
        offer: "Buy one pizza, get one free",
        image: "Screenshot 2023-11-19 at 6.34.44 PM.png",
        menu: [
            { name: "Appetizer", price: "400 Rs" },
            { name: "Main Course", price: "1500 Rs" },
            { name: "Soups", price: "200 Rs" },            
            { name: "Dessert", price: "600 Rs" },
            { name: "Beverages", price: "MRP" },
        ]
    },
    {
        name: "Sushi Sensation",
        address: "555 Sakura Ave, Rajouri Garden",
        offer: "Sushi platter for 4500 Rs",
        image: "Screenshot 2023-11-19 at 6.34.50 PM.png",
        menu: [
           { name: "Appetizer", price: "400 Rs" },
            { name: "Main Course", price: "1500 Rs" },
            { name: "Soups", price: "200 Rs" },            
            { name: "Dessert", price: "600 Rs" },
            { name: "Beverages", price: "MRP" },
        ]
    },
    {
        name: "Burger Bliss",
        address: "222 Beef St, Hauz Khas",
        offer: "Combo meal for 3000 Rs",
        image: "Screenshot 2023-11-19 at 6.35.03 PM.png",
        menu: [
             { name: "Appetizer", price: "400 Rs" },
            { name: "Main Course", price: "1500 Rs" },
            { name: "Soups", price: "200 Rs" },            
            { name: "Dessert", price: "600 Rs" },
            { name: "Beverages", price: "MRP" },
        ]
    },
];

// More sample data for additional restaurants
const moreRestaurants = [
    // ... (additional data)

    {
        name: "Cafe Delight",
        address: "321 Oak St, Palam",
        offer: "Free coffee with every breakfast",
        image: "Screenshot 2023-11-19 at 6.35.16 PM.png",
        menu: [
            { name: "Appetizer", price: "400 Rs" },
            { name: "Main Course", price: "1500 Rs" },
            { name: "Soups", price: "200 Rs" },            
            { name: "Dessert", price: "600 Rs" },
            { name: "Beverages", price: "MRP" },
            
        ],

        // bookings: [
        //     { date: "2023-11-20", time: "18:30", guests: 2 },
        //     { date: "2023-11-25", time: "20:00", guests: 4 },
        // ],
    },
    {
        name: "Taco Town",
        address: "777 Spice St, Dwarka",
        offer: "Taco Tuesday: 2 for 1",
        image: "Screenshot 2023-11-19 at 6.35.27 PM.png",
        menu: [
             { name: "Appetizer", price: "400 Rs" },
            { name: "Main Course", price: "1500 Rs" },
            { name: "Soups", price: "200 Rs" },            
            { name: "Dessert", price: "600 Rs" },
            { name: "Beverages", price: "MRP" },
        ],
        // bookings: [
        //     { date: "2023-11-20", time: "18:30", guests: 2 },
        //     { date: "2023-11-25", time: "20:00", guests: 4 },
        // ],
    },
    {
        name: "Food Bites",
        address: "789 Elm St, Vasant Kunj",
        offer: "Free appetizer with every meal",
        image: "Screenshot 2023-11-19 at 6.34.56 PM.png",
        menu: [
             { name: "Appetizer", price: "400 Rs" },
            { name: "Main Course", price: "1500 Rs" },
            { name: "Soups", price: "200 Rs" },            
            { name: "Dessert", price: "600 Rs" },
            { name: "Beverages", price: "MRP" },
        ],
        // bookings: [
        //     { date: "2023-11-20", time: "18:30", guests: 2 },
        //     { date: "2023-11-25", time: "20:00", guests: 4 },
        // ],
    },


];

// Merge the existing and additional restaurants
const allRestaurants = [...restaurants, ...moreRestaurants];

// Array to store confirmed bookings
const confirmedBookings = [];

// Function to open menu modal
function openMenuModal(restaurantIndex) {
    const restaurant = allRestaurants[restaurantIndex];

    const content = `
        <h2>${restaurant.name} Menu</h2>
        <div id="menu-items">
            <!-- Dynamic menu items will be loaded here -->
        </div>
        <button onclick="closeModal()">Close Menu</button>
    `;

    showModal(content);
    loadMenuItems(restaurant);
}

// Function to open booking modal
function openBookingModal(restaurantIndex) {
    const bookingModal = document.getElementById("booking-modal");
    const bookingRestaurantName = document.getElementById("booking-restaurant-name");
    const confirmBookingBtn = document.getElementById("confirm-booking-btn");

    // Set the restaurant name in the modal
    bookingRestaurantName.textContent = allRestaurants[restaurantIndex].name;

    // Handle booking confirmation
    confirmBookingBtn.onclick = function () {
        const bookingDate = document.getElementById("booking-date").value;
        const bookingTime = document.getElementById("booking-time").value;
        const bookingGuests = document.getElementById("booking-guests").value;

        // Validate input
        if (!bookingDate || !bookingTime || !bookingGuests) {
            alert("Please fill in all fields.");
            return;
        }

        // Confirm booking
        confirmBooking(restaurantIndex, bookingDate, bookingTime, bookingGuests);

        // Close the booking modal
        closeBookingModal();
    };

    // Display the booking modal
    bookingModal.style.display = "block";
}






function closeBookingModal() {
    const bookingModal = document.getElementById("booking-modal");

    // Clear input values in the booking modal
    document.getElementById("booking-date").value = "";
    document.getElementById("booking-time").value = "";
    document.getElementById("booking-guests").value = "";

    // Hide the booking modal
    bookingModal.style.display = "none";
}






// Function to confirm booking
// function confirmBooking(restaurantIndex) {
//     const restaurantName = allRestaurants[restaurantIndex].name;
//     const bookingDate = document.getElementById("booking-date").value;
//     const bookingTime = document.getElementById("booking-time").value;
//     const bookingGuests = document.getElementById("booking-guests").value;

//     // Validate input (you may need more robust validation)
//     if (!bookingDate || !bookingTime || !bookingGuests) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     // Create a booking object
//     const newBooking = {
//         restaurantName,
//         date: bookingDate,
//         time: bookingTime,
//         guests: bookingGuests,
//     };

//     // Add the booking to the confirmedBookings array
//     confirmedBookings.push(newBooking);

//     // Display the updated bookings
//     displayBookings();

//     // Close the booking modal
//     closeBookingModal();
// }


function confirmBooking(restaurantIndex, date, time, guests) {
    const restaurant = allRestaurants[restaurantIndex].name;

    // Create a booking object
    const newBooking = { restaurant, date, time, guests };

    // Add the booking to the confirmedBookings array
    confirmedBookings.push(newBooking);

    // Display the updated bookings
    displayBookings();
}




// Function to display bookings
// function displayBookings() {
//     const bookingsList = document.getElementById("bookings-list");
//     bookingsList.innerHTML = ""; // Clear existing bookings

//     if (confirmedBookings.length > 0) {
//         // Display each confirmed booking
//         confirmedBookings.forEach(booking => {
//             const bookingItem = document.createElement("div");
//             bookingItem.classList.add("booking-item");

//             const bookingDetails = document.createElement("p");
//             bookingDetails.innerHTML = `<strong>${booking.restaurantName}</strong><br>
//                                        Date: ${booking.date}<br>
//                                        Time: ${booking.time}<br>
//                                        Guests: ${booking.guests}`;

//             bookingItem.appendChild(bookingDetails);
//             bookingsList.appendChild(bookingItem);
//         });
//     } else {
//         // Display a message when there are no bookings
//         const noBookingsMessage = document.createElement("p");
//         noBookingsMessage.id = "no-bookings-message";
//         noBookingsMessage.textContent = "No bookings have been made yet.";
//         bookingsList.appendChild(noBookingsMessage);
//     }
// }


function displayBookings() {
    const bookingsList = document.getElementById("bookings-list");

    // Clear existing bookings
    bookingsList.innerHTML = "";

    if (confirmedBookings.length > 0) {
        // Display each confirmed booking
        confirmedBookings.forEach(booking => {
            const bookingItem = document.createElement("div");
            bookingItem.classList.add("booking-item");

            const bookingDetails = document.createElement("p");
            bookingDetails.innerHTML = `<strong>${booking.restaurant}</strong><br>
                                       Date: ${booking.date}<br>
                                       Time: ${booking.time}<br>
                                       Guests: ${booking.guests}`;

            bookingItem.appendChild(bookingDetails);
            bookingsList.appendChild(bookingItem);
        });
    } else {
        // Display a message when there are no bookings
        const noBookingsMessage = document.createElement("p");
        noBookingsMessage.id = "no-bookings-message";
        noBookingsMessage.textContent = "No bookings have been made yet.";
        bookingsList.appendChild(noBookingsMessage);
    }
}



// Function to open menu page for a specific restaurant
function openMenuPage(restaurantIndex) {
    // Redirect to the menu page with the restaurant name as a query parameter
    const restaurantName = encodeURIComponent(allRestaurants[restaurantIndex].name);
    window.location.href = `menu.html?restaurant=${restaurantName}`;
}

// Function to display modal
function showModal(content) {
    const modal = document.getElementById("modal");
    modal.innerHTML = content;
    modal.style.display = "flex";
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Function to dynamically add confirmed bookings
function addConfirmedBooking(bookingDetails) {
    const bookingsList = document.getElementById('bookings-list');
    const noBookingsMessage = document.getElementById('no-bookings-message');

    // Remove the "No bookings" message if present
    noBookingsMessage.style.display = 'none';

    // Create a new booking item
    const bookingItem = document.createElement('div');
    bookingItem.classList.add('booking-item');

    // Display booking details in the item
    bookingItem.textContent = `Booking for ${bookingDetails.restaurant} on ${bookingDetails.date} at ${bookingDetails.time} for ${bookingDetails.guests} guests.`;

    // Add the booking item to the list
    bookingsList.appendChild(bookingItem);
}

function updateConfirmedBookings() {
    const bookingsList = document.getElementById("bookings-list");

    // Clear existing bookings
    bookingsList.innerHTML = "";

    if (confirmedBookings.length > 0) {
        // Display each confirmed booking
        confirmedBookings.forEach(booking => {
            const bookingItem = document.createElement("div");
            bookingItem.classList.add("booking-item");

            const bookingDetails = document.createElement("p");
            bookingDetails.innerHTML = `<strong>${booking.restaurantName}</strong><br>
                                       Date: ${booking.date}<br>
                                       Time: ${booking.time}<br>
                                       Guests: ${booking.guests}`;

            bookingItem.appendChild(bookingDetails);
            bookingsList.appendChild(bookingItem);
        });
    } else {
        // Display a message when there are no bookings
        const noBookingsMessage = document.createElement("p");
        noBookingsMessage.id = "no-bookings-message";
        noBookingsMessage.textContent = "No bookings have been made yet.";
        bookingsList.appendChild(noBookingsMessage);
    }
}

window.onload = updateConfirmedBookings;

// Function to open the menu modal
function openMenuModal(restaurantIndex) {
    const menuModal = document.getElementById("menu-modal");
    const menuContent = document.getElementById("menu-content");

    // Clear previous menu items
    menuContent.innerHTML = "";

    // Sample data for the menu (replace with actual menu data)
    const menuItems = [
        { name: "Appetizer", price: "400 Rs" },
            { name: "Main Course", price: "1500 Rs" },
            { name: "Soups", price: "200 Rs" },            
            { name: "Dessert", price: "600 Rs" },
            { name: "Beverages", price: "MRP" },
        // Add more menu items as needed
    ];

    // Function to dynamically create menu items
    function createMenuItems() {
        menuItems.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            const itemName = document.createElement("span");
            itemName.textContent = item.name;

            const itemPrice = document.createElement("span");
            itemPrice.textContent = item.price;

            menuItem.appendChild(itemName);
            menuItem.appendChild(itemPrice);

            menuContent.appendChild(menuItem);
        });
    }

    // Call the function to generate menu items on page load
    createMenuItems();

    // Display the menu modal
    menuModal.style.display = "flex";
}

// Function to close the menu modal
function closeMenuModal() {
    const menuModal = document.getElementById("menu-modal");

    // Hide the menu modal
    menuModal.style.display = "none";
}


// Function to dynamically create restaurant cards
function createRestaurantCards() {
    const restaurantFeed = document.getElementById("restaurants-feed");

    allRestaurants.forEach((restaurant, index) => {
        const card = document.createElement("div");
        card.classList.add("restaurant-card");

        const image = document.createElement("img");
        image.src = `images/${restaurant.image}`;
        image.alt = `${restaurant.name} Image`;

        const contentWrapper = document.createElement("div");
        contentWrapper.classList.add("card-content");

        const name = document.createElement("h2");
        name.textContent = restaurant.name;

        const address = document.createElement("p");
        address.textContent = `Address: ${restaurant.address}`;

        const offer = document.createElement("p");
        offer.textContent = `Special Offer: ${restaurant.offer}`;

        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.classList.add("buttons-wrapper");

        const bookBtn = document.createElement("button");
        bookBtn.classList.add("book-btn");
        bookBtn.textContent = "Book Now";

        // Add event listener for the "Book Now" button
        bookBtn.addEventListener("click", function () {
            openBookingModal(index);
        });

        const viewMenuBtn = document.createElement("button");
        viewMenuBtn.classList.add("btn", "btn-outline-secondary");
        viewMenuBtn.textContent = "View Menu";

        // Add event listener for the "View Menu" button
        viewMenuBtn.addEventListener("click", function () {
            openMenuModal(index);
        });

        buttonsWrapper.appendChild(bookBtn);
        buttonsWrapper.appendChild(viewMenuBtn);

        contentWrapper.appendChild(name);
        contentWrapper.appendChild(address);
        contentWrapper.appendChild(offer);
        contentWrapper.appendChild(buttonsWrapper);

        card.appendChild(image);
        card.appendChild(contentWrapper);

        restaurantFeed.appendChild(card);
    });
}

// Call the function to generate restaurant cards on page load
window.onload = function () {
    createRestaurantCards();

    // Additional code for handling confirmed bookings
    updateConfirmedBookings();
};






// Call the function to generate restaurant cards on page load
window.onload = createRestaurantCards;
