const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#postTitle").value.trim();
  const post = document.querySelector("#postText").value.trim();

  console.log(title);
  console.log(post);

  if (post && title) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, post }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/users");
    } else {
      alert("Failed to create post");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
