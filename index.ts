class Product {
    constructor(public name: string, public price: number) {}
}

class ShoppingCart {
    private items: Product[] = [];

    addToCart(product: Product) {
        this.items.push(product);
        console.log(`${product.name} foi adicionado ao carrinho.`);
    }

    getCartItems(): Product[] {
        return this.items;
    }

    getTotal(): number {
        return this.items.reduce((total, product) => total + product.price, 0);
    }
}

const shoppingCart = new ShoppingCart();

document.getElementById('add-to-cart-button')?.addEventListener('click', () => {
    const product = new Product('Waffle with Berries', 6.50);
    shoppingCart.addToCart(product);
    updateCartDisplay();
});

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';

        shoppingCart.getCartItems().forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            cartItemsContainer.appendChild(li);
        });

        document.getElementById('total-amount')!.textContent = shoppingCart.getTotal().toFixed(2);
    }
}

document.getElementById('checkout-button')?.addEventListener('click', () => {
    document.getElementById('order-confirmed-modal')!.style.display = 'block';
});

function closeModal() {
    document.getElementById('order-confirmed-modal')!.style.display = 'none';
}
