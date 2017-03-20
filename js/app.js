'use strict';

angular.module('app', [
    'ui.router',
    'ngAnimate',
    'ngStorage',
    'oc.lazyLoad'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/', '/list'),
    $urlRouterProvider.otherwise('/list'),

    $stateProvider.state('base', {
        'abstract': !0,
        url: '',
        templateUrl: 'views/base.html'
    })
    .state('list', {
        url: '/list',
         parent: 'base',
         templateUrl: 'views/list.html',
         resolve: { login: function($ocLazyLoad) {
           return $ocLazyLoad.load({
             name: 'app',
             files: ['js/controllers/ListsController.js', 'js/services/lists.js']
          })
        }
      }
    })
    .state('login', {
       url: '/admin',
       parent: 'base',
       templateUrl: 'views/admin.html',

      //   resolve: { login: function($ocLazyLoad) {
      //   //does not load a index.html in all calling while single.html
      //     return $ocLazyLoad.load({
      //       name: 'app',
      //       //xfiles: ['js/controllers/ListsController.js', 'js/services/lists.js']
      //     })
      //   }
      // }
    })
    .state('View1Ctrl', {
      url: '/manager',
      parent: 'base',
      templateUrl: 'views/admin_crud.html',
  //     resolve: { login: function($ocLazyLoad) {
  //     //does not load a index.html in all calling while single.html
  //     return $ocLazyLoad.load({
  //     name: 'app',
  //       //files: ['js/controllers/ListsController.js', 'js/services/lists.js']
  //     })
  //   }
  // }
})

.state('loginManager', {
    url: '/manager_login',
      parent: 'base',
      templateUrl: 'views/manager_login.html',
//      resolve: { login: function($ocLazyLoad) {
//        //does not load a index.html in all calling while single.html
//        return $ocLazyLoad.load({
//        name: 'app',
//       //files: ['js/controllers/ListsController.js', 'js/services/lists.js']
//       })
//      }
//    }
  })
  .state('View2Ctrl ', {
    url: '/employee_crud',
      parent: 'base',
       templateUrl: 'views/employee_crud.html',
  //      resolve: { login: function($ocLazyLoad) {
  //        //does not load a index.html in all calling while single.html
  //       return $ocLazyLoad.load({
  //       name: 'app',
  //    //files: ['js/controllers/ListsController.js', 'js/services/lists.js']
  //       })
  //      }
  //    }
}).
state('View3Ctrl ', {
  url: '/employee',
    parent: 'base',
     templateUrl: 'views/employee.html',
   })

}]);
