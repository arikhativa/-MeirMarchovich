import { Component } from '@angular/core'
import { allProducts, Product } from '../misc/products'
import { FilterService } from 'primeng/api'

@Component({
    selector: 'app-products-store',
    templateUrl: './products-store.component.html',
    styleUrl: './products-store.component.scss',
})
export class ProductsStoreComponent {
    allProducts: Product[] = allProducts
    products!: Product[]

    constructor(private filterService: FilterService) {}

    ngOnInit() {
        this.allProducts.forEach((product, index) => {
            product.img = `assets/images/gallery/${index}.jpg`
        })
        this.products = this.allProducts
    }
}
