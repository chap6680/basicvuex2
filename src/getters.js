export default {
	cartTotal: (state) => {
		let total = 0;
		state.cart.items.forEach(function (item) {
			total += item.product.price * item.quantity;
		});
		return total;
	},
	taxAmount: (state, getters) => {
		let gettax = 0;
		gettax = getters.cartTotal * .08;
		return gettax
	},
	cart: (state) => {
		return state.cart
	},
	getCartItem: (state) => (product) => {
		for (let i = 0; i < state.cart.items.length; i++) {
			if (state.cart.items[i].product.id === product.id) {
				return state.cart.items[i];
			}
		}
		return null;
	}	
}