import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-multi-image-3',
    templateUrl: './multi-image-3.component.html',
    styleUrl: './multi-image-3.component.scss',
})
export class MultiImage3Component {
    @Input() images!: string[]
}
