const form = document.getElementById('uploadForm');
const gallery = document.getElementById('gallery');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  errorDiv.textContent = '';

  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const imageUrl = document.getElementById('imageUrl').value.trim();

  if (!title || !description || !imageUrl) {
    errorDiv.textContent = 'Please fill in all fields.';
    return;
  }

  if (!isValidImageURL(imageUrl)) {
    errorDiv.textContent = 'Please enter a valid image URL (must end with .jpg, .jpeg, .png, .webp, .gif).';
    return;
  }

  const artElement = document.createElement('div');
  artElement.className = 'artwork';

  artElement.innerHTML = `
    <img src="${imageUrl}" alt="${title}" />
    <div class="desc">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
  `;

  gallery.prepend(artElement);

  form.reset();
});

function isValidImageURL(url) {
  return /(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif))/i.test(url);
}