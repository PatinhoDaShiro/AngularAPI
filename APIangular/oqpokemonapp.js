angular.module('Blog', []);
angular.module('Blog').controller('Rest', function ($scope, $http, $location){
  let absUrl = $location.absUrl();
  let URL = absUrl.split("#/");
  $http.get('https://api-fake-blog.herokuapp.com/postagem/' + URL[1]).
      success(function(data) {
          $scope.publicacao = data;
      });});