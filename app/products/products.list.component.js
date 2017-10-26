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
            styleUrls: ["./styles/products.common.css", "./styles/products.css"]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELHVEQUFxRDtBQVNyRDtJQVFJLCtCQUNZLGNBQStCLEVBQy9CLEtBQXFCLEVBQ3JCLGdCQUFrQztRQUZsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxrQkFBYSxHQUFZLElBQUksQ0FBQztJQU8xQixDQUFDO0lBRUwsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBRTlFLENBQUM7SUFFRCwrQ0FBZSxHQUFmLFVBQWdCLE1BQU07UUFBdEIsaUJBUUM7UUFQRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUMsSUFBSTtZQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsMEJBQTBCLENBQUMsRUFBakMsQ0FBaUMsQ0FDL0MsQ0FBQztJQUNOLENBQUM7SUFFRCxxREFBcUIsR0FBckIsVUFBc0IsWUFBWTtRQUFsQyxpQkFRQztRQVBHLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUM3RCxVQUFDLElBQUk7WUFDRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDMUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLDBCQUEwQixDQUFDLEVBQWpDLENBQWlDLENBQy9DLENBQUM7SUFDTixDQUFDO0lBR0QsNkNBQWEsR0FBYixVQUFjLE1BQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBdERnQjtRQUFoQixZQUFLLENBQUMsUUFBUSxDQUFDOzt5REFBZ0I7SUFOdkIscUJBQXFCO1FBUGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3ZFLENBQUM7eUNBVzhCLGtDQUFlO1lBQ3hCLHVCQUFjO1lBQ0gseUJBQWdCO09BWHJDLHFCQUFxQixDQTZEakM7SUFBRCw0QkFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gXCIuL3Byb2R1Y3RzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcHJvZHVjdHMtbGlzdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9kdWN0cy5saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3N0eWxlcy9wcm9kdWN0cy5jb21tb24uY3NzXCIsIFwiLi9zdHlsZXMvcHJvZHVjdHMuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsaXN0OiBhbnlbXTtcbiAgICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICAgIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xuICAgIGZpbHRlclRlcm06IHN0cmluZztcbiAgICBpc0xvYWRpbmdEYXRhOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoJ3NlYXJjaCcpIHNlYXJjaDogc3RyaW5nO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsIFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJzZWFyY2hcIl07XG4gICAgICAgIGlmKHRoaXMuc2VhcmNoUXVlcnkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdHNMaXN0KHRoaXMuc2VhcmNoUXVlcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeU5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImNhdGVnb3J5TmFtZVwiXTtcbiAgICAgICAgaWYodGhpcy5jYXRlZ29yeU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdHNCeUNhdGVnb3J5KHRoaXMuY2F0ZWdvcnlOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsdGVyVGVybSA9IHRoaXMuc2VhcmNoUXVlcnkgPyB0aGlzLnNlYXJjaFF1ZXJ5IDogdGhpcy5jYXRlZ29yeU5hbWU7XG5cbiAgICB9XG5cbiAgICBnZXRQcm9kdWN0c0xpc3Qoc2VhcmNoKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHNMaXN0KHNlYXJjaCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBkYXRhLnByb2R1Y3RzO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nRGF0YSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJObyByZXN1bHQgZm91bmQhLCBlcnJvciFcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkoY2F0ZWdvcnlOYW1lKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHNCeUNhdGVnb3J5KGNhdGVnb3J5TmFtZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBkYXRhLnByb2R1Y3RzO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nRGF0YSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJObyByZXN1bHQgZm91bmQhLCBlcnJvciFcIilcbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIG9uQnVzeUNoYW5nZWQoJGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudCk7XG4gICAgfVxuICAgIFxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIGFsZXJ0KHRoaXMubGlzdCk7XG4gICAgfVxufSJdfQ==