import { Component } from '@angular/core'
import { Product } from '../misc/products'
import { ProductsService } from '../products.service'

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
    products: Product[] = []
    singleProduct: Product[] = []
    multiProduct2: Product[] = []
    multiProduct2b: Product[] = []
    multiProduct3: Product[] = []
    multiProduct4: Product[] = []

    constructor(private productsService: ProductsService) {}

    ngOnInit() {
        this.products = this.productsService.allProducts
        for (let i = 0; i < 2; i++) {
            this.multiProduct2.push(this.products[i])
        }
        for (let i = 2; i < 6; i++) {
            this.multiProduct4.push(this.products[i])
        }
        for (let i = 6; i < 9; i++) {
            this.multiProduct3.push(this.products[i])
        }
        for (let i = 9; i < 11; i++) {
            this.multiProduct2b.push(this.products[i])
        }
        for (let i = 11; i < 13; i++) {
            this.singleProduct.push(this.products[i])
        }
    }
}
