"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_service_1 = require("./products.service");
var ProductsListComponent = (function () {
    function ProductsListComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var search = this.route.snapshot.params["search"];
        this.getProductsList(search);
    };
    ProductsListComponent.prototype.getProductsList = function (search) {
        var _this = this;
        this.productService.getProductsList(search).subscribe(function (data) {
            _this.list = data.products;
        }, function (error) { return alert("No result found!, error!"); });
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
        __metadata("design:paramtypes", [products_service_1.ProductsService, router_1.ActivatedRoute])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMubGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBaUQ7QUFDakQsdURBQXFEO0FBU3JEO0lBSUksK0JBQW9CLGNBQStCLEVBQVUsS0FBcUI7UUFBOUQsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFBSSxDQUFDO0lBRXZGLHdDQUFRLEdBQVI7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsK0NBQWUsR0FBZixVQUFnQixNQUFNO1FBQXRCLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUNqRCxVQUFDLElBQUk7WUFDRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLDBCQUEwQixDQUFDLEVBQWpDLENBQWlDLENBQy9DLENBQUM7SUFDTixDQUFDO0lBRUQsb0NBQUksR0FBSjtRQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQXBCZ0I7UUFBaEIsWUFBSyxDQUFDLFFBQVEsQ0FBQzs7eURBQWdCO0lBRnZCLHFCQUFxQjtRQVBqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSw0QkFBNEIsQ0FBQztTQUNqRixDQUFDO3lDQU1zQyxrQ0FBZSxFQUFpQix1QkFBYztPQUp6RSxxQkFBcUIsQ0F1QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tIFwiLi9wcm9kdWN0cy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXByb2R1Y3RzLWxpc3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJvZHVjdHMubGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zdHlsZXMvcHJvZHVjdHMubGlzdC5jb21tb24uY3NzXCIsIFwiLi9zdHlsZXMvcHJvZHVjdHMubGlzdC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGxpc3Q6IGFueVtdO1xuICAgIEBJbnB1dCgnc2VhcmNoJykgc2VhcmNoOiBzdHJpbmc7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJzZWFyY2hcIl07XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdHNMaXN0KHNlYXJjaCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdHNMaXN0KHNlYXJjaCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzTGlzdChzZWFyY2gpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gZGF0YS5wcm9kdWN0cztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiTm8gcmVzdWx0IGZvdW5kISwgZXJyb3IhXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgYWxlcnQodGhpcy5saXN0KTtcbiAgICB9XG59Il19