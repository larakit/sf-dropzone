Dropzone.autoDiscover = false;
LarakitJs.initSelector('.js-dropzone', function () {
    console.log(123);
    var self = $(this);
    self.dropzone({
        url: '/thumb-upload',
        maxFilesize: 1, // MB
        parallelUploads: 2, //limits number of files processed to reduce stress on server
        addRemoveLinks: true,
        accept: function (file, done) {
            // TODO: Image upload validation
            //done();
            console.log(file, done);
        },
        sending: function (file, xhr, formData) {
            // Pass token. You can use the same method to pass any other values as well such as a id to associate the image with for example.
            formData.append('vendor', 'larakit');
            formData.append('entity', 'model');
            console.log(file, xhr, formData);
            //formData.append("_token", $('[name=_token').val()); // Laravel expect the token post value to be named _token by default
        },
        init: function () {
            this.on("success", function (file, response) {
                console.log('success');
                console.log(file, response);
                // On successful upload do whatever :-)
            });
        }
    });
});