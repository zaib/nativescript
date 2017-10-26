"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var products_service_1 = require("./products.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productsService, route, routerExtensions) {
        this.productsService = productsService;
        this.route = route;
        this.routerExtensions = routerExtensions;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sku = this.route.snapshot.params["sku"];
        this.productsService.getProductBySku(sku).subscribe(function (data) {
            _this.item = data;
        }, function (error) { return alert("No result found!, error!"); });
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-product-details",
            moduleId: module.id,
            templateUrl: "./product-detail.component.html",
            styleUrls: ["./styles/products.common.css", "./styles/products.css"]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFHL0QsdURBQXFEO0FBUXJEO0lBR0ksZ0NBQ1ksZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsZ0JBQWtDO1FBRmxDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzFDLENBQUM7SUFFTCx5Q0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUMvQyxVQUFDLElBQUk7WUFDRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsMEJBQTBCLENBQUMsRUFBakMsQ0FBaUMsQ0FDL0MsQ0FBQztJQUNOLENBQUM7SUFFRCx1Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXJCUSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7U0FDdkUsQ0FBQzt5Q0FLK0Isa0NBQWU7WUFDekIsdUJBQWM7WUFDSCx5QkFBZ0I7T0FOckMsc0JBQXNCLENBdUJsQztJQUFELDZCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vcHJvZHVjdFwiO1xuaW1wb3J0IHsgUHJvZHVjdHNTZXJ2aWNlIH0gZnJvbSBcIi4vcHJvZHVjdHMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1wcm9kdWN0LWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc3R5bGVzL3Byb2R1Y3RzLmNvbW1vbi5jc3NcIiwgXCIuL3N0eWxlcy9wcm9kdWN0cy5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTogUHJvZHVjdDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHByb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBza3UgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcInNrdVwiXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0UHJvZHVjdEJ5U2t1KHNrdSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJObyByZXN1bHQgZm91bmQhLCBlcnJvciFcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbn1cbiJdfQ==