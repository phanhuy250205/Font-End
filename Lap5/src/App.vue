<template>
  <div>
    <ProductCard :sanPham="sanPham" />
  </div>
</template>

<script setup>
import ProductCard from './components/ProductCard.vue';

const sanPham = {
  ten : 'S Kỳ Diệu Cửa Tiệm Tạp Hóa NAMIYA (Tái Bản)',
  danhGia : 3,
  giaGoc : '200.000₫',
  giaBan : '100.000₫',
  giamGia : 50,
  ngayGiaoHang : '07/11',
  tags : {
    topDeal : true,
    chinhHang : true,
    extra : true
  },
  hinhAnh:[
    'https://cdn.pixabay.com/photo/2012/05/04/10/55/pdf-47199_640.png',
    'https://cdn.pixabay.com/photo/2016/11/19/12/33/books-1839036_640.jpg',
    'https://cdn.pixabay.com/photo/2021/10/14/18/20/advertising-6710081_640.jpg',
]
}
</script>
