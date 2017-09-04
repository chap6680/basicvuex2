export default {

	addProductToCartM(state, payload) {
		/* let cartItem = state.payload.products;
		console.log(cartItem); 
		const findProduct = state.product.find(productID => {
			product.id = productID
		});
		findProduct.registered = true;
		*/
		const updatecart = {
			product: payload.product,
			quantity: payload.quantity
		};
		state.cart.items.push(updatecart);
		payload.product.inStock-= payload.quantity;
	},
	checkout () { 
		if (confirm('Are you sure you want to purchase these products?')) { 
			this.$store.commit('checkout')
		}
	}
}