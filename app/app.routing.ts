import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { CategoryListComponent } from './categories/category.list.component';
import { ProductsListComponent } from './products/products.list.component';
import { ProductDetailComponent } from './products/product-detail.component';

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home",  component: HomeComponent },
    { path: "categories", component: CategoryListComponent},
    { path: "products/detail/:sku", component: ProductDetailComponent },
    { path: "products/:search", component: ProductsListComponent },  
    { path: "categories/products/:categoryName", component: ProductsListComponent },  
    { path: "products", component: ProductsListComponent},
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)], 
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }