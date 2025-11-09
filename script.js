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

// Certificates data with full details (deduplicated, flat array, fixed commas and year formatting)
// REMOVED: Deyana Kolyova Mincheva and Iliya Ivanov Minchev
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
  },
  {
    name: "Anton Zapryankov Atanasov",
    qualificationNumber: "NC-119/4553/1A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2024-05-15T00:00:00.000Z"
  },
  {
    name: "Natasha Rozova Gadzheva",
    qualificationNumber: "NC-122/2239/1A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2024-04-22T00:00:00.000Z"
  },
  {
    name: "Melekber Hyusein Ali",
    qualificationNumber: "NC-203/1001/2A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-06-16T00:00:00.000Z"
  },
  {
    name: "Tunka Botyova Popova",
    qualificationNumber: "NC-511/9549/5A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-08-15T00:00:00.000Z"
  },
  {
    name: "Vizhdan Alish Ali",
    qualificationNumber: "NC-402/1422/4A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-07-10T00:00:00.000Z"
  },
  {
    name: "Yanko Krumov Asenov",
    qualificationNumber: "NC-502/2980/1A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-01-25T00:00:00.000Z"
  },
  {
    name: "Yanko Iliev Yankov",
    qualificationNumber: "NC-399/3677/3A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2020-05-15T00:00:00.000Z"
  },
  {
    name: "Iskra Plamenova Stoyanova",
    qualificationNumber: "NC-235/6223/2A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-05-01T00:00:00.000Z"
  },
  {
    name: "Boyko Todorov Todorov",
    qualificationNumber: "NC-446/1599/4A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-08-13T00:00:00.000Z"
  },
  {
    name: "Strahil Yankov Yankov",
    qualificationNumber: "NC-521/3641/7A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-07-22T00:00:00.000Z"
  },
  {
    name: "Daniela Delcheva Ilieva",
    qualificationNumber: "NC-233/9943/3A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-07-30T00:00:00.000Z"
  },
  {
    name: "Silvana Lyubenova Angelova",
    qualificationNumber: "NC-154/5412/6A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-08-11T00:00:00.000Z"
  },
  {
    name: "Asen Ivanov Stoyanov",
    qualificationNumber: "NC-818/1177/5A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-06-29T00:00:00.000Z"
  },
  {
    name: "Zhivko Naydenov Kostov",
    qualificationNumber: "NC-266/6254/4A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-07-13T00:00:00.000Z"
  },
  {
    name: "Tereza Sashova Bogdanova",
    qualificationNumber: "NC-785/2883/3A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-09-01T00:00:00.000Z"
  },
  {
    name: "Stanislav Nikolaev Shushnev",
    qualificationNumber: "NC-399/4937/8A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-08-23T00:00:00.000Z"
  },
  {
    name: "Sashka Andreeva Yankova",
    qualificationNumber: "NC-312/8842/9A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-08-03T00:00:00.000Z"
  },
  // REMOVED: Iliya Ivanov Minchev
  // REMOVED: Deyana Kolyova Mincheva
  {
    name: "Dora Ilieva Ilieva",
    qualificationNumber: "NC-165/2278/3A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2021-10-18T00:00:00.000Z"
  },
  {
    name: "Vanya Emilieva Pareva",
    qualificationNumber: "NC-557/9410/5A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-08-04T00:00:00.000Z"
  },
  {
    name: "Mihail Yanev Petrov",
    qualificationNumber: "NC-899/3157/4A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-09-25T00:00:00.000Z"
  },
  {
    name: "Stoyan Ivanov Kolev",
    qualificationNumber: "NC-164/9845/6A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-04-19T00:00:00.000Z"
  },
  {
    name: "Vasil Asenov Stoyanov",
    qualificationNumber: "NC-451/3331/1A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2022-10-05T00:00:00.000Z"
  },
  {
    name: "Borislav Goshov Iliev",
    qualificationNumber: "NC-728/1197/8A",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2021-12-21T00:00:00.000Z"
  },

  // --- NEW ENTRIES ADDED (matching Website 1 format) ---
  {
    name: "Ivelina Angelova Yankova",
    qualificationNumber: "NC-412/8790/3B",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-05-14T00:00:00.000Z"
  },
  {
    name: "Mariana Sirenarska",
    qualificationNumber: "NC-417/2055/6C",
    verified: true,
    level: "Level 3 Diploma in Business Administration (RQF)",
    awardedBy: "NCC (RQF by Ofqual)",
    year: "2023-06-20T00:00:00.000Z"
  },
    {
  name: "Sefer Verhatov Hadzhiev",
  qualificationNumber: "NC-634/4821/4A",
  verified: true,
  level: "Level 3 Diploma in Business Administration (RQF)",
  awardedBy: "NCC (RQF by Ofqual)",
  year: "2023-04-11T00:00:00.000Z"
},
{
  name: "Aksinia Iliyazova Hadzhieva",
  qualificationNumber: "NC-418/7623/9B",
  verified: true,
  level: "Level 3 Diploma in Business Administration (RQF)",
  awardedBy: "NCC (RQF by Ofqual)",
  year: "2023-07-05T00:00:00.000Z"
},
{
  name: "Yanko Hristov Zavratchiyski",
  qualificationNumber: "NC-536/7011/5A",
  verified: true,
  level: "Level 3 Diploma in Business Administration (RQF)",
  awardedBy: "NCC (RQF by Ofqual)",
  year: "2023-06-12T00:00:00.000Z"
},
{
  name: "Galya Nikolova Naydenova",
  qualificationNumber: "NC-604/2973/3Y",
  verified: true,
  level: "Level 3 Diploma in Business Administration (RQF)",
  awardedBy: "NCC (RQF by Ofqual)",
  year: "2022-03-17T00:00:00.000Z"
}
];

// Remove duplicate names (keep only first occurrence)
const seen = new Set();
const uniqueCertificates = certificates.filter(c => {
  const key = (c.name + "|" + c.qualificationNumber).toLowerCase();
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

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
        const found = uniqueCertificates.find(cert =>
            cert.qualificationNumber.trim().toLowerCase() === qualificationNumber.toLowerCase() &&
            cert.name.trim().toLowerCase() === candidateName.toLowerCase()
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
