"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        this.list = new Array();
    }
    ProductsService.prototype.getProductsList = function (searchQuery) {
        var url = 'https://api.bestbuy.com/v1/products(' + searchQuery.trim().split(' ').map(function (keyword) { return ('search=' + keyword); }).join('&') +
            ')?show=sku,name,mediumImage,thumbnailImage,regularPrice,shortDescription&pageSize=15&page=5&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG&format=json';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getProductBySku = function (sku) {
        // return this.list.filter(item => item.id === id)[0];
        var url = 'https://api.bestbuy.com/v1/products/' + sku + '.json?show=all&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProductsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBR3hEO0lBQ0kseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRXRCLFNBQUksR0FBRyxJQUFJLEtBQUssRUFBTyxDQUFDO0lBRkUsQ0FBQztJQUluQyx5Q0FBZSxHQUFmLFVBQWdCLFdBQW1CO1FBQy9CLElBQU0sR0FBRyxHQUFHLHNDQUFzQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzlILHlJQUF5SSxDQUFDO1FBQzlJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHlDQUFlLEdBQWYsVUFBZ0IsR0FBVztRQUN2QixzREFBc0Q7UUFDdEQsSUFBTSxHQUFHLEdBQUcsc0NBQXNDLEdBQUcsR0FBRyxHQUFHLGdEQUFnRCxDQUFDO1FBQzVHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQWZRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFaUIsV0FBSTtPQURyQixlQUFlLENBZ0IzQjtJQUFELHNCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIHByaXZhdGUgbGlzdCA9IG5ldyBBcnJheTxhbnk+KCk7XG5cbiAgICBnZXRQcm9kdWN0c0xpc3Qoc2VhcmNoUXVlcnk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5iZXN0YnV5LmNvbS92MS9wcm9kdWN0cygnICsgc2VhcmNoUXVlcnkudHJpbSgpLnNwbGl0KCcgJykubWFwKGtleXdvcmQgPT4gKCdzZWFyY2g9JyArIGtleXdvcmQpKS5qb2luKCcmJykgK1xuICAgICAgICAgICAgJyk/c2hvdz1za3UsbmFtZSxtZWRpdW1JbWFnZSx0aHVtYm5haWxJbWFnZSxyZWd1bGFyUHJpY2Usc2hvcnREZXNjcmlwdGlvbiZwYWdlU2l6ZT0xNSZwYWdlPTUmYXBpS2V5PU5yemNBSld3aVBheFZmdW85Wko5WDJYRyZmb3JtYXQ9anNvbic7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBnZXRQcm9kdWN0QnlTa3Uoc2t1OiBudW1iZXIpOiBhbnkge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5saXN0LmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLmJlc3RidXkuY29tL3YxL3Byb2R1Y3RzLycgKyBza3UgKyAnLmpzb24/c2hvdz1hbGwmYXBpS2V5PU5yemNBSld3aVBheFZmdW85Wko5WDJYRyc7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkubWFwKHJlcyA9PiByZXMuanNvbigpKTsgICAgICAgIFxuICAgIH1cbn1cbiJdfQ==