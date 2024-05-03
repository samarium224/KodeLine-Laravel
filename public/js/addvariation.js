let DeleteBtn = document.querySelector('#deletevalue');
console.log(DeleteBtn);
document.addEventListener('DOMContentLoaded', function () {

    // const variationSection = document.querySelector('.variation-section');
    // const addVariationButton = document.getElementById('addVariation');
    // const variationTemplate = document.getElementById('variationTemplate').cloneNode(true);
    const AddOptionBtn = document.getElementById('addOptions');
    const DeleteColorOption = document.getElementById('deleteOption1');

    // Remove the initial template from the DOM.
    DeleteBtn.style.display = 'none';
    // document.getElementById('variationTemplate').remove();

    // Function to handle deletion of variation
    function deleteColorVariation(event) {
        let sizeOption = document.getElementById('option_menu1');
        sizeOption.remove();
    }

    // add option
    function addColorValue(){
        let Wrapper = document.getElementById('value_wrapper');
    }
    function addValue() {
        // Create elements
        DeleteBtn.style.display = 'block';
        let Wrapper = document.getElementById('value_wrapper');
        let ValueInputField = document.getElementById("optionInput").cloneNode(true);
        Wrapper.appendChild(ValueInputField);
        ValueInputField.querySelector('#deletevalue').addEventListener('click', removeValue);
    }

    // delete option value
    function removeValue(event) {
        const wrapper = document.getElementById("value_wrapper");
        let elements = wrapper.querySelectorAll("#optionInput");
        if (elements.length <= 1) return;
        event.target.closest("#optionInput").remove();
        if (elements.length === 2)
            DeleteBtn.style.display = "none";
    }

    // Initialize
    // addVariationButton.addEventListener('click', addVariation);
    AddOptionBtn.addEventListener('click', addValue);
    // Initial setup for dynamic elements (if any)
    DeleteBtn.addEventListener('click', removeValue);

});



// // Function to handle image preview
// function handleImagePreview(event) {
//     if (event.target.files && event.target.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             // Find the closest `.upload-img-icon` container to place the preview
//             var previewContainer = event.target.closest('.upload-img-icon');
//             var imgPreview = previewContainer.querySelector('img');
//             if (!imgPreview) {
//                 imgPreview = document.createElement('img');
//                 imgPreview.setAttribute('style', 'max-width: 100%; max-height: 100%; display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);');
//                 previewContainer.appendChild(imgPreview);
//             }
//             imgPreview.src = e.target.result;
//         };
//         reader.readAsDataURL(event.target.files[0]);
//     }
// }


// Function to add new variation
// function addVariation() {
//     const clone = variationTemplate.cloneNode(true);
//     clone.querySelector('#addOptions').addEventListener('click', addValue);
//     clone.querySelector('#deletevalue').addEventListener('click', removeValue);
//     clone.querySelector('#deleteOption1').addEventListener('click', deleteSizeVariation);
//     clone.querySelector('#deleteOption2').addEventListener('click', deleteColorVariation);

//     variationSection.appendChild(clone);
// }
