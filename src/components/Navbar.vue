<template>
    <div class="navbar">
        <div>
            <button @click="$router.push('/')" class="nav-button">Главная страница</button>
        </div>
        <div>
            <input v-model="blockNumberOrHash" placeholder="Введите номер или хеш блока" class="block-input"/>
            <button @click="$router.push(`/block/${this.blockNumberOrHash}`)" class="nav-button">Открыть</button>
        </div>
        <div>
            <input v-model="txHash" placeholder="Введите хеш транзакции" class="block-input"/>
            <button @click="$router.push(`/transaction/${this.txHash}`)" class="nav-button">Открыть</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'navbar',
    data() {
      return {
        blockNumberOrHash: '',
        txHash: ''
      };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .nav-button {
    margin-right: 10px;
    padding: 8px 12px;
    background-color: #0056b3;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .nav-button:hover {
    background-color: #003366;
  }
  
  .block-input {
    flex-grow: 1;
    margin-right: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  </style>