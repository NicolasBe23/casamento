document.getElementById('rsvpForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    
    const response = await fetch('/api/confirm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    });

    if (response.ok) {
        document.getElementById('confirmationMessage').textContent = 'Presença confirmada com sucesso!';
        document.getElementById('rsvpForm').reset();
    } else {
        document.getElementById('confirmationMessage').textContent = 'Ocorreu um erro. Tente novamente.';
    }
});
