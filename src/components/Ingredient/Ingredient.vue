<script setup>
import { ref } from 'vue'
import './Ingredient.css'
</script>

<template>
      <h1>Ingredient QR Code Generation</h1>
  <div class="container">
    <div class="left-panel">
      
<form class="Ingredient-form">
    
    <div class="mb">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Material Code</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    <div class="mb">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Batch Number</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    <div class="mb">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manufacturing Date</label>
        <input type="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
    </div> 
    <div class="mb">
        <label for="weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
        <input type="text" id="weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
    </div> 
    <div class="mb">
        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weighted Date</label>
        <input type="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
    </div> 
    <button type="submit" class="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate QR</button>
</form>

    </div>
    <div class="right-panel">
      <div class="qr-container">
        <!-- <img src="../../assets/img/QR.png"class="qr"> -->
      </div>
      <button type="submit" class="print text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Print QR Code</button>
    </div>
  </div>
</template>

<style scoped>
.Ingredient-form {
    padding: 43px;
}
.bg-gray-50{
    height: 35px;
    --tw-bg-opacity: 0;
    background-color: #f1f2f4;
    border-width: 0;
    color: #000000;
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-blue-600 {
        --tw-bg-opacity: 1;
        background-color: #01CF6D;
        border-width: 3px;
    border-color: #01CF6D;
        margin-left: -336px;
        border-radius: 50px;
    }
    .dark\:bg-blue-600:hover {
        --tw-bg-opacity: 1;
        background-color: #ffffff;
        border-width: 3px;
    border-color: #01CF6D;
        margin-left: -336px;
        border-radius: 50px;
        color: #01CF6D;
    }
}
h1{
    padding: 20px 10px 10px 25px;
    text-align: left;
    font-size: 27px;
    font-weight: bold;
    color: black;
  }
.print[data-v-7daf9cee] {
    --tw-bg-opacity: 1;
    background-color: #ffffff;
    border-width: 3px;
    border-color: #01CF6D;
    /* margin-left: -336px; */
    border-radius: 50px;
    color: #01CF6D;
    margin-top: 9px;
}
.print[data-v-7daf9cee]:hover {
    --tw-bg-opacity: 1;
    background-color: #01CF6D;
    border-width: 3px;
    border-color: #01CF6D;
    /* margin-left: -336px; */
    border-radius: 50px;
    color: white;
    margin-top: 9px;
}
</style>
