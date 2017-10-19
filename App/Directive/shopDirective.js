/**
 * Created by XPHLR on 2017/10/18.
 */

app.directive("shopDirective", function () {
    return {
        restrict: "EA",
        scope: {
            item: "=item",
            index: "@index"
        },
        templateUrl: "App/View/temp/_shop.html",
        controller: "shopController"
    }
});
