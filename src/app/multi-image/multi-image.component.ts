import { Component, Input } from '@angular/core'
import { Product } from '../misc/products'

@Component({
    selector: 'app-multi-image',
    templateUrl: './multi-image.component.html',
    styleUrl: './multi-image.component.scss',
})
export class MultiImageComponent {
    @Input() products?: Product[]
    @Input() product?: Product
}
