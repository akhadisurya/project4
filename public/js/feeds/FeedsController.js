(function() {
  angular.module('ProjectFour')
    .controller("FeedListController", FeedListController)
    .controller("ShowFeedController", ShowFeedController)
    .controller("FeedNewController", FeedNewController)
    .controller("FeedEditController", FeedEditController);

    FeedListController.$inject = ['FeedResource'];
    ShowFeedController.$inject = ['FeedResource', '$stateParams'];
    FeedNewController.$inject = ['FeedResource', '$state'];
    FeedEditController.$inject = ['FeedResource', '$stateParams', '$state'];

    function FeedListController(FeedResource) {
      var vm = this;
      vm.feeds = [];
      vm.destroy = destroy;

      FeedResource.query().$promise.then(function(feeds) {
        vm.feeds = feeds;
      });

      function destroy(feedToDelete) {
        FeedResource.delete({id: feedToDelete._id}).$promise.then(function (response) {
          console.log(response.message);
          vm.feeds = vm.feeds.filter(function(feed) {
            return feed != feedToDelete;
          });
        });
      }
    }

    function ShowFeedController(FeedResource, $stateParams) {
      var vm = this;
      vm.feed = {};

      FeedResource.get({id: $stateParams.id}).$promise.then(function(jsonFeed) {
          vm.feed = jsonFeed;
      });
    }

    function FeedNewController(FeedResource, $state) {
      var vm = this;
      vm.newFeed = {};
      vm.addFeed = addFeed;

      function addFeed() {
        FeedResource.save(vm.newFeed).$promise.then(function(jsonFeed) {
          vm.newFeed = {};
          $state.go('FeedList')
          // $state.go('ShowFeed', {id: jsonFeed._id});
        });
      }
    }

    function FeedEditController(FeedResource, $stateParams, $state) {
      var vm = this;
      vm.feed = {};
      vm.editFeed = editFeed;

      FeedResource.get({id: $stateParams.id}).$promise.then(function(jsonFeed) {
          vm.feed = jsonFeed;
      });

      function editFeed() {
        FeedResource.update({id: vm.feed._id}, vm.feed).$promise.then(function(updatedFeed) {
          vm.feed = updatedFeed;
          $state.go('ShowFeed', {id: updatedFeed._id});
        });
      }
    }

})();
