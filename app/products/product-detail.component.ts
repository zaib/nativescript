import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { Product } from "./product";
import { ProductsService } from "./products.service";

@Component({
    selector: "ns-product-details",
    moduleId: module.id,
    templateUrl: "./product-detail.component.html",
    styleUrls: ["./styles/products.common.css", "./styles/products.css"]
})
export class ProductDetailComponent implements OnInit {
    item: Product;

    constructor(
        private productsService: ProductsService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const sku = this.route.snapshot.params["sku"];
        this.productsService.getProductBySku(sku).subscribe(
            (data) => {
                this.item = data;
            },
            (error) => alert("No result found!, error!")
        );
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }

}
