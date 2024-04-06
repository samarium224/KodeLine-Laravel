document.addEventListener('DOMContentLoaded', function () {
    var dropzones = document.querySelectorAll('.dropzone');
    var fileInputs = document.querySelectorAll('[id^="product_img"]');
    var imagePreviews = document.querySelectorAll('[id^="image-preview"]');

    function displayImage(dropzoneIndex, file) {
        imagePreviews[dropzoneIndex].innerHTML = ''; // Clear existing images

        if (!file.type.startsWith('image/')) {
            alert('Please upload only image files.');
            return;
        }

        var reader = new FileReader();
        reader.onload = function(e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            imagePreviews[dropzoneIndex].appendChild(img);
        };
        reader.readAsDataURL(file);
    }

    dropzones.forEach(function(dropzone, index) {
        dropzone.addEventListener('click', function() {
            fileInputs[index].click();
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
            fileInputs[index].files = files;
            displayImage(index, files[0]);
        });
    });

    fileInputs.forEach(function(fileInput, index) {
        fileInput.addEventListener('change', function() {
            if (this.files.length !== 1) {
                alert('Please select only one image file.');
                return;
            }
            displayImage(index, this.files[0]);
        });
    });
});
