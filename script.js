document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.querySelectorAll('.apply-btn, .apply-btn-white');
    const productCards = document.querySelectorAll('.product-card, .product-card-white');
    
    applyButtons.forEach(button => {
        const productId = button.getAttribute('data-product');
        const configKey = 'product' + productId;
        
        if (productConfig && productConfig[configKey]) {
            button.setAttribute('href', productConfig[configKey]);
        }
        
        button.addEventListener('click', function(e) {
            localStorage.setItem('lastClicked', productId);
        });
    });
    
    if (document.referrer.includes('pxl.leads.su')) {
        const lastClicked = localStorage.getItem('lastClicked');
        if (lastClicked) {
            localStorage.removeItem('lastClicked');
            if (performance && performance.navigation.type !== 1) {
                window.location.reload(true);
            }
        }
    }
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}); 