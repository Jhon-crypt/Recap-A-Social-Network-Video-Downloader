<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Oladele John">
    <meta name="generator" content="Hugo 0.84.0">
    <title>Recap</title>

    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">

    <!-- Bootstrap core CSS -->
    <link href="./src/assets/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" href="./src/assets/font-awesome/css/font-awesome.css">

    <link rel="stylesheet" href="./src/assets/angular-loading-bar-master/angular-loading-bar-master/build/loading-bar.min.css" 
    type='text/css' media='all'>

    <!-- JavaScript Bundle with Popper -->
    <script src="./src/assets/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

    <!-- angular -->
    <script src="./src/assets/angular-1.8.2/angular.min.js"></script>

    <script src="./src/assets/angular-1.8.2/angular-route.min.js"></script>

    <script src="./src/assets/angular-loading-bar-master/angular-loading-bar-master/build/loading-bar.min.js"></script>

  </head>

  <body ng-app="recap">

    <header></header>

    <ng-view></ng-view>

    <script src="./src/modules/app.module.js"></script>
  
    <script src="./src/layout/headerLayout/header.layout.js"></script>

    <script src="./src/config/routeConfig/route.config.js"></script>

    <script src="./src/layout/homeLayout/home.layout.js"></script>

    <script src="./src/layout/downloadLayout/download.layout.js"></script>

    <script src="./src/controllers/searchVideoController/seach-video.controller.js"></script>

  </body>

</html>