// Simulated verification system (example codes)
const validCodes = [
    "NC-2025-001234",
    "NC-2025-002345",
    "NC-2025-003456"
];

document.getElementById('verifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const code = document.getElementById('qualificationNumber').value.trim();
    const name = document.getElementById('candidateName').value.trim();
    const resultDiv = document.getElementById('result');
    if (validCodes.includes(code) && name.length > 0) {
        resultDiv.innerHTML = `<span style="color:green;">✅ Certificate <b>${code}</b> is valid for <b>${name}</b>.</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color:red;">❌ Certificate <b>${code}</b> is NOT valid for <b>${name}</b>.</span>`;
    }
});
