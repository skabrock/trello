angular.module('app').controller('listsCtrl', function(listFactory) {
  console.log('listsCtrl');
  this.lists = listFactory.getList();

  this.addList = function() {
    console.log(this.listName);
    listFactory.addList(this.listName);
    this.listName = '';
  }
});
