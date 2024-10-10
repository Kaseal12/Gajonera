function checkName() {
    const nameInput = document.getElementById('name').value;
    const message = document.getElementById('message');
    const link = document.getElementById('link');
    
    if (!nameInput) {
        message.style.display = 'block';
        link.style.display = 'none';
    } else {
        message.style.display = 'none';
        link.click();
    }
}