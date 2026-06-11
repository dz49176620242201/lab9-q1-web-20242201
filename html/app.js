const healthButton = document.querySelector('#healthButton')
const healthStatus = document.querySelector('#healthStatus')

healthButton?.addEventListener('click', () => {
  const now = new Date().toLocaleString()
  healthStatus.textContent = `Running from Docker at ${now}`
})
