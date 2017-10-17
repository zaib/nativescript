import { Component, OnInit } from "@angular/core";

// import { CategoryListComponent } from './../categories/category.list.component';

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.common.css", "./home.css"],
})
export class HomeComponent implements OnInit {
    search: String;

    ngOnInit(): void {
    }

    submit() {
        alert(this.search);
    }
}