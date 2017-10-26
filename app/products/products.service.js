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
            ')?show=sku,name,mediumImage,thumbnailImage,regularPrice,shortDescription&pageSize=20&page=1&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG&format=json';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getProductsByCategory = function (categoryName) {
        var url = 'https://api.bestbuy.com/v1/products(categoryPath.name="' + categoryName + '")?format=json&show=sku,name,mediumImage,thumbnailImage,regularPrice,shortDescription&pageSize=20&page=1&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG';
        console.log(url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBR3hEO0lBQ0kseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRXRCLFNBQUksR0FBRyxJQUFJLEtBQUssRUFBTyxDQUFDO0lBRkUsQ0FBQztJQUluQyx5Q0FBZSxHQUFmLFVBQWdCLFdBQW1CO1FBQy9CLElBQU0sR0FBRyxHQUFHLHNDQUFzQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzlILHlJQUF5SSxDQUFDO1FBQzlJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELCtDQUFxQixHQUFyQixVQUFzQixZQUFvQjtRQUN0QyxJQUFNLEdBQUcsR0FBRyx5REFBeUQsR0FBRyxZQUFZLEdBQUcsMElBQTBJLENBQUM7UUFDbE8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLEdBQVc7UUFDdkIsc0RBQXNEO1FBQ3RELElBQU0sR0FBRyxHQUFHLHNDQUFzQyxHQUFHLEdBQUcsR0FBRyxnREFBZ0QsQ0FBQztRQUM1RyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFyQlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUVpQixXQUFJO09BRHJCLGVBQWUsQ0FzQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ID0gbmV3IEFycmF5PGFueT4oKTtcblxuICAgIGdldFByb2R1Y3RzTGlzdChzZWFyY2hRdWVyeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLmJlc3RidXkuY29tL3YxL3Byb2R1Y3RzKCcgKyBzZWFyY2hRdWVyeS50cmltKCkuc3BsaXQoJyAnKS5tYXAoa2V5d29yZCA9PiAoJ3NlYXJjaD0nICsga2V5d29yZCkpLmpvaW4oJyYnKSArXG4gICAgICAgICAgICAnKT9zaG93PXNrdSxuYW1lLG1lZGl1bUltYWdlLHRodW1ibmFpbEltYWdlLHJlZ3VsYXJQcmljZSxzaG9ydERlc2NyaXB0aW9uJnBhZ2VTaXplPTIwJnBhZ2U9MSZhcGlLZXk9TnJ6Y0FKV3dpUGF4VmZ1bzlaSjlYMlhHJmZvcm1hdD1qc29uJztcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGdldFByb2R1Y3RzQnlDYXRlZ29yeShjYXRlZ29yeU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5iZXN0YnV5LmNvbS92MS9wcm9kdWN0cyhjYXRlZ29yeVBhdGgubmFtZT1cIicgKyBjYXRlZ29yeU5hbWUgKyAnXCIpP2Zvcm1hdD1qc29uJnNob3c9c2t1LG5hbWUsbWVkaXVtSW1hZ2UsdGh1bWJuYWlsSW1hZ2UscmVndWxhclByaWNlLHNob3J0RGVzY3JpcHRpb24mcGFnZVNpemU9MjAmcGFnZT0xJmFwaUtleT1OcnpjQUpXd2lQYXhWZnVvOVpKOVgyWEcnO1xuICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdEJ5U2t1KHNrdTogbnVtYmVyKTogYW55IHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMubGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5iZXN0YnV5LmNvbS92MS9wcm9kdWN0cy8nICsgc2t1ICsgJy5qc29uP3Nob3c9YWxsJmFwaUtleT1OcnpjQUpXd2lQYXhWZnVvOVpKOVgyWEcnO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7ICAgICAgICBcbiAgICB9XG59XG4iXX0=