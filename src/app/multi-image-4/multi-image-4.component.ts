import { Component, Input } from '@angular/core'
import { Product } from '../misc/products'

@Component({
    selector: 'app-multi-image-4',
    templateUrl: './multi-image-4.component.html',
    styleUrl: './multi-image-4.component.scss',
})
export class MultiImage4Component {
    @Input() products!: Product[]
}
