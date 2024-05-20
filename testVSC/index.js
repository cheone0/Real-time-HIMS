function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더합니다.
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function displayCurrentTime() {
    document.getElementById('current-time').textContent = getCurrentTime();
}

// 페이지가 로드될 때 시간 업데이트
window.onload = function() {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000); // 1초마다 시간 업데이트
}