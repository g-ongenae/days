const count = () => {
    let counts = 0;

    const updateMessage = () => { 
        document
        .getElementById('message')
        .innerText = counts;
    };

    // Initialize
    updateMessage();

    const button = document
        .getElementById('counter');
    button.onclick = () => {
        counts++;
        updateMessage();
    };
};

// Start one first before first interval
count();

// Reset counter after 10s
setInterval(count, 10000)