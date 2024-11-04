import { Component } from '@angular/core'

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
    images: { src: string }[] = []
    multiImage4: string[] = []

    ngOnInit() {
        for (let i = 0; i < 13; i++) {
            this.images.push({
                src: `assets/images/gallery/${i}.jpg`,
            })
        }
        for (let i = 0; i < 4; i++) {
            this.multiImage4.push(this.images[i].src)
        }
    }
}
