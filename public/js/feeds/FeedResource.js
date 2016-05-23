(function() {
  angular.module('ProjectFour')
    .factory("FeedResource", FeedResource);

  FeedResource.$inject = ['$resource'];

  function FeedResource($resource) {
    return $resource(
      "/api/feeds/:id",
      {id: '@id'}, {
        'update': { method: 'PATCH'}
      }
    );
  }
})();
