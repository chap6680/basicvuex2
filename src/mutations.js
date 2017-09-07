export default {

//	[ADD_PRODUCT_TO_CART](state, payload)
	addProductMutation(product, quantity) {
		let cartItem = null;
		for (var i = 0; i < state.cart.items.length; i++) {
			if (state.cart.items[i].product.id === payload.product.id) {
				cartItem = state.cart.items[i];
			}
		 }
	//			cartItem = state.getCartItem(payload.product);

		
		
		if (payload.cartItem != null) {
			payload.cartItem.quantity += payload.quantity;
		} else { 
			state.cart.items.push({
				product: payload.product,
				quantity: payload.quantity
			});
		}
		payload.product.inStock -= payload.quantity;


		/* 		const updatecart = {
			product: payload.product,
			quantity: payload.quantity
		};
		state.cart.items.push(updatecart);
		payload.product.inStock-= payload.quantity; */
	},
/* 	[ADD_PRODUCT_TO_CART2] (state, payload) {
		state.cart.items.push({
			product: payload.product,
			quantity: payload.quantity
		});
		payload.product.inStock -= payload.quantity;
	 },
 */
	[CHECKOUT] (state) { 
		state.cart.items.forEach(function(item) {
			item.product.inStock += item.quantity;
		}),
			state.cart.items = [];
	}
/* 	increaseQuantityM (state) {
		state.cart.items.quantity++;
	 }*/
/* 	[INCREASE_PRODUCT_QUANTITY] (state, payload) { 
		payload.cartItem += payload.quantity;
		payoad.product.inStock -= payload.quantity;	
	} */
}