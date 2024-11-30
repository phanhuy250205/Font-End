<template>
  <div>
    <MenuComponent :cartCount="cartCount"/>
    <main class="container py-4">
      <CartHeader :cartCount="cartCount" />
      <div class="row">
        <div class="col-12 col-md-8 mb-4">
          <ProductCard 
            :products="sanPham" 
            @update-count="updateProductCount"
            @toggle-selection="toggleProductSelection"
          />
        </div>
        <div class="col-12 col-md-4 mb-4">
          <SummaryCompoent 
            :products="sanPham" 
            :total="totalPrice.totalBeforeTax" 
            :tax="totalPrice.tax"
            :totalWithTax="totalPrice.totalWithTax"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MenuComponent from './components/MenuComponent.vue';
import ProductCard from './components/ProductCard.vue';
import SummaryCompoent from './components/SummaryCompoent.vue';
import CartHeader from './components/CartHeader.vue';

const sanPham = ref([
  { ten: 'Acne-Fighting Toner', Giagoc: '14,25', count: 1, isSelected: false ,mota : 'Hàng chất lượng tốt nhat',theloai : 'Toner',size : '100ml',hinhAnh : 'https://cdn.pixabay.com/photo/2012/05/04/10/55/pdf-47199_640.png'},
  { ten: 'Acne-Fighting Toner', Giagoc: '14,25', count: 1, isSelected: false ,mota : 'Hàng chất lượng tốt nhat',theloai : 'Toner',size : '100ml',hinhAnh : 'https://cdn.pixabay.com/photo/2012/05/04/10/55/pdf-47199_640.png'},
  { ten: 'Acne-Fighting Toner', Giagoc: '14,25', count: 1, isSelected: false ,mota : 'Hàng chất lượng tốt nhat',theloai : 'Toner',size : '100ml',hinhAnh : 'https://cdn.pixabay.com/photo/2012/05/04/10/55/pdf-47199_640.png'},

]);

function updateProductCount(index, newCount) {
  sanPham.value[index].count = newCount;
}

function toggleProductSelection(index) {
  sanPham.value[index].isSelected = !sanPham.value[index].isSelected;
}

const totalPrice = computed(() => {
  const totalBeforeTax = sanPham.value
    .filter(product => product.isSelected)
    .reduce((sum, product) => sum + product.count * parseFloat(product.Giagoc.replace(',', '.')), 0);

  const tax = totalBeforeTax * 0.08;
  return {
    totalBeforeTax: totalBeforeTax.toFixed(2),
    tax: tax.toFixed(2),
    totalWithTax: (totalBeforeTax + tax).toFixed(2),
  };
});

const cartCount = computed(() => sanPham.value.filter(p => p.isSelected).length);
</script>
