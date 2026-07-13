import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from './App.vue'

describe('股票追蹤系統單元測試', () => {
  it('當輸入股票代號並點擊按鈕後，清單應該要成功增加該股票', async () => {
    // 1. 在虛擬環境中掛載（渲染）我們的 App 元件
    const wrapper = mount(App)

    // 2. 找到畫面上的文字輸入框，並模擬輸入 '2317'
    const input = wrapper.find('input[type="text"]')
    await input.setValue('2317')

    // 3. 找到畫面上的「新增追蹤」按鈕，並模擬點擊動作
    const button = wrapper.find('button')
    await button.trigger('click')

    // 4. 斷言（Expect）：檢查最後渲染出來的網頁文字裡，是不是成功包含了 '代號：2317'
    expect(wrapper.text()).toContain('代號：2317')
  })
})
