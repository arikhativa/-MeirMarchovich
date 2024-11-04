import { Component, HostListener } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    static readonly MAX_WIDTH = 768
    isMobile: boolean = false

    ngOnInit() {
        this.checkScreenSize()
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        this.checkScreenSize()
    }

    private checkScreenSize() {
        this.isMobile = window.innerWidth <= AppComponent.MAX_WIDTH
    }
}
