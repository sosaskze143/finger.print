document.addEventListener('DOMContentLoaded', () => {
    // تهيئة الأحداث
    document.getElementById('login-btn').addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (login(username, password)) {
            // إذا كان تسجيل الدخول ناجحًا، انتقل إلى الصفحة الرئيسية
            window.location.href = 'main.html';
        } else {
            // إذا فشل تسجيل الدخول، عرض رسالة خطأ
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('error-message').innerText = 'اسم المستخدم أو كلمة المرور غير صحيحة!';
        }
    });

    // تهيئة الكاميرا في الصفحة الرئيسية
    if (window.location.pathname.endsWith('main.html')) {
        const video = document.getElementById('camera');
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(err => {
                console.error('Error accessing the camera: ', err);
            });

        document.getElementById('capture-btn').addEventListener('click', () => {
            const userId = prompt('يرجى إدخال رقم الهوية:');
            if (userId) {
                captureFingerprint(userId);
            } else {
                alert('يرجى إدخال رقم الهوية أولاً!');
            }
        });
    }
});
