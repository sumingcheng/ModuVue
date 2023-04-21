// 保存数据到本地存储
export function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

// 从本地存储中获取数据
export function getData(key) {
  const value = localStorage.getItem(key)
  // JSON.parse() 方法解析 JSON 字符串并返回 JavaScript 值
  return value ? JSON.parse(value) : null
}

// 从本地存储中删除数据
export function removeData(key) {
  localStorage.removeItem(key)
}

// 清除本地存储中的所有数据
export function clearAllData() {
  localStorage.clear()
}
