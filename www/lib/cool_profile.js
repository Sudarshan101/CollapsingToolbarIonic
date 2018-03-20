angular.module('ion-cool-profile', [])
  .directive('ionParallaxProfile', function($ionicScrollDelegate, $document) {
    return {
      restrict: 'A',
      link: function(scope, elm, attr) {
        elm.bind('scroll', function() {
          scope.scroll();
        });
        elm.bind('touchmove', function() {
          scope.scroll();
        });
        /* ADyba edit */
        var headerHeight = $document[0].querySelectorAll('[user-profile-header]')[0].clientHeight;
        console.log(headerHeight);
        if(headerHeight!=''){
          headerHeight = $document[0].querySelectorAll('[user-profile-header]')[0].clientHeight;
        }else{
          headerHeight = 280;

        }
        elm.css({
          top: headerHeight + 'px'
        });
        scope.checkprofile= function() {
            var headerHeight = $document[0].querySelectorAll('[user-profile-header]')[0].clientHeight;
            elm.css({
              top: headerHeight + 'px'
            });
        }
        scope.scroll = function() {
       
          scope.checkprofile();
          var scrollPos = $ionicScrollDelegate.$getByHandle('profileScroll').getScrollPosition();
          var element = $document[0].querySelectorAll('[user-profile-header]')[0];
          var header = $document[0].querySelectorAll('[user-profile-header]')[0];
          var subHeader = $document[0].querySelectorAll('[user-profile-sub-header]')[0];
          if (scrollPos.top <= (headerHeight - subHeader.clientHeight)) {
            angular.element(element).css({
              webkitTransform: 'translate3d(0,-' + scrollPos.top + 'px,0)',
              transform: 'translate3d(0,-' + scrollPos.top + 'px,0)'
            });
            elm.css({
              top: (headerHeight - scrollPos.top) + 'px'
            });
            angular.element(subHeader).css({
              display: 'none'
            }).removeClass('fadeIn');
            angular.element(header).css({
              display: 'block'
            });
          } else {
            angular.element(element).css({
              webkitTransform: 'translate3d(0,-50px,0)',
              transform: 'translate3d(0,-50px,0)'
            });
            angular.element(elm).css({
              top: subHeader.clientHeight + 2 + 'px'
            });
            angular.element(header).css({
              display: 'none'
            });
            angular.element(subHeader).addClass('fadeIn').css({
              display: 'block'
            });
          }
          $ionicScrollDelegate.resize();
        };
        scope.scroll();
      }
    };
  });