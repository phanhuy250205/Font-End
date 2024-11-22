<template>
  <div class="product-list" >
    <!-- Lặp qua từng sản phẩm và truyền từng sản phẩm vào ProductCard -->
    <ProductCard
      v-for="(product, index) in sanPham" 
      :key="index"
      :sanPham="product" 
      :phanTramGiam="phanTramGiam[index]" 
      :ngayDuKien="ngayGiaoHang[index]" 
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import ProductCard from './components/ProductCard.vue';

// Danh sách sản phẩm, mỗi sản phẩm là một đối tượng
const sanPham = ref([
  {
    ten: 'S Kỳ Diệu Cửa Tiệm Tạp Hóa NAMIYA (Tái Bản)',
    giaGoc: '200.000₫',
    giaBan: '100.000₫',
    ngayGiaoHang: '09/16',
    tags: { topDeal: true, chinhHang: true, extra: true },
    hinhAnh: [
      'https://cdn.pixabay.com/photo/2012/05/04/10/55/pdf-47199_640.png',
      'https://cdn.pixabay.com/photo/2016/11/19/12/33/books-1839036_640.jpg',
      'https://cdn.pixabay.com/photo/2024/11/11/14/05/flamingo-9190160_640.jpg'
    ],
    danhGia: 4
  },
  {
    ten: 'Màn Hình Cong Sam Sung 32 inch',
    giaGoc: '300.000₫',
    giaBan: '120.000₫',
    ngayGiaoHang: '2/11',
    tags: { topDeal: false, chinhHang: true, extra: false },
    hinhAnh: [
      'https://cdn.pixabay.com/photo/2012/05/04/10/55/pdf-47199_640.png',
      'https://cdn.pixabay.com/photo/2016/11/19/12/33/books-1839036_640.jpg',
      'https://cdn.pixabay.com/photo/2024/11/11/14/05/flamingo-9190160_640.jpg'
    ],
    danhGia: 5
  },
  {
    ten: 'Bình Giữ Nhiệt bằng thép Không Giải Hóa',
    giaGoc: '400.000₫',
    giaBan: '300.000₫',
    ngayGiaoHang: '09/11',
    tags: { topDeal: true, chinhHang: false, extra: true },
    hinhAnh: [
      'https://cdn.pixabay.com/photo/2012/05/04/10/55/pdf-47199_640.png',
      'https://cdn.pixabay.com/photo/2016/11/19/12/33/books-1839036_640.jpg',
      'https://cdn.pixabay.com/photo/2024/11/11/14/05/flamingo-9190160_640.jpg'
    ],
    danhGia: 3
  },
  {
    ten: 'Màn Hình Cong Sam Sung ',
    giaGoc: '500.000₫',
    giaBan: '250.000₫',
    ngayGiaoHang: '07/11',
    tags: { topDeal: true, chinhHang: true, extra: false },
    hinhAnh: [
      'https://cdn.pixabay.com/photo/2012/05/04/10/55/pdf-47199_640.png',
      'https://cdn.pixabay.com/photo/2016/11/19/12/33/books-1839036_640.jpg',
      'https://cdn.pixabay.com/photo/2024/11/11/14/05/flamingo-9190160_640.jpg'
    ],
    danhGia: 4
  }
]);


// Tính phần trăm giảm giá cho từng sản phẩm
const phanTramGiam = computed(() => {
  return sanPham.value.map(product => {
    const giaGocNum = parseInt(product.giaGoc.replace(/[^\d]/g, '')); // Loại bỏ ký tự đặc biệt
    const giaBanNum = parseInt(product.giaBan.replace(/[^\d]/g, '')); // Loại bỏ ký tự đặc biệt
    const phanTram = ((giaGocNum - giaBanNum) / giaGocNum) * 100;
    return Math.round(phanTram);
  });
});

// Tính ngày giao hàng dự kiến
const ngayGiaoHang = computed(() => {
  const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
  return sanPham.value.map(product => {
    const date = new Date(product.ngayGiaoHang); // Lấy ngày giao hàng từ sản phẩm
    date.setDate(date.getDate() + 4); 
    const thu = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'][date.getDay()];

    
    if (date.getFullYear() !== currentYear) {
      date.setFullYear(currentYear);
    }

    return `${thu}, ${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  });
});

</script>
<style scoped>
.product-list {
  display: flex; 
  flex-wrap: nowrap; 
  gap: 4px; 
  
}
</style>
