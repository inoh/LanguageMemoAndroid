var lm = (function () {
	var pictureUpload = function (sourceType) {
		navigator.camera.getPicture(function (imageUri) {
				var options = new FileUploadOptions(),
				    transfer = new FileTransfer(),
				    success = function () {
						$("#capture_label").html("アップロードが完了しました。");
				    },
				    error = function (error) {
						$("#capture_label").html("ERROR: " + error.code);
			    		throw "ERROR: " + error.code;
				    };

				options.fileKey = "document[upload_data]";
				options.fileName = imageUri.substr(imageUri.lastIndexOf('/')+1);
				options.mimeType = "image/jpeg";
				transfer.upload(imageUri, APPLICATION_URL + "/memos/1/documents.json", success, error, options);
			},
			function (message) {
				$("#capture_label").html(message);
				throw "error: " + message;
			},
			{
				quality: 50,
				destinationType: Camera.DestinationType.FILE_URI,
				sourceType: sourceType
			}
		);
	};

	return {
		getCamera: function () {
			pictureUpload (navigator.camera.PictureSourceType.CAMERA);
		},
		getLibrary: function () {
			pictureUpload (navigator.camera.PictureSourceType.PHOTOLIBRARY);
		}
	}
})();
