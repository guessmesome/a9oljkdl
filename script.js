document.addEventListener('DOMContentLoaded', function() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    const products = document.querySelectorAll('.product');
    
    // Handle button clicks
    applyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove preventDefault to allow normal link navigation
            const productId = this.getAttribute('data-product');
            localStorage.setItem('lastClicked', productId);
        });
    });
    
    // Check if returning from external link
    if (document.referrer.includes('pxl.leads.su')) {
        const lastClicked = localStorage.getItem('lastClicked');
        if (lastClicked) {
            // Force refresh the page to ensure proper loading
            localStorage.removeItem('lastClicked');
            if (performance && performance.navigation.type !== 1) {
                window.location.reload(true);
            }
        }
    }
    
    // Product hover animation
    products.forEach(product => {
        product.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.15)';
        });
        
        product.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}); 