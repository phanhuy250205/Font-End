<script setup>
import {computed, ref} from 'vue';
defineProps({
  sanPham : {
    typeof : Object,
    Required : true

  }
});
//Tính giá hiện tại từ giá gốc và phần trăm giảm giá
const giaHienTai = computed(() => {
  return Math.round(sanPham.giaGoc * (1- sanPham.giamGia / 100));
})

// định dạng thành tiền việt nam
const giahientai =  computed(() => {
  return giaHienTai.value.toLocaleString('vi-VN');
})
const giaGocDinhDang = computed(() => {
  return sanPham.giaGoc.toLocaleString('vi-VN');
});
//Tính ngày giao hàng
const ngayhientai = computed(() => {
  const today = new Date();
  const giaoHang = new Date(today)
  giaoHang.setDate(today.getDate() + 4);
  const ngay = giaoHang.getDate().toString().padStart(2, '0'); // Định dạng ngày 2 chữ số
  const thang = (giaoHang.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
  const nam = giaoHang.getFullYear();
  const thuTrongTuan = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const thu = thuTrongTuan[giaoHang.getDay()]; // Ánh xạ chỉ số ngày thành tên thứ

  return `${thu}, ${ngay}/${thang}/${nam}`;
})
  const danhGia = ref(3);
</script>

<template>
 
<div class="container mt-5">
    <div class="card">
      <!-- Carousel cho phần hình ảnh -->
      <div class="position-relative">
        <!-- Badge (Top Deal và Chính Hãng) -->
        <div class="badge-container">
          <span v-if="sanPham.tags ['topDeal']"class="badge bg-danger">Top Deal</span>
          <span v-if="sanPham.tags ['chinhHang']" class="badge bg-primary">Chính Hãng</span>
          <span v-if="sanPham.tags ['extra']" class="badge bg-red">Freeship Extra</span>
        </div>

        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" v-if="sanPham.hinhAnh">
              <img :src="sanPham.hinhAnh[0]" class="d-block w-100" alt="Image 1">
            </div>
            <div class="carousel-item"v-if="sanPham.hinhAnh[1]">
              <img :src="sanPham.hinhAnh[1]" class="d-block w-100" alt="Image 2">
            </div>
            <div class="carousel-item" v-if="sanPham.hinhAnh[2]">
              <img :src="sanPham.hinhAnh[2]" class="d-block w-100" alt="Image 3">
            </div>
          </div>
        </div>
      </div>

      <!-- Thông tin sản phẩm -->
      <div class="card-body text-center">
        <!-- Tên sản phẩm -->
        <h5 class="card-title mt-2 text-truncate" style="max-width: 260px;">
          {{ sanPham.ten }}
        </h5>
        <!-- Đánh giá -->
        <div class="mb-2">
  <span v-for="index in 5" 
        :key="index" 
        class="star"
        :class="{'selected': index <= danhGia}" 
        @click="danhGia = index">
    ★
  </span>
</div>
        <!-- Giá -->
        <div>
          <span class="price">{{ sanPham.giaBan }}</span>
          <div class="gia">
            <span class="original-price">{{ sanPham.giaGoc }}</span>
            <span class="discount">-{{ sanPham.giamGia }}%</span>
          </div>
        </div>
        <hr>
        <!-- Ngày giao hàng -->
        <div class="delivery mt-2"> Ngày dự kiến : {{ ngayhientai }}</div>
      </div>
    </div>
  </div>
</template>

<style>

.card {
     
      border-radius: 10px;
      width: 18rem;
      margin: auto;
      padding: 15px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .carousel img {
      height: 220px;
      object-fit: cover;
    }

    .badge-container {
      position: absolute;
      bottom: -2px;
      left: 2px;
      z-index: 10;
      
    }

    .badge {
      font-size: 0.75rem;
      margin-bottom: 5px;
    }
    .star {
    font-size: 30px;
    color: #ddd;  /* Màu sao rỗng */
    cursor: pointer;
}

.star.selected {
  color: gold;  /* Màu sao đầy */
}

    .star:hover {
    color: gold;
    }
    /* .star span{
      font-size: 1.5rem;
      color: gold;
    } */
    .price {
      color: red;
      font-weight: bold;
      font-size: 1.5rem;
    }

    .original-price {
      text-decoration: line-through;
      color: gray;
      font-size: 0.9rem;
    }

    .discount {
      font-size: 1rem;
      color: rgb(11, 3, 3);
      border: 3px solid rgb(171, 37, 37);
      padding: 2px 5px;
      border-radius: 99px;
      margin-left: 10px;
     
    }
    .gia{
      padding: 10px;
    }
    
    .delivery {
      font-size: 0.85rem;
      color: gray;
    }
</style>