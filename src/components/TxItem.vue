<template>
    <div class="block-item">
        <div>
            <div>Номер блока:</div>
            <router-link :to="`/block/${transaction.blockNumber}`">{{ transaction.blockNumber }}</router-link>
        </div>
        <div>Хеш транзакции: {{ transaction.hash }}</div>
        <div>Отправитель транзакции: {{ transaction.from }}</div>
        <div>Получатель транзакции: {{ transaction.to }}</div>
        <div>Количество пересланного эфира: {{ transaction.value }}</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'tx-item',
    data() {
        return {
        transaction: {}
        };
    },
    props: {
        txHash: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions({
        getTransaction: "getTransaction"
        })
    },
    async mounted() {
        this.transaction = await this.getTransaction(this.txHash);
    },
    watch: {
        async blockNumberOrHash() {
        this.transaction = await this.getTransaction(this.txHash);
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