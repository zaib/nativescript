import { Component, OnInit } from "@angular/core";

import { CategoryService } from "./category.service";

@Component({
    selector: "ns-category-list",
    moduleId: module.id,
    templateUrl: "./category.list.component.html",
    styleUrls: ["./category.list.common.css", "./category.list.css"]
})

export class CategoryListComponent implements OnInit {
    list: any[];

    constructor(private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.getCategoryList();
    }

    getCategoryList() {
        this.list = this.categoryService.getCategoryList();/*.subscribe(
            (response) => {
                this.list = response.categories; 
                console.dir(this.list);
            },
            (error) => alert("No result found!, error!")
        );*/
    }
}