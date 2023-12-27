const imageContainer = document.getElementById("image-container");

axios
  .get("../data/images.json")
  .then((response) => {
    const images = response.data.images;

    images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.url;
      imgElement.alt = `Image ${image.id}`;
      imgElement.classList.add("image-item");
      imageContainer.appendChild(imgElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching images:", error);
  });
