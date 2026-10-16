<script setup>
import data from "../data/products.json";
</script>

<template>
    <div class="center">
        <div class="products">
            <div class="product-card" v-for="game in data.games" :key="game.id">
                <img :src="game.imgUrl">
                <label>{{ game.name }}</label>
                <div class="price-rating"> 
                    <label class="product-price">{{ game.price }} €</label>
                    <div class="stars" :title="'Rating ('+game.rating+')'">
                        <p class="product-rating" v-for="x in Math.floor(game.rating)" :key="'full_star'+game.id"><svg fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></p>
                        <p v-if="game.rating % 1 > 0.5"><svg fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-half-full</title><path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg></p>
                        <p v-for="x in (5-Math.floor(game.rating)-(game.rating%1>0.5 ? 1 : 0 ))" :key="'empty_star'+game.id"><svg fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg></p>
                    </div>
                </div>
                <button>Buy now<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" /></svg></button>
                <!---->
            </div>
        </div>
    </div>
</template>