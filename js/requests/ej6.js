async function ejemploURLSearchParams() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    
    const params = new URLSearchParams();
    params.append('title', 'Monitor 4K');
    params.append('body', 'Pantalla IPS 32 pulgadas');
    params.append('userId', '1');

    const producto = {
        title: "Monitor 4K",
        body: "Pantalla IPS 32 pulgadas",
        userId: "1"
    };

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: params // === new URLSearchParams(producto) 
        });
    } catch (err) {
        console.error("Error:", err);
    }
}