import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-single-image',
    templateUrl: './single-image.component.html',
    styleUrl: './single-image.component.scss',
})
export class SingleImageComponent {
    @Input() image!: string
}
