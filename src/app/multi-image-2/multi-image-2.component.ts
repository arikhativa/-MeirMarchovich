import { Component, Input } from '@angular/core'
import { Product } from '../misc/products'

@Component({
    selector: 'app-multi-image-2',
    templateUrl: './multi-image-2.component.html',
    styleUrl: './multi-image-2.component.scss',
})
export class MultiImage2Component {
    @Input() products!: Product[]
}
