document.getElementById('rsvpForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    console.log(name)
    const response = await fetch('/api/confirm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    });
    console.log(response)
    if (response.ok) {
        document.getElementById('confirmationMessage').textContent = 'Presença confirmada com sucesso!';
        document.getElementById('rsvpForm').reset();
    } else {
        document.getElementById('confirmationMessage').textContent = 'Ocorreu um erro. Tente novamente.';
    }
});
