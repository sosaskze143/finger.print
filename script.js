document.addEventListener('DOMContentLoaded', () => {
    // تهيئة الكاميرا
    const video = document.getElementById('camera');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error('Error accessing the camera: ', err);
        });

    // تهيئة الأحداث
    document.getElementById('capture-btn').addEventListener('click', () => {
        const userId = document.getElementById('userId').value;
        if (userId) {
            captureFingerprint(userId);
        } else {
            alert('يرجى إدخال رقم الهوية أولاً!');
        }
    });

    document.getElementById('register-user-btn').addEventListener('click', registerUser);
});

// تسجيل مستخدم جديد
function registerUser() {
    const name = document.getElementById('name').value;
    const userId = document.getElementById('userId').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;

    if (name && userId && gender && nationality) {
        const user = { id: userId, name, gender, nationality };
        saveUser(user);
        alert('تم تسجيل المستخدم بنجاح!');
    } else {
        alert('يرجى ملء جميع الحقول!');
    }
}
