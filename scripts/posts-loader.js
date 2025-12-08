// Load and render a blog post based on the 'id' query parameter in the URL

function getPostId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

async function loadPost() {
    const id = getPostId();
    const contentEl = document.getElementById("content");

    if (!id) {
        contentEl.innerHTML = "<p>No post specified.</p>";
        return;
    }

    try {
        const md = await fetch(`/blog/posts/${id}.md`).then((r) => r.text());
        contentEl.innerHTML = marked.parse(md);
    } catch (err) {
        contentEl.innerHTML = "<p>Post not found.</p>";
    }
}

loadPost();
