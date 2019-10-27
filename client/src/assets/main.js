$(document).ready(function(){
    $('#popup1').popup({
        transition: 'all 0.3s'
      });
});

var app=angular.module("form",[])
.controller("formController", function($scope,$http){
  $scope.form={search: ''};
  $scope.submit = function(){
    var config = {
      method: 'post',
      url: 'http://localhost/api/list.php',
      data: {
        'search' : $scope.form.search
      }
    };
    var request = $http(config);
    request.then(function(response){
      for(var i=0;i<response.data['data'].length;i++){
        $("#ailments").append(
          "<div class='card' style='color: black; width: 70%;'><div class='card-header'><h3 class='card-title'><strong>Diagnosis: </strong>"+response.data['data'][i]['ailment']+"</h3></div><div class='card-block' style='padding: 20px;'><strong>Severity: </strong>"+response.data['data'][i]['severity']+"</div><div class='card-footer'><strong>Symptoms: </strong>"+response.data['data'][i]['symptoms']+"<br><strong>Medicines: </strong>"+response.data['data'][i]['medicine']+"</div></div><br><br>"
        )
      }
    },
    function(error){
      console.log(error.data);
    });
  }
});