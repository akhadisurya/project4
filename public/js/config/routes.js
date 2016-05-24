(function() {
  angular.module('ProjectFour')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController',
        controllerAs: 'homeListVm'
      })
      .state('FeedList', {
        url: '/feeds/list',
        templateUrl: "js/feeds/feed-list.html",
        controller: 'FeedListController',
        controllerAs: 'feedListVm'
      })
      .state('ShowFeed', {
        url: '/feeds/feed/:id',
        templateUrl: 'js/feeds/show-feed.html',
        controller: 'ShowFeedController',
        controllerAs: 'showFeedVm'
      })
      .state('FeedNew', {
        url: '/feeds/new',
        templateUrl: 'js/feeds/feed-new.html',
        controller: 'FeedNewController',
        controllerAs: 'feedNewVm'
      })
      .state('feedEdit', {
        url: '/feeds/edit/:id',
        templateUrl: 'js/feeds/feed-edit.html',
        controller: 'FeedEditController',
        controllerAs: 'feedEditVm'
      })
      .state("signin", {
        url:          "/signin",
        templateUrl:  "/js/auth/signin.html",
        controller:   "SignInController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise('/');
  }
})();
