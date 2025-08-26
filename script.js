// Auto-fill and auto-verify if URL contains ?qualificationNumber=...&candidateName=...
window.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const qn = params.get('qualificationNumber');
    const name = params.get('candidateName');
    if (qn && name) {
        document.getElementById('qualificationNumber').value = qn;
        document.getElementById('candidateName').value = name;
        document.getElementById('verifyForm').requestSubmit();
    }
});

// Example certificates data
const certificates = [
    {
        name: "Jane Doe",
        qualificationNumber: "NC-602/9143/2A",
        // You can add other fields if needed for display
    },
    {
        name: "John Smith",
        qualificationNumber: "NC-2025-001234",
    },
    {
        name: "Jane Doe",
        qualificationNumber: "NC-2025-003456",
    }
    // Add more objects for other candidates!
];

// Verification logic
document.getElementById('verifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const qualificationNumber = document.getElementById('qualificationNumber').value.trim();
    const candidateName = document.getElementById('candidateName').value.trim();
    const resultDiv = document.getElementById('result');
    const found = certificates.find(cert =>
        cert.qualificationNumber.toLowerCase() === qualificationNumber.toLowerCase() &&
        cert.name.toLowerCase() === candidateName.toLowerCase()
    );
    if (found) {
        resultDiv.innerHTML = `
            <div style="background:#e6ffed;color:#228c5b;padding:18px 14px;border-radius:10px;border:2px solid #228c5b;margin-top:16px;font-weight:bold;font-size:1.1em;display:flex;align-items:center;">
                <span style="font-size:1.5em;margin-right:10px;">✅</span>
                VERIFIED: ${found.name} (${found.qualificationNumber})
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div style="background:#ffe6e6;color:#c62222;padding:18px 14px;border-radius:10px;border:2px solid #c62222;margin-top:16px;font-weight:bold;font-size:1.1em;display:flex;align-items:center;">
                <span style="font-size:1.5em;margin-right:10px;">❌</span>
                NOT FOUND: The candidate and qualification number do not match our records.
            </div>
        `;
    }
});

// QR Scanner logic
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
                // Expecting format: qualificationNumber|candidateName or just qualificationNumber
                document.getElementById('qr-result').innerText = "QR Code detected: " + qrCodeMessage;
                let parts = qrCodeMessage.split('|');
                if (parts.length === 2) {
                    document.getElementById('qualificationNumber').value = parts[0].trim();
                    document.getElementById('candidateName').value = parts[1].trim();
                } else {
                    // fallback if only one part
                    document.getElementById('qualificationNumber').value = qrCodeMessage.trim();
                }
                html5QrCode.stop();
                window.qrScannerStarted = false;
                qrReader.style.display = 'none';
                // Automatically submit the form after filling
                document.getElementById('verifyForm').requestSubmit();
            },
            errorMessage => {
                // Optional: display error
            }
        ).catch(err => {
            document.getElementById('qr-result').innerText = "Unable to start scanning: " + err;
        });
    }
});
