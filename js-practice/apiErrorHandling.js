async function getPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Post:", data);
    } catch (error) {
        console.error("Failed to fetch:", error.message);
    } finally {
        console.log("API request completed.");
    }
}

getPosts();