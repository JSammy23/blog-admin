const BASE_URL = 'http://localhost:3000';

export const loginUser = async (credentials) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error("Failed to log in");
    }

    const data = await response.json();
    localStorage.setItem('token', data.token);
    return data;
}