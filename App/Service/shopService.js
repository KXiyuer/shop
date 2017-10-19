/**
 * Created by XPHLR on 2017/10/18.
 */

app.factory("shopService", ["baseService", function (baseService) {
    return {
        getProducts: function (type, url) {
            return baseService.ajax(type, url);
            console.log(url);
        }
    }
}]);