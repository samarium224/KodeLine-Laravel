<?php

namespace App\Http\Controllers;

use App\Models\TempFiles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ImageController extends Controller
{
    //upload the image on a temporary file
    public function MultiUpload(Request $request)
    {

        $validator = $request->validate([
            'product_img' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ]);

        if ($request->hasFile('product_img')) {
            $image = $request->file('product_img');
            $timestamp = microtime(true) * 10000; // High resolution timestamp
            $randomString = bin2hex(random_bytes(5)); // Generates a random string
            $image_name = $timestamp . '_' . $randomString . '.' . $image->getClientOriginalExtension();
            $folder = uniqid('img-', true);
            $image->move(public_path('uploads/temp/' . $folder), $image_name);

            TempFiles::create([
                'folder' => $folder,
                'file' => $image_name,
            ]);

            return $folder;
        }

        return '';
    }

    public function RevertImgUpload(Request $request)
    {
        $folder = $request->getContent();
        $temporaryImg = TempFiles::where('folder', $folder)->first();

        if ($temporaryImg) {
            $imageFile = 'uploads/temp/' . $folder;
            $imagePath = public_path($imageFile);
            File::deleteDirectory($imagePath);

            $temporaryImg->delete();
        }

        return response()->noContent();
    }


    public function RemoveImages()
    {
        // remove the list of stored images
        $temporaryImages = TempFiles::all();

        foreach ($temporaryImages as $temporaryImage) {
            //delete temp images
            $temporaryImage->delete();
        }

        //delete old temp files
        $FilePath = 'uploads/temp';
        File::deleteDirectory($FilePath);

        return response()->noContent();
    }


}
