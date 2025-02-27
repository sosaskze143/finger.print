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

    // تهيئة حدث البحث
    document.getElementById('search-btn').addEventListener('click', searchByFingerprint);
});

// البحث عن الشخص باستخدام البصمة
function searchByFingerprint() {
    const video = document.getElementById('camera');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    // البحث في قاعدة البيانات
    const fingerprints = getFingerprints();
    const users = getUsers();

    let foundUser = null;
    for (const fingerprint of fingerprints) {
        if (fingerprint.image === imageData) {
            foundUser = users.find(user => user.id === fingerprint.userId);
            break;
        }
    }

    // عرض النتائج
    const searchResults = document.getElementById('search-results');
    if (foundUser) {
        searchResults.innerHTML = `
            <h3>المعلومات:</h3>
            <p><strong>الاسم:</strong> ${foundUser.name}</p>
            <p><strong>رقم الهوية:</strong> ${foundUser.id}</p>
            <p><strong>الجنس:</strong> ${foundUser.gender}</p>
            <p><strong>الجنسية:</strong> ${foundUser.nationality}</p>
        `;
    } else {
        searchResults.innerHTML = '<p>لم يتم العثور على المستخدم!</p>';
    }
}
