<script setup>
import { ref, computed } from 'vue';

// Props: nhận dữ liệu từ cha
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

// Emit sự kiện để gửi về cha
const emit = defineEmits(['updateProduct', 'removeProduct']);

// Hàm giảm số lượng
const decrementCount = (product) => {
  if (product.count > 1) {
    product.count--;
    emit('updateProduct', product);
  }
};

// Hàm tăng số lượng
const incrementCount = (product) => {
  product.count++;
  emit('updateProduct', product);
};

// Hàm xóa sản phẩm
const removeProduct = (index) => {
  emit('removeProduct', index);
};
</script>

<template>
  <div class="product-list">
    <!-- Danh sách sản phẩm -->
    <div
      v-for="(product, index) in products"
      :key="index"
      class="product-item d-flex gap-3 mb-4 align-items-start flex-wrap"
    >
      <!-- Checkbox -->
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          :id="'product-' + index"
          v-model="product.isSelected" 
        />
      </div>

      <!-- Hình ảnh sản phẩm -->
      <img
        :src="product.hinhAnh"
        :alt="product.ten"
        class="product-img bg-light rounded"
      />

      <!-- Thông tin sản phẩm -->
      <div class="flex-grow-1">
        <h3 class="h6 text-wrap">{{ product.ten }}</h3>
        <p class="text-muted small mb-2 text-wrap">{{ product.theloai }}</p>
        <p class="small mb-2 text-wrap">{{ product.mota }}</p>
        <p class="small text-muted mb-2 text-wrap">{{ product.size }}</p>

        <!-- Giá và số lượng -->
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-bold">{{ product.Giagoc }}</span>

          <div class="d-flex gap-2 align-items-center">
            <button
              @click="removeProduct(index)"
              class="btn btn-sm btn-outline-secondary"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="decrementCount(product)"
              :disabled="product.count <= 1"
            >
              -
            </button>
            <span class="small">{{ product.count }}</span>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="incrementCount(product)"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-img {
  width: 132px;
  height: 146px;
  object-fit: cover;
}
</style>
