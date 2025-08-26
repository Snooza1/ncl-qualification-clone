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
// Existing verification code...

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
// QR Code scanner activation using html5-qrcode
document.getElementById('startScannerBtn').addEventListener('click', function() {
    const qrReader = document.getElementById('qr-reader');
    qrReader.style.display = 'block';
    document.getElementById('qr-result').innerText = '';
    if (!window.qrScannerStarted) {
        window.qrScannerStarted = true;
        const html5QrCode = new Html5Qrcode("qr-reader");
        html5QrCode.start(
            { facingMode: "environment" },
            {
                fps: 10,
                qrbox: 250
            },
            qrCodeMessage => {
                document.getElementById('qr-result').innerText = "QR Code detected: " + qrCodeMessage;
                // Optionally, you can place the detected code into the Qualification Number input:
                document.getElementById('qualificationNumber').value = qrCodeMessage;
                // Stop scanning after successful scan
                html5QrCode.stop();
                window.qrScannerStarted = false;
                qrReader.style.display = 'none';
            },
            errorMessage => {
                // Ignore scanning errors
            }
        ).catch(err => {
            document.getElementById('qr-result').innerText = "Unable to start scanning: " + err;
        });
    }
});
