const BASE_URL = 'http://localhost:3000/posts';
const token = localStorage.getItem('token');

export const fetchAllPosts = async () => {
    const response = await fetch(`${BASE_URL}/all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    console.log(data);
    return data;
};