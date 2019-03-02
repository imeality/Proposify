var app=angular.module('myapp',[]);
 app.controller('myctrl', function($scope){

    $scope.myusers=[{username:'user',password:'12345'},
                    {username:'user1',password:'1234'}];
$scope.submit=function() {
    if ($scope.username && $scope.password) {
        var user=$scope.username;
        var pwd=$scope.password;
        alert("welcome "+ user);

        $scope.myusers.push({username:user});
    } else{
        alert("invalid input");
    }   
}
 });



 