<script setup lang="ts">
import { defineProps, ref } from 'vue'

defineProps<{ msg: string }>()

// Định nghĩa các biến với kiểu `string` chuẩn
const image: string = 'https://tse4.mm.bing.net/th?id=OIP.Z6O34ZAThpQ2Iebh2InxFAHaEK&w=266&h=266&c=7'
const message: string = 'Phan Huy'
const content: string = 'Backend Developer'
const description: string = 'Em Tên là Phan Huy , Sinh Viên Cao Đẳng FPT , Chuyên Ngành Phát Triển Phần Mềm'

// Reactive state để hiển thị thông báo khi nhấn nút Edit
const updated = ref(false)
function handleEdit() {
  updated.value = true
  setTimeout(() => (updated.value = false), 2000) // Hiển thị "Updated" trong 2 giây
}
</script>

<template>
  <div class="profile-card">
    <img :src="image" alt="Profile Image" class="profile-image" />
    <div class="profile-content">
      <h1 class="profile-name">{{ message }}</h1>
      <h3 class="profile-title">{{ content }}</h3>
      <p class="profile-description">{{ description }}</p>
    </div>
    <button class="edit-button" @click="handleEdit">Edit</button>
    <p v-if="updated" class="update-message">Updated</p>
  </div>
</template>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
  width: 300px;
  height: 400px;
  padding: 40px 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  font-family: Arial, sans-serif;
}

.profile-image {
  border-radius: 20px;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.profile-content {
  padding: 20px;
  text-align: left;
}

.profile-name {
  font-size: 1.25em;
  font-weight: bold;
  margin: 0;
  color: #333;
}

.profile-title {
  font-size: 1em;
  color: #555;
  font-weight: bold;
  margin: 5px 0 10px;
}

.profile-description {
  font-size: 0.9em;
  color:black;
  margin: 0;
}

.edit-button {
  background-color: #6b46c1;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 0.9em;
  border-radius: 20px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #553c9a;
}

.update-message { 
  color: green;
  font-size:1.1em;
  text-align: center;
  margin-top: 10px;
}
</style>
