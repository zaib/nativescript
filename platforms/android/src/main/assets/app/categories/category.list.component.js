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
        this.list = this.categoryService.getCategoryList(); /*.subscribe(
            (response) => {
                this.list = response.categories;
                console.dir(this.list);
            },
            (error) => alert("No result found!, error!")
        );*/
    };
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: "ns-category-list",
            moduleId: module.id,
            templateUrl: "./category.list.component.html",
            styleUrls: ["./category.list.common.css", "./category.list.css"]
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkubGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeS5saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCx1REFBcUQ7QUFTckQ7SUFHSSwrQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUksQ0FBQztJQUV6RCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUE7Ozs7OztZQU0vQztJQUNSLENBQUM7SUFqQlEscUJBQXFCO1FBUGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHFCQUFxQixDQUFDO1NBQ25FLENBQUM7eUNBS3VDLGtDQUFlO09BSDNDLHFCQUFxQixDQWtCakM7SUFBRCw0QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSBcIi4vY2F0ZWdvcnkuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1jYXRlZ29yeS1saXN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NhdGVnb3J5Lmxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vY2F0ZWdvcnkubGlzdC5jb21tb24uY3NzXCIsIFwiLi9jYXRlZ29yeS5saXN0LmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbGlzdDogYW55W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3J5U2VydmljZTogQ2F0ZWdvcnlTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdldENhdGVnb3J5TGlzdCgpO1xuICAgIH1cblxuICAgIGdldENhdGVnb3J5TGlzdCgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5jYXRlZ29yeVNlcnZpY2UuZ2V0Q2F0ZWdvcnlMaXN0KCk7Lyouc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gcmVzcG9uc2UuY2F0ZWdvcmllczsgXG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIodGhpcy5saXN0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiTm8gcmVzdWx0IGZvdW5kISwgZXJyb3IhXCIpXG4gICAgICAgICk7Ki9cbiAgICB9XG59Il19