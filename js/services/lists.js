'user strict';

var app = angular.module('app');
/* Lists Service */

app.factory('ListsService', function() {
  return {
    getLists: function() {
      var lists = [
        {
          heading: 'Heading',
          description: 'Description',
          image: 'images/logo.png',
          time: '15m'
        }
      ]

      return lists;
    }
  }
});
