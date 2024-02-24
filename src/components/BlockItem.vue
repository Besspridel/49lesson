<template>
    <div class="block-item">
      <div>Номер блока: {{ block.number }}</div>
      <div>Хеш блока: {{ block.hash }}</div>
      <div>Газа использовано: {{ block.gasUsed }}</div>
      <div>Стоимость газа: {{ block.baseFeePerGas }}</div>
      <div>Список транзакций:</div>
      <router-link
        v-for="hash in block.transactions"
        :to="`/transaction/${hash}`"
        :key="hash.id"
      >
        <div>
            {{ hash }}
        </div>
      </router-link>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'block-item',
    data() {
      return {
        block: {}
      };
    },
    props: {
      blockNumberOrHash: {
        type: String,
        required: true
      }
    },
    methods: {
      ...mapActions({
        getBlock: "getBlock"
      })
    },
    async mounted() {
      this.block = await this.getBlock(this.blockNumberOrHash);
    },
    watch: {
      async blockNumberOrHash() {
        this.block = await this.getBlock(this.blockNumberOrHash);
      }
    }
  };
  </script>
  
  <style scoped>
  .block-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .block-item div {
    margin-bottom: 10px;
  }
  </style>