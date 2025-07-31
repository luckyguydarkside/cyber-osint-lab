document.addEventListener('DOMContentLoaded', () => {
    const dashboard = document.getElementById('dashboard-container');
    
    // Simulate terminal output
    const terminalOutput = [
        'Initializing OSINT tools...',
        'Scanning for open ports...',
        'Collecting metadata...',
        'OSINT analysis complete!'
    ];

    let index = 0;
    const outputTerminal = () => {
        if (index < terminalOutput.length) {
            const p = document.createElement('p');
            p.textContent = terminalOutput[index++];
            dashboard.appendChild(p);
            setTimeout(outputTerminal, 1000);
        }
    };

    outputTerminal();
});