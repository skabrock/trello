angular.module('app').factory('cardFactory', function() {
  var service = {};

  var cards = [
    {
      id: 1,
      description: 'Fix bug in player',
      list_id: 1
    }, {
      id: 2,
      description: 'Add feature with D3',
      list_id: 2
    }, {
      id: 3,
      description: 'Liarn AngularJS',
      list_id: 3
    }
  ];

  service.getCards = function(list) {
    return _.filter(cards, { list_id: list.id })
  };

  service.createCard = function(list, cardDescription) {
    cards.push({
      id: _.uniqueId('card_'),
      description: cardDescription,
      list_id: list.id
    })
  }

  return service;
});
