document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.getElementById('terminal-output');
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.className = 'cursor';
    terminalOutput.appendChild(cursor);

    const messages = [
        "Initializing OSINT tools...",
        "Gathering data from sources...",
        "Analyzing information...",
        "Data retrieval complete!",
        "Generating report...",
    ];

    let messageIndex = 0;
    function displayMessage() {
        if (messageIndex < messages.length) {
            terminalOutput.innerHTML += `<div>${messages[messageIndex]}</div>`;
            messageIndex++;
            setTimeout(displayMessage, 2000);
        } else {
            cursor.style.display = 'none'; // Hide cursor after messages
        }
    }
    displayMessage();

    const updateButton = document.getElementById('update-data');
    const dataDisplay = document.getElementById('data-display');

    updateButton.addEventListener('click', () => {
        const currentTime = new Date().toLocaleTimeString();
        dataDisplay.innerHTML += `<div>Data updated at ${currentTime}</div>`;
    });

    setInterval(() => {
        cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500);
});
```

This JavaScript code simulates a terminal output for an OSINT web project, displaying messages sequentially with a blinking cursor effect. It also includes a button to dynamically update data on the dashboard with the current time.