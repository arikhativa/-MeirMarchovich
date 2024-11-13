import { Component, Input } from '@angular/core'
import { Product } from '../misc/products'
import { HeaderSize } from '../misc/types'

@Component({
    selector: 'app-gallery-image',
    templateUrl: './gallery-image.component.html',
    styleUrl: './gallery-image.component.scss',
})
export class GalleryImageComponent {
    @Input() product!: Product
    @Input() size?: HeaderSize = 'small'

    ngOnInit(): void {
        if (!this.product) {
            throw new Error(
                'Product input is required for GalleryImageComponent'
            )
        }
    }

    get header() {
        return `${this.product.type}, ${this.product.subtype}, ${this.product.name}`
    }
}
