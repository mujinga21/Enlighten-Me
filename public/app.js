var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dpr5z3icw/image/upload';
var CLOUDINARY_UPLOAD_PRESET = 'lev9pkkj'; 

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var formDATA = new FormData();
    formDATA.append('file', file);
    formDATA.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios ({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formDATA
    }).then(function(res){
        console.log(res);
        imgPreview.src = res.data.secure_url;
    }).catch(function(err){
        console.log(err);
    });
});