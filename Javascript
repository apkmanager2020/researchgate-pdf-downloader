document.getElementById('downloadBtn').addEventListener('click', function() {
    var rgLink = document.getElementById('rgLink').value;
    if (rgLink) {
        // Call the backend (e.g., a Node.js server or Python script) to handle downloading the PDF
        document.getElementById('message').innerText = "Attempting to download PDF...";
        
        // Example: Trigger a fetch request to the server
        fetch('your-server-url/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: rgLink })
        })
        .then(response => response.blob())
        .then(blob => {
            // Create a link element, use it to download the PDF
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'research.pdf';
            link.click();
            document.getElementById('message').innerText = "Download successful!";
        })
        .catch(error => {
            document.getElementById('message').innerText = "Error: Unable to download the PDF.";
        });
    } else {
        document.getElementById('message').innerText = "Please enter a valid ResearchGate URL.";
    }
});
