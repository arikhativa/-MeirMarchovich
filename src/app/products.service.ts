import { Injectable } from '@angular/core'
import { allProducts } from './misc/products'

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private _allProducts = allProducts

    constructor() {
        this._allProducts.forEach((product, index) => {
            product.img = `assets/images/gallery/${index}.jpg`
        })
    }

    get allProducts() {
        return this._allProducts
    }
}
