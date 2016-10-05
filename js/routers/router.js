app.config(function($routeProvider) {
    $routeProvider
    .when(
      "/",
      {
        templateUrl:"./templates/home.htm"
      }
    )
    .when(
      "/home",
      {
        templateUrl:"./templates/home.htm"
      }
    )
    .when(
      "/about",
      {
        templateUrl:"./templates/about.htm"
      }
    )
    .when(
      "/photos",
      {
        templateUrl:"./templates/photos.htm"
      }
    )
    .when(
      "/works",
      {
        templateUrl:"./templates/works.htm"
      }
    )
    .when(
      "/contact",
      {
        templateUrl:"./templates/contact.htm"
      }
    )
    .otherwise(
      {
        templateUrl:"./templates/404.htm"
      }
    )
  }
);
