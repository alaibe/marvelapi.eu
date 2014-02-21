angular.module('marvelApi').directive('preventDefault', function() {
  return function(scope, element, attrs) {
    jQuery(element).click(function(event) {
      event.preventDefault();
    });
  };
});

angular.module('marvelApi').directive("spy", function(){
  return {
    restrict: "A",
    require: "^scrollSpy",
    link: function($scope, $elem, $attrs, affix){
      affix.addSpy({
        id: $attrs.spy,
        in: function(){
          $elem.addClass('active');
        },
        out: function(){
          $elem.removeClass('active');
        }
      });
    }
  };
});

angular.module('marvelApi').directive("scrollSpy", function($window){
  return {
    restrict : "AC",
    controller: function($scope) {
      $scope.spies = [];

      this.addSpy = function(spyObj) {
        return $scope.spies.push(spyObj);
      };
    },

    link: function($scope, $elem, $attrs) {
      $($window).scroll(function() {
        var highlightSpy = null;
        angular.forEach($scope.spies, function(spy, key){
          spy.out();
          var elemWithId = $elem.find('#'+spy.id);

          if ((pos = elemWithId.offset().top) - $window.scrollY <= 0){
            spy.pos = pos
            if (highlightSpy == null) {
              highlightSpy = spy;
            }
            if (highlightSpy.pos < spy.pos) {
              highlightSpy = spy;
            }
          }
        });

        if (highlightSpy != null) {
          highlightSpy.in();
        } else {
          $scope.spies[0].in();
        }

      });
    }
  };
});
