import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-multi-image',
    templateUrl: './multi-image.component.html',
    styleUrl: './multi-image.component.scss',
})
export class MultiImageComponent {
    @Input() images?: string[]
    @Input() image?: string
}
