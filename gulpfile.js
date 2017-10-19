/**
 * Created by XPHLR on 2017/10/18.
 */

var gulp = require("gulp");
var webServer = require("gulp-webserver");
var url = require("url");

gulp.task("server", function () {
    gulp.src(".")
        .pipe(webServer({
            port: 8899,
            livereload: true,
            directoryListing: true,
            middleware: function (req, res, next) {
                var requestUrl = url.parse(req.url).pathname;
                console.log(requestUrl);
                if (requestUrl == "/api") {
                    var data = [
                        {
                            id: 1,
                            name: "俞兆林浙江专卖店",
                            img: "http://localhost:8899/Content/img/img1.jpg",
                            address: "北京",
                            state: true,
                            num: 1,
                            price: 1270,
                            size: "M",
                            color: "red"
                        },
                        {
                            id: 2,
                            name: "俞兆林浙江专卖店",
                            img: "http://localhost:8899/Content/img/img2.jpg",
                            address: "北京",
                            state: false,
                            num: 1,
                            price: 1270,
                            size: "L",
                            color: "color"
                        }];
                    res.writeHead(200, {
                        "Content-type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    });
                    res.write(JSON.stringify(data));
                    res.end();
                }
                next();
            },
            open: "/index.html"
        }))
});



