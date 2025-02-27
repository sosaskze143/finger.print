document.addEventListener('DOMContentLoaded', () => {
    // عرض بيانات المستخدم
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const userData = document.getElementById('user-data');
    userData.innerHTML = `
        <p><strong>اسم المستخدم:</strong> ${user.username}</p>
        <p><strong>الدور:</strong> ${user.role}</p>
    `;

    // تهيئة الكاميرا
    const video = document.getElementById('camera');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error('Error accessing the camera: ', err);
        });

    // تسجيل البصمة
    document.getElementById('capture-btn').addEventListener('click', () => {
        const userId = user.username; // استخدام اسم المستخدم كمعرف
        captureFingerprint(userId);
    });
});
