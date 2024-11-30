<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  tax: {
    type: String,
    required: true,
  },
});

const selectedDiscount = ref("");

// Selected products
const selectedProducts = computed(() =>
  props.products.filter((product) => product.isSelected)
);

// Total before tax and discounts
const computedTotal = computed(() => {
  return selectedProducts.value.reduce((sum, product) => {
    const price = parseFloat(product.Giagoc) || 0;
    const quantity = parseInt(product.count, 10) || 0;
    return sum + price * quantity;
  }, 0).toFixed(2);
});

// Total after applying discounts
const totalAfterDiscount = computed(() => {
  let total = parseFloat(computedTotal.value);
  switch (selectedDiscount.value) {
    case "1": // Free Ship
      break; // No change in amount
    case "2": // 25% Discount
      total *= 0.75;
      break;
    case "3": // 50% Discount
      total *= 0.5;
      break;
    default:
      break;
  }
  return total.toFixed(2);
});

// Final total including tax
const finalTotalWithTax = computed(() => {
  const taxAmount = parseFloat(props.tax) || 0;
  const totalWithTax = parseFloat(totalAfterDiscount.value) + taxAmount;
  return totalWithTax.toFixed(2);
});
</script>



<template>
  <div class="row g-4 mb-5">
    <div class="col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Order Summary</h5>

          <!-- Order Items -->
          <div class="mb-4">
            <div
              v-for="(product, index) in selectedProducts"
              :key="index"
              class="d-flex justify-content-between mb-2"
            >
              <span class="text-muted">{{ product.ten }} x{{ product.count }}</span>
              <span>{{ (parseFloat(product.Giagoc) * product.count).toFixed(2) }}</span>
            </div>
          </div>

          <!-- Total -->
          <div class="border-top pt-3">
            <div class="d-flex justify-content-between mb-2">
              <span>Amount</span>
              <span>{{ computedTotal }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span>Tax</span>
              <span>{{ tax }}</span>
            </div>

            <!-- Discount Dropdown -->
            <div class="mb-3">
              <label for="discount" class="form-label">Select Discount</label>
              <select
                v-model="selectedDiscount"
                class="form-select"
                aria-label="Discount selection"
                id="discount"
              >
                <option value="">No Discount</option>
                <option value="1">Free Ship</option>
                <option value="2">25% Discount</option>
                <option value="3">50% Discount</option>
              </select>
            </div>

            <!-- Final Total -->
            <div class="d-flex justify-content-between mb-4">
              <strong>Total</strong>
              <strong class="text-primary">{{ finalTotalWithTax }}</strong>
            </div>
          </div>

          <!-- Checkout Button -->
          <button
            class="btn btn-warning w-100"
            :disabled="selectedProducts.length === 0"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card {
  width: 430px;
}

span {
  font-size: 0.8rem;
}

p {
  font-size: 0.8rem;
}
</style>