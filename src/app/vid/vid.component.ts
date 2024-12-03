import { Component } from '@angular/core'

@Component({
    selector: 'app-vid',
    templateUrl: './vid.component.html',
    styleUrl: './vid.component.scss',
})
export class VidComponent {
    ngAfterViewInit() {
        const vidElement = document.getElementById('video') as HTMLVideoElement
        if (vidElement) {
            vidElement.muted = true
            vidElement.play()
        }
    }
}
