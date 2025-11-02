const form = document.getElementById('uploadForm');
const resultDiv = document.getElementById('result');
const fileInput = document.getElementById('resumeFile');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
        resultDiv.textContent = "❌ Please select a file!";
        resultDiv.style.color = "red";
        return;
    }

    resultDiv.textContent = "⏳ Uploading...";
    resultDiv.style.color = "#243b55";

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("http://127.0.0.1:8000/resumes/upload", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            resultDiv.innerHTML = `
                ✅ <strong>${data.filename}</strong> uploaded successfully!<br><br>
                <strong>Resume ID:</strong> ${data.id}<br>
                <strong>Text Preview:</strong><br>${data.text_preview || 'No text extracted.'}
            `;
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = `❌ Error: ${data.detail || JSON.stringify(data)}`;
            resultDiv.style.color = "red";
        }
    } catch (error) {
        resultDiv.textContent = "❌ Network error: " + error;
        resultDiv.style.color = "red";
    }
});
