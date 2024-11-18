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
  return `${ngay}/${thang}/${nam}`
})
  const danhGia = ref(0);
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
          <span v-for=" index in 5" 
            :key = 'index'
             class="star"
            :class="{'selected' : index <= sanPham.danhGia }"
            @click="danhGia = index"
            >
            ★
          </span>
          <p class="mt-2"> Sản Phẩm : {{ danhGia }} sao</p>
        </div>
        <!-- Giá -->
        <div>
          <span class="price">{{ sanPham.giaBan }}</span>
          <div>
            <span class="original-price">{{ sanPham.giaGoc }}</span>
            <span class="discount">{{ sanPham.giamGia }}%</span>
          </div>
        </div>
        <hr>
        <!-- Ngày giao hàng -->
        <div class="delivery mt-2"> Ngày dự kiến dao : {{ ngayhientai }}</div>
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
      font-size: 1.3rem;
      cursor: pointer;
      color: gray;
      margin: 0 5px;
      
    }
    .star:hover {
    color: gold;
    }
    .star span{
      font-size: 1.5rem;
      color: gold;
    }
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
      font-size: 0.9rem;
      color: gray;
    }

    .delivery {
      font-size: 0.85rem;
      color: gray;
    }
</style>