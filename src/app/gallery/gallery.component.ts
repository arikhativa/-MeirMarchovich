import { Component } from '@angular/core'

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
    images: { src: string }[] = []

    ngOnInit() {
        for (let i = 0; i < 13; i++) {
            this.images.push({
                src: `assets/images/gallery/${i}.jpg`,
            })
        }
    }
}
