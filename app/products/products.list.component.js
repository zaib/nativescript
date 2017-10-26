"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var products_service_1 = require("./products.service");
var ProductsListComponent = (function () {
    function ProductsListComponent(productService, route, routerExtensions) {
        this.productService = productService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.isLoadingData = true;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        this.searchQuery = this.route.snapshot.params["search"];
        if (this.searchQuery) {
            this.getProductsList(this.searchQuery);
        }
        this.categoryName = this.route.snapshot.params["categoryName"];
        if (this.categoryName) {
            this.getProductsByCategory(this.categoryName);
        }
        this.filterTerm = this.searchQuery ? this.searchQuery : this.categoryName;
    };
    ProductsListComponent.prototype.getProductsList = function (search) {
        var _this = this;
        this.productService.getProductsList(search).subscribe(function (data) {
            _this.list = data.products;
            _this.isLoadingData = false;
        }, function (error) { return alert("No result found!, error!"); });
    };
    ProductsListComponent.prototype.getProductsByCategory = function (categoryName) {
        var _this = this;
        this.productService.getProductsByCategory(categoryName).subscribe(function (data) {
            _this.list = data.products;
            _this.isLoadingData = false;
        }, function (error) { return alert("No result found!, error!"); });
    };
    ProductsListComponent.prototype.onBusyChanged = function ($event) {
        console.log($event);
    };
    ProductsListComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ProductsListComponent.prototype.show = function () {
        alert(this.list);
    };
    __decorate([
        core_1.Input('search'),
        __metadata("design:type", String)
    ], ProductsListComponent.prototype, "search", void 0);
    ProductsListComponent = __decorate([
        core_1.Component({
            selector: "ns-products-list",
            moduleId: module.id,
            templateUrl: "./products.list.component.html",
            styleUrls: ["./styles/products.list.common.css", "./styles/products.list.css"]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELHVEQUFxRDtBQVNyRDtJQVFJLCtCQUNZLGNBQStCLEVBQy9CLEtBQXFCLEVBQ3JCLGdCQUFrQztRQUZsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxrQkFBYSxHQUFZLElBQUksQ0FBQztJQU8xQixDQUFDO0lBRUwsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBRTlFLENBQUM7SUFFRCwrQ0FBZSxHQUFmLFVBQWdCLE1BQU07UUFBdEIsaUJBUUM7UUFQRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUMsSUFBSTtZQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsMEJBQTBCLENBQUMsRUFBakMsQ0FBaUMsQ0FDL0MsQ0FBQztJQUNOLENBQUM7SUFFRCxxREFBcUIsR0FBckIsVUFBc0IsWUFBWTtRQUFsQyxpQkFRQztRQVBHLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUM3RCxVQUFDLElBQUk7WUFDRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDMUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLDBCQUEwQixDQUFDLEVBQWpDLENBQWlDLENBQy9DLENBQUM7SUFDTixDQUFDO0lBR0QsNkNBQWEsR0FBYixVQUFjLE1BQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBdERnQjtRQUFoQixZQUFLLENBQUMsUUFBUSxDQUFDOzt5REFBZ0I7SUFOdkIscUJBQXFCO1FBUGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLDRCQUE0QixDQUFDO1NBQ2pGLENBQUM7eUNBVzhCLGtDQUFlO1lBQ3hCLHVCQUFjO1lBQ0gseUJBQWdCO09BWHJDLHFCQUFxQixDQTZEakM7SUFBRCw0QkFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gXCIuL3Byb2R1Y3RzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcHJvZHVjdHMtbGlzdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9kdWN0cy5saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3N0eWxlcy9wcm9kdWN0cy5saXN0LmNvbW1vbi5jc3NcIiwgXCIuL3N0eWxlcy9wcm9kdWN0cy5saXN0LmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbGlzdDogYW55W107XG4gICAgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgICBjYXRlZ29yeU5hbWU6IHN0cmluZztcbiAgICBmaWx0ZXJUZXJtOiBzdHJpbmc7XG4gICAgaXNMb2FkaW5nRGF0YTogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCdzZWFyY2gnKSBzZWFyY2g6IHN0cmluZztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLCBcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wic2VhcmNoXCJdO1xuICAgICAgICBpZih0aGlzLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RzTGlzdCh0aGlzLnNlYXJjaFF1ZXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlOYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJjYXRlZ29yeU5hbWVcIl07XG4gICAgICAgIGlmKHRoaXMuY2F0ZWdvcnlOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RzQnlDYXRlZ29yeSh0aGlzLmNhdGVnb3J5TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlclRlcm0gPSB0aGlzLnNlYXJjaFF1ZXJ5ID8gdGhpcy5zZWFyY2hRdWVyeSA6IHRoaXMuY2F0ZWdvcnlOYW1lO1xuXG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdHNMaXN0KHNlYXJjaCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzTGlzdChzZWFyY2gpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gZGF0YS5wcm9kdWN0cztcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZ0RhdGEgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiTm8gcmVzdWx0IGZvdW5kISwgZXJyb3IhXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5KGNhdGVnb3J5TmFtZSkge1xuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzQnlDYXRlZ29yeShjYXRlZ29yeU5hbWUpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gZGF0YS5wcm9kdWN0cztcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZ0RhdGEgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiTm8gcmVzdWx0IGZvdW5kISwgZXJyb3IhXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBvbkJ1c3lDaGFuZ2VkKCRldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xuICAgIH1cbiAgICBcbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBhbGVydCh0aGlzLmxpc3QpO1xuICAgIH1cbn0iXX0=