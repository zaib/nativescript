import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "./products.service";

@Component({
    selector: "ns-products-list",
    moduleId: module.id,
    templateUrl: "./products.list.component.html",
    styleUrls: ["./styles/products.list.common.css", "./styles/products.list.css"]
})

export class ProductsListComponent implements OnInit {
    list: any[];
    @Input('search') search: string;
    
    constructor(private productService: ProductsService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const search = this.route.snapshot.params["search"];
        this.getProductsList(search);
    }

    getProductsList(search) {
        this.productService.getProductsList(search).subscribe(
            (data) => {
                this.list = data.products;
            },
            (error) => alert("No result found!, error!")
        );
    }

    show() {
        alert(this.list);
    }
}