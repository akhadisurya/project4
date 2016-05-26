(function() {
  angular.module('ProjectFour')
    .controller("HomeController", HomeController)
    .controller("FeedListController", FeedListController)
    .controller("ShowFeedController", ShowFeedController)
    .controller("FeedNewController", FeedNewController)
    .controller("FeedEditController", FeedEditController);

    HomeController.$inject = ['FeedResource', '$http'];
    FeedListController.$inject = ['FeedResource', '$http'];
    ShowFeedController.$inject = ['FeedResource', '$stateParams'];
    FeedNewController.$inject = ['FeedResource', '$state'];
    FeedEditController.$inject = ['FeedResource', '$stateParams', '$state'];

    function FeedListController(FeedResource, $http) {
      var vm = this;
      vm.feeds = [];
      vm.names = {};
      vm.destroy = destroy;
      vm.getWords = getWords

      $http.get("/api/feeds").then(function(feeds) {
        vm.feeds = feeds.data.feeds;
        vm.names = feeds.data.names;
        // console.log(vm.names)
        // console.log(feeds.data.names)
        // console.log("your feeds", feeds)
      });

      function getWords(feed) {
           return feed.body.split(/\s+/).slice(0,30).join(" ") + "...";
      }

      function destroy(feedToDelete) {
        FeedResource.delete({id: feedToDelete._id}).$promise.then(function (response) {
          console.log(response.message);
          vm.feeds = vm.feeds.filter(function(feed) {
            return feed != feedToDelete;
          });
        });
      }

    }

    function HomeController(FeedResource, $http) {
      var vm = this;
      vm.feeds = [];
      vm.names = {};

      $http.get("/api/feeds").then(function(feeds) {
        vm.feeds = feeds.data.feeds;
        vm.names = feeds.data.names;
      });

      }

    function ShowFeedController(FeedResource, $stateParams) {
      var vm = this;
      var id = "";
      vm.feed = {};
      vm.names = {};
      vm.id = "";
      // vm.feed = id;

      // $http.get("http://localhost:3000/api/feeds/:id").then(function(feed) {
      //   vm.feed = feeds.data.feeds;
      //   console.log(vm.feed)
      //   vm.names = feeds.data.names;

      // });

      FeedResource.get({id: $stateParams.id}).$promise.then(function(jsonFeed) {
          vm.feed = jsonFeed;
          // console.log(vm.feed._id)
          //console.log(jsonFeed.postedBy)
          vm.names = jsonFeed.postedBy
          vm.id = vm.feed._id
          console.log(vm.id)
      });
    }

    function FeedNewController(FeedResource, $state) {
      var vm = this;
      vm.newFeed ={};

      vm.addFeed = addFeed;

      function addFeed() {
        FeedResource.save(vm.newFeed).$promise.then(function(jsonFeed) {
          //console.log(jsonFeed)
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
