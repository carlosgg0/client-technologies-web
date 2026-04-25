const URL = "https://example.org/gets";

(async function() {
    const params = new URLSearchParams();
    params.append("nombreusuario", "carlos009");    
    params.append("password", "1234");
    params.append("idusuario", "5023948");

    const request = new Request(`${URL}?${params}`);

    console.log(request);

    try {
        const response = await fetch(request);
        if (!response.ok) {
            throw new Error("Error status:", response.status);
        }
        const responseText = await response.text();
        console.log(responseText);
    } catch (err) {
        console.log("Error:", err);
    }
    
}) ();