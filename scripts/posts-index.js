// Load and display the list of blog posts on the index page

async function loadPosts() {
    const listEl = document.getElementById("posts");

    const posts = await fetch("/blog/posts/index.json").then((r) => r.json());

    console.log(posts);

    posts.forEach((post) => {
        const item = document.createElement("div");
        item.className = "post-item";
        item.innerHTML = `
      <h4 class="card-title"><a href="post.html?id=${post.id}">${post.title}</a></h4>
      <p>${post.date}</p>
      <hr>
    `;
        listEl.appendChild(item);
    });
}

loadPosts();
