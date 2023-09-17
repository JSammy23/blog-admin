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

export const createNewPost = async (postDetails) => {
    const token = localStorage.getItem('token'); 

    const response = await fetch(`${BASE_URL}/posts`, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
        body: JSON.stringify(postDetails)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create post");
    }

    const data = await response.json();
    return data;
};