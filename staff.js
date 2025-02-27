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

    // تسجيل البصمة
    document.getElementById('capture-btn').addEventListener('click', () => {
        const userId = document.getElementById('client-id').value;
        if (userId) {
            captureFingerprint(userId);
        } else {
            alert('يرجى إدخال رقم الهوية أولاً!');
        }
    });

    // حفظ بيانات العميل
    document.getElementById('save-client-btn').addEventListener('click', () => {
        const clientName = document.getElementById('client-name').value;
        const clientId = document.getElementById('client-id').value;

        if (clientName && clientId) {
            const client = { name: clientName, id: clientId };
            saveUser(client);
            alert('تم حفظ بيانات العميل بنجاح!');
        } else {
            alert('يرجى ملء جميع الحقول!');
        }
    });
});
