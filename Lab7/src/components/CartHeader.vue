<script setup>
defineProps({
  cartCount: Number, // Nhận props từ cha
});
</script>

<template>
    <div class="container mt-4">
      <div class="d-flex justify-content-between align-items-center border rounded p-3">
        <!-- My Cart Section -->
        <div class="d-flex align-items-center">
            
          <input class="form-check-input" type="checkbox" :id="'product-' "> 
          <h5 class="mb-0 me-3">My Cart</h5>
          <span class="badge bg-light text-dark border">{{ cartCount }}</span>
        </div>
  
        <!-- Dropdown Section -->
        <div class="d-flex">
          <!-- All Cart Dropdown -->
          <div class="dropdown me-2">
            <button class="btn btn-light dropdown-toggle" type="button" id="allCartDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              All Cart
            </button>
            <ul class="dropdown-menu" aria-labelledby="allCartDropdown">
              <li><a class="dropdown-item" href="#">All Cart</a></li>
              <li><a class="dropdown-item" href="#">Wishlist</a></li>
              <li><a class="dropdown-item" href="#">Saved for Later</a></li>
            </ul>
          </div>
  
          <!-- Filter Dropdown -->
          <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Filter
            </button>
            <ul class="dropdown-menu" aria-labelledby="filterDropdown"> 
              <li><a class="dropdown-item" href="#">Price Low to High</a></li>
              <li><a class="dropdown-item" href="#">Price High to Low</a></li>
              <li><a class="dropdown-item" href="#">Newest First</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>