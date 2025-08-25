// Simulated verification system
const validCodes = [
    "NCL2024-001",
    "NCL2024-002",
    "NCL2024-003"
];

document.getElementById('verifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const code = document.getElementById('certificateCode').value.trim();
    const resultDiv = document.getElementById('result');
    if (validCodes.includes(code)) {
        resultDiv.innerHTML = `<span style="color:green;">✅ Certificate code <b>${code}</b> is valid.</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color:red;">❌ Certificate code <b>${code}</b> is NOT valid.</span>`;
    }
});
