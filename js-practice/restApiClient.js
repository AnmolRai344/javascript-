const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    return response.json();
}

async function createPost(post) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    });

    if (!response.ok) {
        throw new Error("Failed to create post");
    }

    return response.json();
}

async function run() {
    try {
        const posts = await getPosts();

        console.log("Posts:", posts.slice(0, 5));

        const newPost = await createPost({
            title: "Learning JavaScript",
            body: "Practicing API development",
            userId: 1
        });

        console.log("Created post:", newPost);
    } catch (error) {
        console.error(error.message);
    }
}

run();