import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

@Injectable()
export class CategoryService {
    constructor(private http: Http) { }

    private list = new Array<any>();

    getCategoryList(): any {
        const url = "https://api.bestbuy.com/v1/categories?format=json&show=id,url,name&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG";
        return this.http.get(url).map((res:Response) => res.json());
    }

    getCategoryItem(id: number): any {
        return this.list.filter(item => item.id === id)[0];
    }
}
