<template>
    <div class="block">
      <div>Номер блока: {{ block.number }}</div>
      <div>Хеш блока: {{ block.hash }}</div>
      <button @click="$router.push(`/block/${block.number}`)" class="block-button">Открыть страницу блока</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'block',
    props: {
      block: {
        type: Object,
        required: true 
      }
    }
  };
  </script>
  
  <style scoped>
  .block {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .block-button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .block-button:hover {
    background-color: #0056b3;
  }
  </style>