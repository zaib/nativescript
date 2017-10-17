"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var category_service_1 = require("./category.service");
var CategoryListComponent = (function () {
    function CategoryListComponent(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getCategoryList();
    };
    CategoryListComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.list = this.categoryService.getCategoryList().subscribe(function (data) {
            _this.list = data.categories;
        }, function (error) { return alert("No result found!, error!"); });
    };
    CategoryListComponent.prototype.show = function () {
        alert(this.list);
    };
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: "ns-category-list",
            moduleId: module.id,
            templateUrl: "./category.list.component.html",
            styleUrls: ["./styles/category.list.common.css", "./styles/category.list.css"]
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkubGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeS5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCx1REFBcUQ7QUFTckQ7SUFHSSwrQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUksQ0FBQztJQUV6RCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxDQUN4RCxVQUFDLElBQUk7WUFDRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLDBCQUEwQixDQUFDLEVBQWpDLENBQWlDLENBQy9DLENBQUM7SUFDTixDQUFDO0lBRUQsb0NBQUksR0FBSjtRQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQXBCUSxxQkFBcUI7UUFQakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsbUNBQW1DLEVBQUUsNEJBQTRCLENBQUM7U0FDakYsQ0FBQzt5Q0FLdUMsa0NBQWU7T0FIM0MscUJBQXFCLENBcUJqQztJQUFELDRCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBDYXRlZ29yeVNlcnZpY2UgfSBmcm9tIFwiLi9jYXRlZ29yeS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWNhdGVnb3J5LWxpc3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2F0ZWdvcnkubGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zdHlsZXMvY2F0ZWdvcnkubGlzdC5jb21tb24uY3NzXCIsIFwiLi9zdHlsZXMvY2F0ZWdvcnkubGlzdC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGxpc3Q6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXRlZ29yeVNlcnZpY2U6IENhdGVnb3J5U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRDYXRlZ29yeUxpc3QoKTtcbiAgICB9XG5cbiAgICBnZXRDYXRlZ29yeUxpc3QoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMuY2F0ZWdvcnlTZXJ2aWNlLmdldENhdGVnb3J5TGlzdCgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gZGF0YS5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJObyByZXN1bHQgZm91bmQhLCBlcnJvciFcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBhbGVydCh0aGlzLmxpc3QpO1xuICAgIH1cbn0iXX0=