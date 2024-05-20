<template>
    <div class="container">
      <div class="left-side">
        <h1>Recipe Management</h1>
        <div class="recipe-menu">
          <div class="li-recipe">KNORR 1</div>
          <div class="li-recipe">KNORR 2</div>
          <div class="li-recipe">KNORR 3</div>
          <div class="li-recipe">KNORR 4</div>
          <div class="li-recipe">KNORR 5</div>
        </div>
        <font-awesome-icon icon="circle-plus" />
      </div>
      <div class="right-side">
        <div class="topic">
          <h1>KNORR 1</h1>
          <button type="submit" class="save">Save</button>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 recipe-table">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3">Ingredient</th>
                <th scope="col" class="px-6 py-3">Ingredient</th>
                <th scope="col" class="px-6 py-3">Ingredient</th>
                <th scope="col" class="px-6 py-3">Ingredient</th>
                <th scope="col" class="px-6 py-3">Ingredient</th>
                <th scope="col" class="px-6 py-3">Popup</th>
                <th scope="col" class="px-6 py-3">Mixing</th>
                <th scope="col" class="px-6 py-3">Delay</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Step 1
                </th>
                <td class="px-6 py-4">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Step 2
                </th>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Step 3
                </th>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Step 4
                </th>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
                <td class="px-6 py-4">
                    <input type="checkbox">
                </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- Add Step link -->
        <button @click="addStep" class="add-step">Add Step</button>
      </div>
    </div>
  </template>
  
  <script setup>
import './Recipe.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
  
  // Function to add a new row to the table
  const addStep = () => {
    const table = document.querySelector('.recipe-table tbody');
  const rowCount = table.rows.length;
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Step ${rowCount + 1}
      </th>
      <td class="px-6 py-4">
        <input type="checkbox">
      </td>
      <td class="px-6 py-4">
        <input type="checkbox">
      </td>
      <td class="px-6 py-4">
        <input type="checkbox">
      </td>
      <td class="px-6 py-4">
        <input type="checkbox">
      </td>
      <td class="px-6 py-4">
        <input type="checkbox">
      </td><td class="px-6 py-4">
        <input type="checkbox">
      </td>
      <td class="px-6 py-4">
        <input type="checkbox">
      </td>
      <td class="px-6 py-4">
        <input type="checkbox">
      </td>
     
      `;
  table.appendChild(newRow);
  // Save added rows to localStorage
  saveRowsToLocalStorage();
};

// Function to save added rows to localStorage
const saveRowsToLocalStorage = () => {
  const tableRows = Array.from(document.querySelectorAll('.recipe-table tbody tr'));
  const rowsData = tableRows.map(row => row.innerHTML);
  localStorage.setItem('recipeRows', JSON.stringify(rowsData));
};

// Function to retrieve rows from localStorage and add them to the table
const loadRowsFromLocalStorage = () => {
  const savedRows = JSON.parse(localStorage.getItem('recipeRows'));
  if (savedRows) {
    const table = document.querySelector('.recipe-table tbody');
    table.innerHTML = savedRows.join('');
  }
};

// Load rows from localStorage when the component is mounted
onMounted(() => {
  loadRowsFromLocalStorage();
});
</script>
  
  <style scoped>
.container {
  display: flex;
  height: 100vh; /* Full height of the viewport */
}

.left-side {
  flex: 25%; /* 30% of the container's width */
  background-color: #ffffff;
}

.right-side {
  flex: 75%; /* 70% of the container's width */
}

/* Adjust styling as needed */
</style>

  