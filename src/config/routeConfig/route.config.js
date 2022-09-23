app.config(function($routeProvider){

    $routeProvider
    .when("/", {
        templateUrl : "./src/pages/homePage/home.page.html"
    })
    .when("/download", {
        templateUrl : "./src/pages/downloadPage/download.page.html"
    })

});