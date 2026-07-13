<script setup>
import { ref } from 'vue'

// 1. 建立變數：用來儲存使用者現在輸入的文字
const searchInput = ref('')

// 2. 建立陣列：用來存你的追蹤清單與筆記
const watchlist = ref([])

// 3. 建立動作：按下按鈕時要執行的功能
const addStock = () => {
  // 如果輸入框不是空的
  if (searchInput.value.trim() !== '') {
    // 把股票代號加到清單陣列中
    watchlist.value.push({
      symbol: searchInput.value.trim(),
      note: '' // 預留寫筆記的欄位
    })
    // 加完之後，清空輸入框
    searchInput.value = ''
  }
}
</script>

<template>
  <div class="container">
    <h1>📈 股票追蹤與筆記系統</h1>
    
    <div class="search-box">
      <input 
        type="text" 
        v-model="searchInput" 
        placeholder="輸入股票代號 (例: 2317)" 
        @keyup.enter="addStock"
      />
      <button @click="addStock">新增追蹤</button>
    </div>

    <div class="watchlist">
      <p v-if="watchlist.length === 0">目前還沒有追蹤任何股票喔！</p>
      
      <ul v-else class="stock-list">
        <li v-for="stock in watchlist" :key="stock.symbol" class="stock-item">
          <strong>代號：{{ stock.symbol }}</strong>
          <input type="text" v-model="stock.note" placeholder="在這裡輸入技術分析筆記..." class="note-input" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* 基本排版 */
.container {
  max-width: 600px;
  margin: 50px auto;
  font-family: sans-serif;
  text-align: center;
}
.search-box {
  margin: 20px 0;
}
.search-box input {
  padding: 8px;
  font-size: 16px;
  margin-right: 5px;
}
button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

/* 清單排版 */
.stock-list {
  list-style-type: none;
  padding: 0;
}
.stock-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.note-input {
  flex-grow: 1;
  margin-left: 20px;
  padding: 5px;
}
</style>
