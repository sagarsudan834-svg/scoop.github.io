document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Data Structure (Use the detailed data from the previous step)
    const menuData = {
        shakes: [
            { name: "Alphanso Mango", prices: { S: 70, M: 85, L: 100 }, imageUrl: "https://source.unsplash.com/random/100x100/?mango-shake" },
            { name: "Banana Delight", prices: { S: 60, M: 75, L: 90 }, imageUrl: "https://source.unsplash.com/random/100x100/?banana-shake" },
            { name: "Pineapple Smoothie", prices: { S: 60, M: 75, L: 90 }, imageUrl: "https://source.unsplash.com/random/100x100/?pineapple-smoothie" },
            { name: "Golden Butterscotch", prices: { S: 80, M: 100, L: 120 }, imageUrl: "https://source.unsplash.com/random/100x100/?butterscotch-shake" },
            { name: "Fruit Punch", prices: { S: 60, M: 75, L: 90 }, imageUrl: "https://source.unsplash.com/random/100x100/?fruit-punch-drink" },
            { name: "Silky Vanilla", prices: { S: 60, M: 75, L: 90 }, imageUrl: "https://source.unsplash.com/random/100x100/?vanilla-shake" },
            { name: "Rich Hot Chocolate", prices: { S: 70, M: 85, L: 100 }, imageUrl: "https://source.unsplash.com/random/100x100/?hot-chocolate" },
            { name: "Papaya Bliss", prices: { S: 60, M: 70, L: 80 }, imageUrl: "https://source.unsplash.com/random/100x100/?papaya-shake" },
            { name: "Exotic Mix Fruit", prices: { S: 60, M: 70, L: 80 }, imageUrl: "https://source.unsplash.com/random/100x100/?mix-fruit-shake" },
            { name: "Very Berry Strawberry", prices: { S: 80, M: 100, L: 120 }, imageUrl: "https://source.unsplash.com/random/100x100/?strawberry-shake" },
            { name: "Coffee Chill", prices: { S: 70, M: 100, L: 120 }, imageUrl: "https://source.unsplash.com/random/100x100/?coffee-shake" },
            { name: "Rasmalai Fizz", prices: { S: 80, M: 100, L: 120 }, imageUrl: "https://source.unsplash.com/random/100x100/?rasmalai-drink" },
            { name: "Cotton Candy", prices: { S: 120, M: 150, L: 180 }, imageUrl: "https://source.unsplash.com/random/100x100/?cotton-candy-drink" },
            { name: "Berry Bubble", prices: { S: 70, M: 90, L: 100 }, imageUrl: "https://source.unsplash.com/random/100x100/?berry-bubble-drink" },
            { name: "Kitkat Crunch", prices: { S: 60, M: 70, L: 80 }, imageUrl: "https://source.unsplash.com/random/100x100/?kitkat-shake" },
            { name: "Black Current", prices: { S: 80, M: 100, L: 120 }, imageUrl: "https://source.unsplash.com/random/100x100/?black-current-shake" },
            { name: "Cookie 'N' Cream", prices: { S: 80, M: 100, L: 120 }, imageUrl: "https://source.unsplash.com/random/100x100/?cookie-cream-shake" },
            { name: "Oreo Creamy", prices: { S: 80, M: 100, L: 120 }, imageUrl: "https://source.unsplash.com/random/100x100/?oreo-shake" },
            { name: "Kiwi Cooler", prices: { S: 120, M: 150, L: 180 }, imageUrl: "https://source.unsplash.com/random/100x100/?kiwi-drink" }
        ],
        luxury: [
            { name: "Gabba Gab", price: 150, imageUrl: "https://source.unsplash.com/random/100x100/?gabba-dessert" },
            { name: "Lady in Red", price: 180, imageUrl: "https://source.unsplash.com/random/100x100/?red-dessert" },
            { name: "Valentine Special", price: 200, imageUrl: "https://source.unsplash.com/random/100x100/?valentine-dessert" },
            { name: "Honeymoon Special", price: 220, imageUrl: "https://source.unsplash.com/random/100x100/?honeymoon-dessert" },
            { name: "Ferrero Rochester", price: 250, imageUrl: "https://source.unsplash.com/random/100x100/?ferrerorocher-icecream" },
            { name: "Mango Cheese", price: 200, imageUrl: "https://source.unsplash.com/random/100x100/?mango-cheese-cake" },
            { name: "Bubble Gum", price: 220, imageUrl: "https://source.unsplash.com/random/100x100/?bubblegum-icecream" },
            { name: "Dutch Brownie", price: 250, imageUrl: "https://source.unsplash.com/random/100x100/?dutch-brownie" },
            { name: "Lotus Glento", price: 250, imageUrl: "https://source.unsplash.com/random/100x100/?lotus-dessert" },
            { name: "Zordan Paan", price: 320, imageUrl: "https://source.unsplash.com/random/100x100/?paan-icecream" },
            { name: "Gold Chocolate Divine", price: 240, imageUrl: "https://source.unsplash.com/random/100x100/?gold-chocolate-dessert" },
            { name: "Frozen Yogurt", price: 280, imageUrl: "https://source.unsplash.com/random/100x100/?frozen-yogurt" },
            { name: "Italian Tiramisu", price: 240, imageUrl: "https://source.unsplash.com/random/100x100/?tiramisu-icecream" },
            { name: "Chocolates", price: "ON MRP", imageUrl: "https://source.unsplash.com/random/100x100/?chocolates" }
        ],
        beverages: [
            { name: "Jal Jeera", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?jaljeera" },
            { name: "Lime Lemon Zisty", price: 50, imageUrl: "https://source.unsplash.com/random/100x100/?lime-lemon-drink" },
            { name: "Masala Soda", price: 60, imageUrl: "https://source.unsplash.com/random/100x100/?masala-soda" },
            { name: "Mocktail", price: 60, imageUrl: "https://source.unsplash.com/random/100x100/?mocktail" },
            { name: "Red Rose", price: 70, imageUrl: "https://source.unsplash.com/random/100x100/?red-rose-drink" },
            { name: "Blue Current", price: 70, imageUrl: "https://source.unsplash.com/random/100x100/?blue-drink" },
            { name: "Shahi Badam", price: 60, imageUrl: "https://source.unsplash.com/random/100x100/?badam-milk" },
            { name: "Milk Shake (Generic)", price: 50, imageUrl: "https://source.unsplash.com/random/100x100/?milk-shake-plain" },
            { name: "Lassi (Generic)", price: 50, imageUrl: "https://source.unsplash.com/random/100x100/?lassi-plain" },
            { name: "Kesar Lassi", price: 80, imageUrl: "https://source.unsplash.com/random/100x100/?kesar-lassi" },
            { name: "Scoop Doop Spl. Lassi", price: 100, imageUrl: "https://source.unsplash.com/random/100x100/?special-lassi" },
            { name: "Cold Coffee", price: 80, imageUrl: "https://source.unsplash.com/random/100x100/?cold-coffee" },
            { name: "Water Bottle", price: "ON MRP", imageUrl: "https://source.unsplash.com/random/100x100/?water-bottle" },
            { name: "Cold Drinks", price: "ON MRP", imageUrl: "https://source.unsplash.com/random/100x100/?cold-drinks" },
            { name: "Energy Drinks", price: "ON MRP", imageUrl: "https://source.unsplash.com/random/100x100/?energy-drink" },
            { name: "Coconut Water", price: "ON MRP", imageUrl: "https://source.unsplash.com/random/100x100/?coconut-water" },
            { name: "Tonic Water", price: "ON MRP", imageUrl: "https://source.unsplash.com/random/100x100/?tonic-water" }
        ],
        juices: [
            { name: "Mango Shake", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?mango-juice" },
            { name: "Pineapple Refresher", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?pineapple-juice" },
            { name: "Banana Treat", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?banana-juice" },
            { name: "Strawberry Fusion", price: 50, imageUrl: "https://source.unsplash.com/random/100x100/?strawberry-juice" },
            { name: "Mix Fruit Cream", price: 100, imageUrl: "https://source.unsplash.com/random/100x100/?mix-fruit-cream" },
            { name: "Vanilla", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?vanilla-icecream" },
            { name: "Strawberry", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?strawberry-icecream" },
            { name: "Mango", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?mango-icecream" },
            { name: "Butterscotch", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?butterscotch-icecream" },
            { name: "Pista", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?pista-icecream" },
            { name: "Kaju Draksh", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?kaju-draksh-icecream" },
            { name: "Chocolate", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?chocolate-icecream" },
            { name: "Coffee", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?coffee-icecream" },
            { name: "Kesar Badam", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?kesar-badam-icecream" },
            { name: "Black Current", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?black-current-icecream" },
            { name: "Red Velvet", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?red-velvet-icecream" },
            { name: "Gud Bud", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?gudbud-icecream" },
            { name: "Choco Magic", price: 40, imageUrl: "https://source.unsplash.com/random/100x100/?choco-magic-icecream" },
            { name: "Scoop", price: 30, imageUrl: "https://source.unsplash.com/random/100x100/?icecream-scoop" }
        ]
    };

    // Function to render menu items (Unchanged)
    function renderMenu(category) {
        const listElement = document.getElementById(`${category}-list`);
        if (!listElement) return;

        let html = '';
        const items = menuData[category];

        items.forEach(item => {
            const itemImage = item.imageUrl || `https://source.unsplash.com/random/100x100/?food,dessert`;

            html += `<div class="menu-item">
                        <div class="menu-item-details">
                            <img src="${itemImage}" alt="${item.name}" class="menu-item-image">
                            <span class="item-name">${item.name}</span>
                        </div>
                        <span class="item-price">`;
            
            if (item.prices) {
                html += `S: ₹${item.prices.S} | M: ₹${item.prices.M} | L: ₹${item.prices.L}`;
            } else {
                html += `₹${item.price}`;
            }
            
            html += `</span></div>`;
        });
        
        listElement.innerHTML = html;
    }

    // Initial render for all categories
    renderMenu('shakes');
    renderMenu('luxury');
    renderMenu('beverages');
    renderMenu('juices');

    // 2. Tab Switching Logic (Unchanged)
    const tabs = document.querySelectorAll('.menu-tab');
    const contents = document.querySelectorAll('.menu-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(category).classList.add('active');
        });
    });

    // 3. Mobile Navigation Toggle (NEW FUNCTIONALITY)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked (on mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 4. Smooth Scrolling (Updated to use JS for robust scroll)
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});