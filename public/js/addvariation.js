document.addEventListener('DOMContentLoaded', function() {
    const variationSection = document.querySelector('.variation-section');
    const addVariationButton = document.getElementById('addVariation');
    const variationTemplate = document.getElementById('variationTemplate').cloneNode(true);

    // Remove the initial template from the DOM.
    // document.getElementById('variationTemplate').remove();

    // Function to handle deletion of variation
    function deleteVariation(event) {
        event.target.closest('.variation').remove();
    }

    // Function to handle image preview
    function handleImagePreview(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                // Find the closest `.upload-img-icon` container to place the preview
                var previewContainer = event.target.closest('.upload-img-icon');
                var imgPreview = previewContainer.querySelector('img');
                if (!imgPreview) {
                    imgPreview = document.createElement('img');
                    imgPreview.setAttribute('style', 'max-width: 100%; max-height: 100%; display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);');
                    previewContainer.appendChild(imgPreview);
                }
                imgPreview.src = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    // Function to add new variation
    function addVariation() {
        const clone = variationTemplate.cloneNode(true);
        clone.querySelector('.delete-variation').addEventListener('click', deleteVariation);
        clone.querySelector('.image-upload').addEventListener('change', handleImagePreview);
        variationSection.appendChild(clone);
    }

    // Initialize
    addVariationButton.addEventListener('click', addVariation);

    // Initial setup for dynamic elements (if any)
    document.querySelectorAll('.delete-variation').forEach(button => button.addEventListener('click', deleteVariation));
    document.querySelectorAll('.image-upload').forEach(input => input.addEventListener('change', handleImagePreview));
});
