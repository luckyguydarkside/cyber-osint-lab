// Simulating a terminal output effect
const terminalOutput = document.getElementById("terminal-output");
const cursor = document.createElement("span");
cursor.className = "cursor";
cursor.textContent = "|";
terminalOutput.appendChild(cursor);

const messages = [
    "Scanning network...",
    "Identifying devices...",
    "Fetching data...",
    "Analyzing vulnerabilities...",
    "Generating report..."
];

let index = 0;

function typeMessage() {
    if (index < messages.length) {
        const message = messages[index];
        const textNode = document.createTextNode(message);
        terminalOutput.appendChild(textNode);
        index++;
        setTimeout(() => {
            terminalOutput.removeChild(textNode);
            typeMessage();
        }, 2000);
    } else {
        cursor.style.display = "none";
    }
}

typeMessage();

// Interactive button for data visualization
const visualizeBtn = document.getElementById("visualize-btn");
visualizeBtn.addEventListener("click", () => {
    const data = [5, 10, 15, 20, 25];
    drawChart(data);
});

function drawChart(data) {
    const chart = document.getElementById("data-chart");
    chart.innerHTML = ""; // Clear previous chart
    data.forEach((value, index) => {
        const bar = document.createElement("div");
        bar.style.height = `${value * 10}px`;
        bar.style.width = "20px";
        bar.style.backgroundColor = "teal";
        bar.style.margin = "2px";
        bar.style.display = "inline-block";
        bar.title = `Value: ${value}`;
        chart.appendChild(bar);
    });
}

// Blinking cursor effect
setInterval(() => {
    cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
}, 500);
```