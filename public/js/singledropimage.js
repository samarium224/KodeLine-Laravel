document.addEventListener('DOMContentLoaded', function () {
    var dropzone = document.getElementById('dropzone');
    var fileInput = document.getElementById('product_img');
    var imagePreview = document.getElementById('image-preview');

    function displayImage(file) {
        imagePreview.innerHTML = ''; // Clear existing images

        if (!file.type.startsWith('image/')) {
            alert('Please upload only image files.');
            return;
        }

        var reader = new FileReader();
        reader.onload = function(e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }

    dropzone.addEventListener('click', function() {
        fileInput.click();
    });

    dropzone.addEventListener('dragover', function(e) {
        e.preventDefault();
        dropzone.classList.add('over');
    });

    dropzone.addEventListener('dragleave', function(e) {
        e.preventDefault();
        dropzone.classList.remove('over');
    });

    dropzone.addEventListener('drop', function(e) {
        e.preventDefault();
        dropzone.classList.remove('over');

        var files = e.dataTransfer.files;
        if (files.length !== 1) {
            alert('Please drop only one image file.');
            return;
        }
        fileInput.files = files;
        displayImage(files[0]);
    });

    fileInput.addEventListener('change', function() {
        if (this.files.length !== 1) {
            alert('Please select only one image file.');
            return;
        }
        displayImage(this.files[0]);
    });
});
