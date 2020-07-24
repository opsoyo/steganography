///
*
* Console script to replace image on
* the imatag.com/watermarking-demo/
* website for stress testing images
* which have already been watermarked.
*
///

(async function() {
    let url = "https://example.com/image_to_test.jpg";
    let blob = await fetch(url).then(r => r.blob());
    let dataUrl = await new Promise(resolve => {
      let reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
    document.querySelector('.cropper-canvas img').src = url;
    document.querySelector('#cropped-preview').src = url;
    document.querySelector('.cropper-view-box img').src = dataUrl;
})();
