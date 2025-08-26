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
});// Certificate data (all are Level 3 Diploma in Business Administration (RQF))
const certificates = [
    {
        name: "Mariyan Sashov Kotsev",
        qualificationNumber: "NC-602/9143/2A",
        level: "Level 3 Diploma in Business Administration (RQF)",
        awardedBy: "NCC (RQF by Ofqual)",
        year: "2022-06-04T00:00:00.000Z"
    },
    {
        name: "John Smith",
        qualificationNumber: "NC-2025-001234",
        level: "Level 3 Diploma in Business Administration (RQF)",
        awardedBy: "NCC (RQF by Ofqual)",
        year: "2023-03-12T00:00:00.000Z"
    },
    {
        name: "Jane Doe",
        qualificationNumber: "NC-2025-003456",
        level: "Level 3 Diploma in Business Administration (RQF)",
        awardedBy: "NCC (RQF by Ofqual)",
        year: "2024-07-10T00:00:00.000Z"
    }
    // Add more objects for other candidates!
];

// Verification logic
document.getElementById('verifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const code = document.getElementById('qualificationNumber').value.trim();
    const name = document.getElementById('candidateName').value.trim();
    const resultDiv = document.getElementById('result');

    const cert = certificates.find(c =>
        c.qualificationNumber === code && c.name.toLowerCase() === name.toLowerCase()
    );

    if (cert) {
        resultDiv.innerHTML = `
            <div style="background:#e5f8e5;color:#174617;border-radius:12px;border:2px solid #b6e6b6;padding:18px;margin-top:12px;">
                <span style="font-size:1.5em;">✅</span> <strong>VERIFIED</strong><br><br>
                <b>Name:</b> ${cert.name}<br>
                <b>Qualification:</b> ${cert.qualificationNumber}<br>
                <b>Level:</b> ${cert.level}<br>
                <b>Awarded By:</b> ${cert.awardedBy}<br>
                <b>Year:</b> ${cert.year}
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div style="background:#ffe5e5;color:#a61717;border-radius:12px;border:2px solid #e6b6b6;padding:18px;margin-top:12px;">
                <span style="font-size:1.5em;">❌</span> <strong>NOT VERIFIED</strong><br>
                No matching certificate found for the provided details.
            </div>
        `;
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
                document.getElementById('qualificationNumber').value = qrCodeMessage;
                html5QrCode.stop();
                window.qrScannerStarted = false;
                qrReader.style.display = 'none';
            },
            errorMessage => {}
        ).catch(err => {
            document.getElementById('qr-result').innerText = "Unable to start scanning: " + err;
        });
    }
});
