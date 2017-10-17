import { Component, OnInit } from "@angular/core";

import { CategoryService } from "./category.service";

@Component({
    selector: "ns-category-list",
    moduleId: module.id,
    templateUrl: "./category.list.component.html",
    styleUrls: ["./styles/category.list.common.css", "./styles/category.list.css"]
})

export class CategoryListComponent implements OnInit {
    list: any[];

    constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.getCategoryList();
    }

    getCategoryList() {
        this.list = this.categoryService.getCategoryList().subscribe(
            (data) => {
                this.list = data.categories;
            },
            (error) => alert("No result found!, error!")
        );
    }

    show() {
        alert(this.list);
    }
}