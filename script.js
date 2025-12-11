document.addEventListener('DOMContentLoaded', () => {
    // Initialize description as collapsed
    const description = document.getElementById('heroDescription');
    const readMoreBtn = document.getElementById('readMoreBtn');

    if (description && readMoreBtn) {
        description.classList.add('collapsed');
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                navbar.style.height = '70px';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                navbar.style.height = '80px';
            }
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Date Input Focus Effect
    const dateInputs = document.querySelectorAll('input[placeholder*="Tarih"]');
    dateInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.type = 'date';
        });
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.type = 'text';
            }
        });
    });
});

// Toggle Content Function (called from button onclick)
function toggleContent() {
    const description = document.getElementById('heroDescription');
    const readMoreBtn = document.getElementById('readMoreBtn');

    if (description.classList.contains('collapsed')) {
        description.classList.remove('collapsed');
        description.classList.add('expanded');
        readMoreBtn.textContent = 'Daha Az Göster -';
    } else {
        description.classList.remove('expanded');
        description.classList.add('collapsed');
        readMoreBtn.textContent = 'Daha Fazla Oku +';
    }
}

// Slider functionality for Cheapest International Tours
function scrollSlider(direction) {
    // Find the slider that was clicked by looking for the active element's parent
    const clickedButton = event.target;
    const sliderContainer = clickedButton.closest('.cheapest-tours-slider-container');
    const slider = sliderContainer.querySelector('.cheapest-tours-slider');
    const scrollAmount = 320; // Card width + gap

    if (direction === 'left') {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Tab switching functionality for Special Occasions
function switchTab(event, tabId) {
    // Find the tabs container that the clicked button belongs to
    const tabsContainer = event.target.closest('.tabs-container');

    if (!tabsContainer) return;

    // Remove active class from all tabs and tab contents within this container only
    const tabButtons = tabsContainer.querySelectorAll('.tab-btn');
    const tabContents = tabsContainer.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Map Pin Hover Effect
document.addEventListener('DOMContentLoaded', () => {
    const mapPins = document.querySelectorAll('.map-pin');

    mapPins.forEach(pin => {
        const tooltip = pin.querySelector('.pin-tooltip');

        pin.addEventListener('mouseenter', () => {
            if (tooltip) {
                tooltip.style.opacity = '1';
            }
        });

        pin.addEventListener('mouseleave', () => {
            if (tooltip) {
                tooltip.style.opacity = '0';
            }
        });
    });
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.accordion-item').forEach(accItem => {
                accItem.classList.remove('active');
                accItem.querySelector('.accordion-content').style.maxHeight = null;
            });

            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

// Tab switching for Daha Fazla Tur Destinasyonu
function switchDestinationTab(event, tabId) {
    // Find the tabs container that the clicked button belongs to
    const tabsContainer = event.target.closest('.destination-tabs-container');

    if (!tabsContainer) return;

    // Remove active class from all tabs and tab contents within this container
    const tabButtons = tabsContainer.querySelectorAll('.destination-tab-btn');
    const tabContents = tabsContainer.querySelectorAll('.destination-tab-content');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function switchCampaignTab(tabId) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.campaign-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button (event target handling needed if passed as arg, but here we simplify)
    // Actually, let's find the button that calls this function. 
    // Since we pass ID, we can find the button by iterating or passing 'this' in HTML.
    // Let's update the HTML to pass 'event' as well.
}

// Better implementation with event
function switchCampaignTab(event, tabId) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.campaign-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Remove active class from all contents
    const contents = document.querySelectorAll('.campaign-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button
    event.currentTarget.classList.add('active');
    
    // Show content
    document.getElementById(tabId).classList.add('active');
}

function scrollCampaignSlider(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const scrollAmount = 300; // Adjust as needed
    
    if (direction === 'left') {
        slider.scrollLeft -= scrollAmount;
    } else {
        slider.scrollLeft += scrollAmount;
    }
}
