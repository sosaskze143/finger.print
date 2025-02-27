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
    document.getElementById('login-btn').addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (login(username, password)) {
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('register-section').style.display = 'block';
            document.getElementById('camera-section').style.display = 'block';
        }
    });

    document.getElementById('register-user-btn').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const userId = document.getElementById('userId').value;
        const gender = document.getElementById('gender').value;
        const nationality = document.getElementById('nationality').value;
        const password = document.getElementById('register-password').value;

        if (name && userId && gender && nationality && password) {
            const user = { id: userId, name, gender, nationality };
            saveUser(user);
            registerUserWithPassword(userId, password);
            alert('تم تسجيل المستخدم بنجاح!');
        } else {
            alert('يرجى ملء جميع الحقول!');
        }
    });

    document.getElementById('capture-btn').addEventListener('click', () => {
        const userId = document.getElementById('userId').value;
        if (userId) {
            captureFingerprint(userId);
        } else {
            alert('يرجى إدخال رقم الهوية أولاً!');
        }
    });
});
