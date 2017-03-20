console.log("list controller");
'use strict';

var app = angular.module('app');
/*Lists Controller*/
app.controller('ListController', ['$scope', '$http', 'ListsService', function($scope, $http ,ListsService) {
  $scope.lists = ListsService.getLists();
}]);

//controller logic for admin
app.controller('loginController', ['$scope' , '$location', '$window', function($scope, $location, $window){
    console.log("login controller called");

      $scope.valid = function (){
           $scope.admin = {  name     :  'admin',  //$scope.admin is used to call from model
                             password : 'admin',
                           };
               console.log($scope.admin.name);
               console.log($scope.admin.password);
            if($scope.admin.name === $scope.name && $scope.admin.password === $scope.password){
                     console.log("valid");
                     console.log($window);
                     $window.location.href = '#/manager';
                      //it is used to navigate through next page
              }

               else{
                window.alert("not an valid credentials");
                console.error("not valid credentials");
               }

              };
          }]);

//controller logic for crud operation that can be done in manager

app.controller('View1Ctrl', ['$scope','$http', function($scope, $http) {
    console.log("controller view1")
       //'$scope' is used for the hash and array declaration
       $scope.Manager_List = [{Id:1, Salary: 200, Name: "Manager1"},
                                {Id:2, Salary: 300, Name: "Manager2"}];
        $scope.Manager_Model = {
              Id: null ,
              Salary: null,
              Name: '',
            };
            $scope.check = function(){
                console.log($scope.Manager_List);
                return '';
            }
            $scope.AddData = function () {

                    var _manager = {
                      Id: $scope.Manager_List.length +1 ,
                      Salary:$scope.Manager_List.Salary,
                      Name: $scope.Manager_List.Name,
                    };
              $scope.Manager_List.push(_manager);
              return '';
             }

            $scope.DeleteData = function (manager) {
                console.log(manager);
                var _index = $scope.Manager_List.indexOf(manager);
                $scope.Manager_List.splice(_index, 1);
            }

            $scope.BindSelectedData = function (man) {
              console.log("bind data");
              console.log(man);
                $scope.Manager_List.Id     =  man.Id;
                $scope.Manager_List.Name   =  man.Name;
                $scope.Manager_List.Salary =  man.Salary;
            }

            $scope.UpdateData =  function () {
              //console.log("update action")
                $.grep($scope.Manager_List, function (e) {
                  console.log(e)
                    if (e.Id == $scope.Manager_List.Id) {
                        console.log("upadtion finish")
                        e.Name = $scope.Manager_List.Name;
                        e.Salary = $scope.Manager_List.Salary;
                    }
                });
            }
        }]);
app.controller('loginManager',  ['$scope' , '$location', '$window', function($scope, $location, $window){
    console.log("login_manager controller called");

       $scope.manager = [
          {name: "manager1" , password: 'manager1'},
          {name: "manager2", password: 'manager2'}
          ];

      $scope.valid_manager = function (){
               console.log($scope.manager[0].name);
               console.log($scope.manager.length);
      var flag = 0;
          for( var i = 0; i < $scope.manager.length; i++){

               if($scope.manager[i].name == $scope.name &&
                 $scope.manager[i].password == $scope.password)
               {
                    console.log("valid");
                    $window.location.href = '#/employee_crud';
                     //it is used to navigate through next page
                    flag++;
                 }
              }
          if(!flag){
            window.alert("not valid credential");
          }

   };
}]);

 app.controller('View2Ctrl', ['$scope', function($scope) {
        //" '$scope' is used for hash declaration of the main function in model"-->denotes the injector

            $scope.EmpList = [{Id:1, Salary: 200, Name: "muthu",password: 'pass'},
                               {Id:2, Salary: 300, Name: "vel", password: 'pass'}];

                $scope.AddData = function () {
                   var _employee = {
                      Id: $scope.EmpList.length+1,
                      Salary: $scope.EmpList.Salary,
                      Name: $scope.EmpList.Name,
                    }

                 $scope.EmpList.push(_employee);
                   //$scope.Authorisation.go('private');
                }
                $scope.DeleteData = function (emp) {
                    console.log(emp);
                    var _index = $scope.EmpList.indexOf(emp);
                    $scope.EmpList.splice(_index, 1);
                }
                $scope.BindSelectedData = function (Emp) {
                  console.log("bind data");

                   console.log(Emp);
                    $scope.EmpList.Id = Emp.Id;
                    $scope.EmpList.Name = Emp.Name;
                    $scope.EmpList.Salary = Emp.Salary;

                }
                 $scope.UpdateData =  function () {
                     console.log("update action")
                      $.grep($scope.EmpList, function (e) {
                        console.log(e)
                   if (e.Id == $scope.EmpList.Id) {
                            e.Name = $scope.EmpList.Name;
                            e.Salary = $scope.EmpList.Salary;
                        }
                    });
                }
}]);
app.controller('View3Ctrl', ['$scope', function($scope) {
       //'$scope' is used for hash declaration of the main function in model"-->denotes the injector
           $scope.EmpList = [{Id:1, Salary: 200, Name: "muthu",password: 'pass'},
                              {Id:2, Salary: 300, Name: "vel", password: 'pass'}];
}]);
