// تسجيل مستخدم جديد مع كلمة مرور
function registerUserWithPassword(username, password, role) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const hashedPassword = hashPassword(password);
    users.push({ username, password: hashedPassword, role });
    localStorage.setItem('users', JSON.stringify(users));
}

// تسجيل الدخول
function login(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && verifyPassword(password, u.password));

    if (user) {
        return true; // تسجيل الدخول ناجح
    } else {
        return false; // تسجيل الدخول فاشل
    }
}

// الحصول على بيانات المستخدم
function getUserByUsername(username) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(u => u.username === username);
}

// تشفير كلمة المرور (محاكاة باستخدام btoa)
function hashPassword(password) {
    return btoa(password); // تشفير بسيط (يمكن استخدام مكتبة مثل bcrypt في مشاريع حقيقية)
}

// التحقق من كلمة المرور
function verifyPassword(password, hashedPassword) {
    return btoa(password) === hashedPassword;
}
