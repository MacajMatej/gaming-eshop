<script setup>
    import { RouterLink } from 'vue-router' 
</script>

<template>
    <div class="store-view">
        <div class="games-banner">
            <RouterLink to="/store/games"><h1> Browse Games </h1></RouterLink>
        </div>
        <div class="products-banner">
            <RouterLink to="/store/products"><h1> Browse Products & Merchadise </h1></RouterLink>
        </div>
    </div>
</template>