angular.module('starter.controllers', ['ngCordova'])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    })

    .controller('MainCtrl', function ($scope, $cordovaCamera) {

        console.log('CameraController');

        $scope.photo = {};

        $scope.takePicture = function () {

            var options = {
                targetWidth: 150,
                targetHeight: 150,
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            takePhotoOrGallery(options);
        };

        $scope.openPhotoLibrary = function () {

            var options = {
                quality: 50,
                targetWidth: 150,
                targetHeight: 150,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            takePhotoOrGallery(options);
        };

        function takePhotoOrGallery(options) {

            $cordovaCamera.getPicture(options).then(function (imageData) {
                console.log(" PICTURE ", imageData);
                $scope.photo.imageDataField = imageData;
                $scope.photo.mediaTypeField = 'image/jpeg';
            }, function (error) {
                console.log(" ERROR ", error);
            });
        }



    })

    .controller('Main2Ctrl', function ($scope, $cordovaCamera, $ionicModal) {

        console.log('CameraController2');

        $scope.openCameraModeModal = function() {
            $scope.cameraModal.show();
        };

        $scope.closeCameraModal = function() {
            $scope.cameraModal.hide();

        };

        $ionicModal.fromTemplateUrl('templates/camera-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.cameraModal = modal;
        });

        $scope.photo = {};

        $scope.takePicture = function () {

            var options = {
                targetWidth: 150,
                targetHeight: 150,
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            takePhotoOrGallery(options);
        };

        $scope.openPhotoLibrary = function () {

            var options = {
                quality: 50,
                targetWidth: 150,
                targetHeight: 150,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            takePhotoOrGallery(options);
        };

        function takePhotoOrGallery(options) {

            $cordovaCamera.getPicture(options).then(function (imageData) {
                console.log(" PICTURE ", imageData);
                $scope.photo.imageDataField = imageData;
                $scope.photo.mediaTypeField = 'image/jpeg';
            }, function (error) {
                console.log(" ERROR ", error);
            });
        }



    });
