document.addEventListener('DOMContentLoaded', () => {
    // عرض جميع المستخدمين
    document.getElementById('view-users-btn').addEventListener('click', () => {
        const users = getUsers();
        const usersList = document.getElementById('users-list');
        usersList.innerHTML = users.map(user => `
            <div>
                <p><strong>اسم المستخدم:</strong> ${user.username}</p>
                <p><strong>الدور:</strong> ${user.role}</p>
            </div>
        `).join('');
    });

    // إنشاء تقارير
    document.getElementById('generate-reports-btn').addEventListener('click', () => {
        const fingerprints = getFingerprints();
        const reportsOutput = document.getElementById('reports-output');
        reportsOutput.innerHTML = `
            <p>عدد البصمات المسجلة: ${fingerprints.length}</p>
        `;
    });
});
