"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_service_1 = require("./products.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productsService, route) {
        this.productsService = productsService;
        this.route = route;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sku = this.route.snapshot.params["sku"];
        this.productsService.getProductBySku(sku).subscribe(function (data) {
            _this.item = data;
        }, function (error) { return alert("No result found!, error!"); });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-product-details",
            moduleId: module.id,
            templateUrl: "./product-detail.component.html",
            styleUrls: ["./styles/products.list.common.css", "./styles/products.list.css"]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService,
            router_1.ActivatedRoute])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCx1REFBcUQ7QUFRckQ7SUFHSSxnQ0FDWSxlQUFnQyxFQUNoQyxLQUFxQjtRQURyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDN0IsQ0FBQztJQUVMLHlDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQy9DLFVBQUMsSUFBSTtZQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxFQUFqQyxDQUFpQyxDQUMvQyxDQUFDO0lBQ04sQ0FBQztJQWhCUSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLEVBQUUsNEJBQTRCLENBQUM7U0FDakYsQ0FBQzt5Q0FLK0Isa0NBQWU7WUFDekIsdUJBQWM7T0FMeEIsc0JBQXNCLENBaUJsQztJQUFELDZCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi9wcm9kdWN0XCI7XG5pbXBvcnQgeyBQcm9kdWN0c1NlcnZpY2UgfSBmcm9tIFwiLi9wcm9kdWN0cy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXByb2R1Y3QtZGV0YWlsc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zdHlsZXMvcHJvZHVjdHMubGlzdC5jb21tb24uY3NzXCIsIFwiLi9zdHlsZXMvcHJvZHVjdHMubGlzdC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTogUHJvZHVjdDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2t1ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJza3VcIl07XG4gICAgICAgIHRoaXMucHJvZHVjdHNTZXJ2aWNlLmdldFByb2R1Y3RCeVNrdShza3UpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiTm8gcmVzdWx0IGZvdW5kISwgZXJyb3IhXCIpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19