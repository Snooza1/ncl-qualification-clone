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

// Certificates data with full details (fixed commas and year formatting)
const certificates = [
  {
    name: "Jane Doe",
    qualificationNumber: "NC-123/4567/8A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-07-04T00:00:00.000Z"
  },
  {
    name: "Nadezhda Yankova Ihtimanska",
    qualificationNumber: "NC-603/9243/2A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-06-05T00:00:00.000Z"
  },
  {
    name: "Petrunka Tihomirova Zavratchiyska",
    qualificationNumber: "NC-605/9889/2A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-07-15T00:00:00.000Z"
  },
  {
    name: "Mariyan Sashov Kotsev",
    qualificationNumber: "NC-611/8766/5A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-08-28T00:00:00.000Z"
  },
  {
    name: "Rayna Velchova Veleva",
    qualificationNumber: "NC-655/8956/4A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-05-17T00:00:00.000Z"
  },
  {
    name: "Borislav Goshov Iliev",
    qualificationNumber: "NC-455/7556/6A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-09-17T00:00:00.000Z"
  },
  {
    name: "Stoyan Ivanov Kolev",
    qualificationNumber: "NC-675/9556/2A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-08-12T00:00:00.000Z"
  },
  {
    name: "Gapoor Mohssimi",
    qualificationNumber: "NC-775/4346/1A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-06-22T00:00:00.000Z"
  },
  {
    name: "Zaprin Nikolaev Dimitrov",
    qualificationNumber: "NC-601/6065/2A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-08-21T00:00:00.000Z"
  },
  {
    name: "Anka Metodieva Borisova",
    qualificationNumber: "NC-501/2755/1A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-05-15T00:00:00.000Z"
  },
  {
    name: "Shyukryu Fikri Shyukryu",
    qualificationNumber: "NC-701/9995/5A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-06-22T00:00:00.000Z"
  },
  {
    name: "Tsvetanka Mitkova Naydenova",
    qualificationNumber: "NC-105/8763/2A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-06-20T00:00:00.000Z"
  },
  {
    name: "Nadka Mitkova Mihaylova",
    qualificationNumber: "NC-202/6663/3A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-06-15T00:00:00.000Z"
  }
  // Add more certificates if needed
];

// Verification logic (always detailed view)
document.getElementById('verifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const qualificationNumber = document.getElementById('qualificationNumber').value.trim();
    const candidateName = document.getElementById('candidateName').value.trim();
    const resultDiv = document.getElementById('result');

    // Show loading message
    resultDiv.innerHTML = `
        <div style="background:#e6f0ff;color:#2255c6;padding:18px 14px;border-radius:10px;border:2px solid #2255c6;margin-top:16px;font-weight:bold;font-size:1.1em;display:flex;align-items:center;">
            <span style="font-size:1.5em;margin-right:10px;">⏳</span>
            Checking certificate details...
        </div>
    `;

    // Wait 2-4 seconds before showing the result
    setTimeout(() => {
        const found = certificates.find(cert =>
            cert.qualificationNumber.toLowerCase() === qualificationNumber.toLowerCase() &&
            cert.name.toLowerCase() === candidateName.toLowerCase()
        );
        if (found) {
            resultDiv.innerHTML = `
                <div style="background:#e6ffed;color:#228c5b;padding:18px 14px;border-radius:10px;border:2px solid #228c5b;margin-top:16px;font-weight:bold;font-size:1.1em;">
                    <span style="font-size:1.5em;margin-right:10px;">✅</span>
                    VERIFIED<br>
                    <span><strong>Name:</strong> ${found.name}</span><br>
                    <span><strong>Qualification:</strong> ${found.qualificationNumber}</span><br>
                    <span><strong>Level:</strong> ${found.level}</span><br>
                    <span><strong>Awarded By:</strong> ${found.awardedBy}</span><br>
                    <span><strong>Year:</strong> ${found.year}</span>
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
    }, Math.floor(Math.random() * 2000) + 2000); // 2000ms-4000ms = 2-4 seconds
});

// QR Scanner logic (unchanged)
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
