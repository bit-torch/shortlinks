// 日夜间切换逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 主题切换按钮
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // 从本地存储加载主题偏好
        const savedTheme = localStorage.getItem('theme');
        
        // 应用保存的主题
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            themeToggle.textContent = '🌙';
        } else {
            document.body.classList.remove('light-mode');
            themeToggle.textContent = '☀️';
        }
        
        // 主题切换事件
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            
            // 保存主题偏好到本地存储
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            } else {
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            }
        });
    }
});