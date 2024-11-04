import { Component } from '@angular/core'

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
    images: { src: string }[] = []
    singleImages: string[] = []
    multiImage2: string[] = []
    multiImage2b: string[] = []
    multiImage3: string[] = []
    multiImage4: string[] = []

    ngOnInit() {
        for (let i = 0; i < 13; i++) {
            this.images.push({
                src: `assets/images/gallery/${i}.jpg`,
            })
        }
        for (let i = 0; i < 2; i++) {
            this.multiImage2.push(this.images[i].src)
        }
        for (let i = 2; i < 6; i++) {
            this.multiImage4.push(this.images[i].src)
        }
        for (let i = 6; i < 9; i++) {
            this.multiImage3.push(this.images[i].src)
        }
        for (let i = 9; i < 11; i++) {
            this.multiImage2b.push(this.images[i].src)
        }
        for (let i = 11; i < 13; i++) {
            this.singleImages.push(this.images[i].src)
        }
    }
}
