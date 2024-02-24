import { createStore } from 'vuex'
const Web3 = require('web3')
const web3 = new Web3("wss://eth-goerli.g.alchemy.com/v2/xD2fxxyNs3wzIvKotlWr3tqX5a-BcV1P")

export default createStore({
    state: {
        blocks: [],
        subscription: null
    },
    getters: {
    },
    mutations: {
        addBlock(state, newBlock) {
            state.blocks.unshift(newBlock)
        },
        clearSubscription(state) {
            if (state.subscription) {
                state.subscription.unsubscribe();
                state.subscription = null;
            }
        },
        setSubscription(state, subscription) {
            state.subscription = subscription;
        }
    },
    actions: {
        async newBlockHeaders({commit}) {
            const subscription = await web3.eth.subscribe('newBlockHeaders')
            subscription.on('data', async (block) => {
                console.log(block)
                let newBlock = {
                    number: block.number,
                    hash: block.hash
                }
                commit('addBlock', newBlock)
            })
            commit('clearSubscription');
            commit('setSubscription', subscription);
        },
        async getBlock({commit}, blockNumberOrHash) {
            return await web3.eth.getBlock(blockNumberOrHash)
        },
        async getTransaction({commit}, txHash) {
            return await web3.eth.getTransaction(txHash)
        },
        clearSubscription({ commit }) {
            commit('clearSubscription');
        }
    },
    modules: {
        
    }
})
