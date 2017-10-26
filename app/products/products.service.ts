import { Observable } from 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

@Injectable()
export class ProductsService {
    constructor(private http: Http) { }

    private list = new Array<any>();

    getProductsList(searchQuery: string): Observable<any> {
        const url = 'https://api.bestbuy.com/v1/products(' + searchQuery.trim().split(' ').map(keyword => ('search=' + keyword)).join('&') +
            ')?show=sku,name,mediumImage,thumbnailImage,regularPrice,shortDescription&pageSize=20&page=1&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG&format=json';
        return this.http.get(url).map(res => res.json());
    }

    getProductsByCategory(categoryName: string): Observable<any> {
        const url = 'https://api.bestbuy.com/v1/products(categoryPath.name="' + categoryName + '")?format=json&show=sku,name,mediumImage,thumbnailImage,regularPrice,shortDescription&pageSize=20&page=1&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG';
        console.log(url);
        return this.http.get(url).map(res => res.json());
    }

    getProductBySku(sku: number): any {
        // return this.list.filter(item => item.id === id)[0];
        const url = 'https://api.bestbuy.com/v1/products/' + sku + '.json?show=all&apiKey=NrzcAJWwiPaxVfuo9ZJ9X2XG';
        return this.http.get(url).map(res => res.json());        
    }
}
