const BASE_URL = 'http://localhost:3000/posts';


export const fetchAllPosts = async () => {
    const token = localStorage.getItem('token');
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

export const fetchPostById = async (id) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch post");
    }

    const data = await response.json();
    return data;
};

export const createNewPost = async (postDetails) => {
    const token = localStorage.getItem('token'); 
    console.log(postDetails);

    const response = await fetch(`${BASE_URL}`, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
        body: JSON.stringify(postDetails)
    });

    if (!response.ok) {
        let errorMsg;
        // Check if the content-type is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            errorMsg = (await response.json()).message;
        } else {
            errorMsg = await response.text();
        }
    
        throw new Error(errorMsg || "Failed to create post");
    }

    const data = await response.json();
    return data;
};

export const updatePost = async (postId, postDetails) => {
    const token = localStorage.getItem('token'); 

    const response = await fetch(`${BASE_URL}/${postId}`, { 
        method: "PUT",  // Using PUT for update
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
        body: JSON.stringify(postDetails)
    });

    if (!response.ok) {
        let errorMsg;
        // Check if the content-type is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            errorMsg = (await response.json()).message;
        } else {
            errorMsg = await response.text();
        }
    
        throw new Error(errorMsg || "Failed to update post");
    }

    const data = await response.json();
    return data;
};