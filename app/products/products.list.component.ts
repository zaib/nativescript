import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { ProductsService } from "./products.service";

@Component({
    selector: "ns-products-list",
    moduleId: module.id,
    templateUrl: "./products.list.component.html",
    styleUrls: ["./styles/products.list.common.css", "./styles/products.list.css"]
})

export class ProductsListComponent implements OnInit {
    list: any[];
    searchQuery: string;
    categoryName: string;
    filterTerm: string;
    isLoadingData: boolean = true;
    @Input('search') search: string;
    
    constructor(
        private productService: ProductsService, 
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.searchQuery = this.route.snapshot.params["search"];
        if(this.searchQuery) {
            this.getProductsList(this.searchQuery);
        }

        this.categoryName = this.route.snapshot.params["categoryName"];
        if(this.categoryName) {
            this.getProductsByCategory(this.categoryName);
        }

        this.filterTerm = this.searchQuery ? this.searchQuery : this.categoryName;

    }

    getProductsList(search) {
        this.productService.getProductsList(search).subscribe(
            (data) => {
                this.list = data.products;
                this.isLoadingData = false;
            },
            (error) => alert("No result found!, error!")
        );
    }

    getProductsByCategory(categoryName) {
        this.productService.getProductsByCategory(categoryName).subscribe(
            (data) => {
                this.list = data.products;
                this.isLoadingData = false;
            },
            (error) => alert("No result found!, error!")
        );
    }


    onBusyChanged($event) {
        console.log($event);
    }
    
    goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    show() {
        alert(this.list);
    }
}