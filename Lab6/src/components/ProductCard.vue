<script setup>
import {computed, ref} from 'vue';
defineProps({
  sanPham : {
    typeof : Object,
    Required : true,
    phanTramGiam: Array
  },
  phanTramGiam:{
    typeof : Array,
    Required : true
  },
  ngayGiaoHang: {
    typeof : String,
    Required : true
  },
  danhGia : {
    typeof : Number,
    Required : true
  },
  ngayDuKien: String
});
const danhGia = ref(4);


</script>

<template>
  
  <div class="container my-10">
    <div class="row d-flex justify-content-between">
      <!-- Sản phẩm 2 -->
      <div class="col-md-3 col-6 mb-4">
        <div class="card">
          <!-- Carousel cho phần hình ảnh -->
          <div class="position-relative">
            <!-- Badge (Top Deal và Chính Hãng) -->
            <div class="badge-container">
              <span v-if="sanPham.tags['topDeal']" class="badge bg-danger">Top Deal</span>
              <span v-if="sanPham.tags['chinhHang']" class="badge bg-primary">Chính Hãng</span>
              <span v-if="sanPham.tags['extra']" class="badge bg-red">Freeship Extra</span>
            </div>

            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
    <div 
      class="carousel-item" 
      v-for="(image, index) in sanPham.hinhAnh" 
      :key="index"
      :class="{ active: index === 0 }">
      <img :src="image" class="d-block w-100" :alt="'Image ' + (index + 1)">
    </div>
  </div>
  <!-- Các nút điều hướng -->
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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
              <span v-for="index in 5" :key="index" class="star" :class="{'selected': index <= danhGia}" @click="danhGia = index">★</span>
            </div>
            <!-- Giá -->
            <div>
              <span class="price">{{ sanPham.giaBan }}</span>
              <div class="gia">
                <span class="original-price">{{ sanPham.giaGoc }}</span>
                <span class="discount">-{{ phanTramGiam }}%</span>
              </div>
            </div>
            <hr>
            <!-- Ngày giao hàng -->
            <div class="delivery mt-2">Ngày dự kiến: {{ ngayDuKien }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style>
.card-img-top {
  height: 200px; /* Tăng chiều cao ảnh */
  
  object-fit: contain;
}

.badge-container {
  z-index: 1;
}

.badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

.card-title {
  font-size: 0.9rem;
  font-weight: bold;
}

.text-danger.fw-bold {
  font-size: 0.8rem;
}

.text-muted.text-decoration-line-through {
  font-size: 0.9rem;
}

.text-success {
  font-size: 0.8rem;
}

.card-body {
  padding: 1rem; /* Tăng padding để card rộng hơn */
}
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


