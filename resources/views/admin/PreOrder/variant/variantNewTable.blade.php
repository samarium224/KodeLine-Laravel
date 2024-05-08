<form action="{{ route('preorder.variant.store') }}" method="post">
    @csrf
    <div class="card variation-section">
        <input type="hidden" value="{{ $product->id }}" name="product_id">
        <div class="card-body">
            <div class="row mb-2">
                <div class="col-md-12">
                    <div class="card-subtitle text-dark"><b>Add variation</b></div>
                </div>
                {{-- <div class="text-left mx-3">
            <button class="btn btn-light btn-sm" type="button" id="addVariation"><i class="fa fa-plus"></i> Add
                Options like size and color</button>
        </div> --}}
            </div>
            <div id="variationTemplate">
                <div class="forsize variation" id="option_menu1">
                    <div class="mb-1 mx-4">
                        <div class="card-subtitle">Option Name</div>
                        <div class="card-subtitle">First add all the color variants</div>
                    </div>
                    <div class="row mx-3">
                        <div class="col-md-11">
                            <select name="variation_option" id="variation_option" class="form-control">
                                <option value="color" selected>
                                    Color
                                </option>
                            </select>
                        </div>
                        {{-- <div class="col-md-1" id="deleteOption1">
                    <i class="fa fa-trash-o delete-variation mt-2"
                        style="font-size: 20px; color: #4d4d4d; cursor: pointer;"></i>
                </div> --}}
                    </div>
                    <div class="optionvalue">
                        <div class="row mb-1 mx-3">
                            <div class="card-subtitle mx-3">Option Values</div>
                        </div>
                        <div id="value_wrapper">
                            <div class="row mx-3 mb-2" id="optionInput">
                                <div class="col-md-11">
                                    <input type="text" id="variation_value" name="ColorValues[]"
                                        placeholder="e.g. Light Blue" class="form-control" required>
                                </div>
                                <div class="col-md-1" id="deletevalue">
                                    <i class="fa fa-trash-o delete-variation mt-2"
                                        style="font-size: 20px; color: #4d4d4d; cursor: pointer;"></i>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-light btn-sm mx-3" id="addOptions">
                            <i class="fa fa-plus"></i> Add another option</button>
                    </div>
                </div>
            </div>
            <button class="btn btn-sm btn-dark mt-3" type="submit">Save</button>
        </div>
    </div>
</form>
