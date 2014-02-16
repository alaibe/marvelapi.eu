angular.module('marvelApi').directive('preventDefault', function() {
  return function(scope, element, attrs) {
    jQuery(element).click(function(event) {
      event.preventDefault();
    });
  }
});

angular.module('marvelApi').directive("scrollTo", ["$window", function($window){
  return {
    restrict : "AC",
    compile : function(){

      function scrollInto(elementId) {
        if(!elementId) $window.scrollTo(0, 0);
        var el = document.getElementById(elementId);
        if(el) el.scrollIntoView();
      }
      return function(scope, element, attr) {
        element.bind("click", function(event){
          $(event.toElement).parent().parent().children().removeClass("active");
          $(event.toElement).parent().addClass("active");
          scrollInto(attr.scrollTo);
        });
      }
    }
  }
}]);
