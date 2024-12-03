import { Component, Input } from '@angular/core'

export interface TextWithImageProp {
    image: string
    title: string
    body: string
    textLocation: 'left' | 'right'
    link?: { text: string; url: string }
}

@Component({
    selector: 'app-text-with-image',
    templateUrl: './text-with-image.component.html',
    styleUrl: './text-with-image.component.scss',
})
export class TextWithImageComponent {
    @Input() prop!: TextWithImageProp
}
