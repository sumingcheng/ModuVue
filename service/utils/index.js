// 通用下载方法
export function downloadFile(filename, stream, type) {
  // 创建下载链接
  const link = document.createElement('a')
  link.setAttribute('download', filename)
  
  // 处理文件数据以及 MIME 类型
  const blobData = new Blob([stream], { type: type })
  
  // 创建下载链接
  link.href = URL.createObjectURL(blobData)
  
  // 添加链接到 DOM，并自动点击进行下载
  document.body.appendChild(link)
  link.click()
  
  // 下载成功后返回 true
  return true
}

// 使用示例
// const myBlobData = new Blob([JSON.stringify({ name: 'John Doe', age: 30 })])
// downloadFile('my-file.json', myBlobData, 'application/json')
