let filearray = [];
var images = [];
var dropzone = document.getElementById('dropzone');
var fileInput = document.getElementById('product_img');
var imagePreview = document.getElementById('image-preview');

function displayImages(files) {
    // imagePreview.innerHTML = ''; // Clear existing images

    Array.from(files).forEach(file => {
        if (!file.type.startsWith('image/')) {
            alert('Please upload only image files.');
            return;
        }

        filearray.push(file);

        var reader = new FileReader();
        reader.onload = function (e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}

dropzone.addEventListener('click', function () {
    fileInput.click();
});

dropzone.addEventListener('dragover', function (e) {
    e.preventDefault();
    dropzone.classList.add('over');
});

dropzone.addEventListener('dragleave', function (e) {
    e.preventDefault();
    dropzone.classList.remove('over');
});

dropzone.addEventListener('drop', function (e) {
    e.preventDefault();
    dropzone.classList.remove('over');

    var files = e.dataTransfer.files;
    if (files.length > 5) {
        alert('You can upload a maximum of 5 images.');
        return;
    }
    fileInput.files = files;
    displayImages(files);
});

fileInput.addEventListener('change', function () {
    if (this.files.length > 5) {
        alert('You can upload a maximum of 5 images.');
        return;
    }
    displayImages(this.files);
    console.log(filearray);
});

