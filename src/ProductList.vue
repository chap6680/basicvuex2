<template>
    <div id="products" class="row list-group">
        <div v-for="product in products" class="item col-xs-4">
            <div class="thumbnail">
                <router-link
                        :to="{ name: 'viewProduct', params: { productId: product.id } }"
                        tag="img"
                        class="group inner list-group-item-heading"
                        src="http://placehold.it/400x250/000/fff">

                </router-link>

                <div class="caption">
                    <router-link
                            :to="{ name: 'viewProduct', params: { productId: product.id } }"
                            tag="h4"
                            class="group inner list-group-item-heading">
                        <a>{{ product.name }}</a>
                    </router-link>

                    <p class="group inner list-group-item-text">{{ product.description }}</p>
                    <br>

                    <div class="row flex flex-row align-center">
                        <div class="col-xs-4">
                            <p class="lead">{{ product.price | currency }}</p>
                        </div>

                        <div class="col-xs-8 flex flex-row align-center justify-right">
                            <div class="number-in-stock" :class="{ few: product.inStock < 10 && product.inStock > 0, none: product.inStock == 0 }">
                                {{ product.inStock }} in stock
                            </div>
                            <button class="btn btn-success" @click="addProductMutation(product, 1)" :disabled="product.inStock == 0">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
//import { ADD_PRODUCT_TO_CART} from './mutations.js'
 
    export default {
        data () {
			return {
			}
		},
		computed: {
			products() {
				return this.$store.state.products;
			},
			...mapGetters({
				cartTotal: 'cartTotal',
				cart: 'cart'
			}),
		},
        created() {
     /*        this.$http.get('products')
                .then(
                    response => {
                        return response.json();
                    },
                    response => {
                        alert("Could not fetch products!");
                    }
                )
                .then(products => {
                    this.products = products;
                });
 */
        },
        methods: {
           /*  addProductToCart(product, quantity) {
				console.log(product);
				let cartItem = this.getCartItem(product);
				if (cartItem != null) {
					cartItem.quantity += quantity;
				} else {
					this.cart.items.push({
						product: product,
						quantity: quantity 
					});	
				}	
			product.inStock -= quantity;
			this.cartTotal += product.price * quantity;
			getCartItem: function(product) {
				for (var i = 0; i < this.cart.items.length; i++) {
					if (this.cart.items[i].product.id === product.id) {
						return this.cart.items[i];
					}
            	}
            return null;
        	}
			}, */
			//	[ADD_PRODUCT_TO_CART](product, quantity)
			
			addProductMutation(product, quantity) {
				console.log("product: " + product.name);
				this.$store.commit('addProductToCartM', {
					product: product,
					quantity: quantity
				});
			},
	        
		}
    }
</script>

<style>
    #products .item img { background-color: #000; cursor: pointer; }
    #products .item p.lead { margin-bottom: 0; }
    #products .item .number-in-stock { margin-right: 10px; }
    #products .item .number-in-stock.few { color: #E0A14F; }
    #products .item .number-in-stock.none { color: #C45E5E; }
</style>