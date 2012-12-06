var lm = (function () {
	//var APPLICATION_URL = "http://lmt.ruby.iijgio.com"
	var APPLICATION_URL = "http://192.168.1.25:3000";
	var memo_id;
	var pictureUpload = function (sourceType) {
		navigator.camera.getPicture(function (imageUri) {
				var options = new FileUploadOptions(),
				    transfer = new FileTransfer(),
				    success = function () {
						alert("アップロードが完了しました。");
						$('.ui-dialog').dialog('close');
				    },
				    error = function (error) {
						alert("ERROR: " + error.code);
			    		throw "ERROR: " + error.code;
				    };

				options.fileKey = "document[upload_data]";
				options.fileName = imageUri.substr(imageUri.lastIndexOf('/')+1);
				options.mimeType = "image/jpeg";
				transfer.upload(imageUri, APPLICATION_URL + "/memos/" + memo_id + "/documents.json", success, error, options);
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
		URL: APPLICATION_URL,
		getCamera: function () {
			pictureUpload (navigator.camera.PictureSourceType.CAMERA);
		},
		getLibrary: function () {
			pictureUpload (navigator.camera.PictureSourceType.PHOTOLIBRARY);
		},
		setId: function (id) {
			memo_id = id;
		}
	}
})();
