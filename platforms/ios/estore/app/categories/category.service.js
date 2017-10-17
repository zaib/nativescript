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
        ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBR3hEO0lBQ0kseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRXRCLFNBQUksR0FBRyxJQUFJLEtBQUssRUFBTyxDQUFDO0lBRkUsQ0FBQztJQUluQyx5Q0FBZSxHQUFmO1FBQ0ksSUFBTSxHQUFHLEdBQUcsb0dBQW9HLENBQUM7UUFDakgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUFBLENBQUM7SUFDakUsQ0FBQztJQUVELHlDQUFlLEdBQWYsVUFBZ0IsRUFBVTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBWlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUVpQixXQUFJO09BRHJCLGVBQWUsQ0FhM0I7SUFBRCxzQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBwcml2YXRlIGxpc3QgPSBuZXcgQXJyYXk8YW55PigpO1xuXG4gICAgZ2V0Q2F0ZWdvcnlMaXN0KCk6IGFueSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcGkuYmVzdGJ1eS5jb20vdjEvY2F0ZWdvcmllcz9mb3JtYXQ9anNvbiZzaG93PWlkLHVybCxuYW1lJmFwaUtleT1OcnpjQUpXd2lQYXhWZnVvOVpKOVgyWEdcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7O1xuICAgIH1cblxuICAgIGdldENhdGVnb3J5SXRlbShpZDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxufVxuIl19