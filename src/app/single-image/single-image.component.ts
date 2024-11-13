import { Component, Input } from '@angular/core'
import { Product } from '../misc/products'

@Component({
    selector: 'app-single-image',
    templateUrl: './single-image.component.html',
    styleUrl: './single-image.component.scss',
})
export class SingleImageComponent {
    @Input() product!: Product
}
