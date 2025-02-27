// تخزين بيانات البصمات مع ربطها بالمستخدم
function saveFingerprint(imageData, userId) {
    const fingerprints = JSON.parse(localStorage.getItem('fingerprints')) || [];
    fingerprints.push({ id: fingerprints.length + 1, image: imageData, userId });
    localStorage.setItem('fingerprints', JSON.stringify(fingerprints));
}

// تخزين بيانات المستخدمين
function saveUser(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

// استرجاع بيانات البصمات
function getFingerprints() {
    return JSON.parse(localStorage.getItem('fingerprints')) || [];
}

// استرجاع بيانات المستخدمين
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}
