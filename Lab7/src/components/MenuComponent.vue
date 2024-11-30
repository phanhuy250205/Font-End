<script setup>
defineProps({
  cartCount: Number, // Nhận props từ cha
});
</script>
<template>
         <header class="py-3 border-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col">
                        <h1 class="h5 mb-0">SkinnyGlow</h1>
                    </div>
                    <div class="col-auto">
                        <nav class="nav">
                            <a class="nav-link text-dark" href="#">About Us</a>
                            <a class="nav-link text-dark" href="#">Product</a>
                            <a class="nav-link text-dark" href="#">FAQ</a>
                        </nav>
                    </div>
                    <div class="col-auto">
                        <div class="d-flex align-items-center gap-3">
                            <a href="#" class="text-dark"><i class="fa-solid fa-magnifying-glass"></i></a>
                            <div class="position-relative">
                                <a href="#" class="text-dark"><i class="fa-solid fa-cart-shopping"></i></a>
                                <span class="badge bg-warning rounded-pill cart-badge">{{ cartCount }}</span>
                            </div>
                            <a href="#" class="text-dark"><i class="fa-regular fa-user"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>