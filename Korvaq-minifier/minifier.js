document.getElementById('minifyButton').onclick = function() {
    const inputCode = document.getElementById('inputCode').value;
    const minifiedCode = minifyCode(inputCode);
    document.getElementById('outputCode').textContent = minifiedCode;

    // Show the copy and download buttons after minification
    document.getElementById('copyButton').style.display = 'block';
    document.getElementById('downloadButton').style.display = 'block';
};

document.getElementById('copyButton').onclick = function() {
    const minifiedCode = document.getElementById('outputCode').textContent;
    navigator.clipboard.writeText(minifiedCode).then(() => {
        alert('Minified code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};

// Handle file upload
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('inputCode').value = e.target.result;
        };
        reader.readAsText(file);
    }
});

// Download minified code as a file
document.getElementById('downloadButton').onclick = function() {
    const minifiedCode = document.getElementById('outputCode').textContent;
    const blob = new Blob([minifiedCode], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'minified.ks'; // Change the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

/* --------------------------------------------------
* Minifier
* -------------------------------------------------- */
function minifyCode(code) {
    return code
        // Preserve whitespace within strings and template literals
        .replace(/(["'`])(.*?)\1/g, (match) => {
            return match.replace(/\s+/g, ' ');
        })
        // Remove multi-line comments
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Remove single-line comments
        .replace(/\/\/.*$/gm, '')
        // Trim leading and trailing whitespace from each line
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0) // Remove empty lines
        .join('\n')
        // Remove unnecessary whitespace
        .replace(/\s+/g, ' ')
        // Optimize control structures
        .replace(/(if|for|while|switch|do)\s*\(\s*([^()]*?)\s*\)\s*([^{]*?){/g, '$1($2){')
        // Remove unused function parameters (basic implementation)
        .replace(/function\s+\w+\(([^)]*)\)\s*{([^]*)/g, (match, params, body) => {
            const usedParams = [];
            body.replace(/(\b\w+\b)/g, (param) => {
                if (params.includes(param) && !usedParams.includes(param)) {
                    usedParams.push(param);
                }
            });
            const filteredParams = params.split(',').filter(param => usedParams.includes(param.trim())).join(',');
            return `function(${filteredParams}){${body}`;
        });
}
