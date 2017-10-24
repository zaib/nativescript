"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.list = new Array();
    }
    CategoryService.prototype.getCategoryList = function () {
        var url = "https://api.bestbuy.com/v1/categories?format=json&show=id,url,name&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG";
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getCategoryItem = function (id) {
        return this.list.filter(function (item) { return item.id === id; })[0];
    };
    CategoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBR3hEO0lBQ0kseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRXRCLFNBQUksR0FBRyxJQUFJLEtBQUssRUFBTyxDQUFDO0lBRkUsQ0FBQztJQUluQyx5Q0FBZSxHQUFmO1FBQ0ksSUFBTSxHQUFHLEdBQUcsb0dBQW9HLENBQUM7UUFDakgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQseUNBQWUsR0FBZixVQUFnQixFQUFVO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFaUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBRWlCLFdBQUk7T0FEckIsZUFBZSxDQWEzQjtJQUFELHNCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIHByaXZhdGUgbGlzdCA9IG5ldyBBcnJheTxhbnk+KCk7XG5cbiAgICBnZXRDYXRlZ29yeUxpc3QoKTogYW55IHtcbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS5iZXN0YnV5LmNvbS92MS9jYXRlZ29yaWVzP2Zvcm1hdD1qc29uJnNob3c9aWQsdXJsLG5hbWUmYXBpS2V5PU5yemNBSld3aVBheFZmdW85Wko5WDJYR1wiO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBnZXRDYXRlZ29yeUl0ZW0oaWQ6IG51bWJlcik6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgIH1cbn1cbiJdfQ==