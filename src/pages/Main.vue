<template>
  <div>
    <block
        v-for="block in $store.state.blocks" :key="block.id"
        :block="block"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
        newBlockHeaders: 'newBlockHeaders'
    })
  },
  mounted() {
    this.newBlockHeaders()
  }
  }
</script>
