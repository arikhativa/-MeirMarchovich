import { NavbarComponent } from './../navbar/navbar.component'
import { NgModule } from '@angular/core'
import { IntroComponent } from '../intro/intro.component'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { LogoComponent } from '../logo/logo.component'
import { VidComponent } from '../vid/vid.component'
import { GalleryComponent } from '../gallery/gallery.component'
import { GalleriaModule } from 'primeng/galleria'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card';
import { MultiImageComponent } from '../multi-image/multi-image.component'
@NgModule({
    declarations: [
        NavbarComponent,
        IntroComponent,
        LogoComponent,
        VidComponent,
        GalleryComponent,
        MultiImageComponent,
    ],
    imports: [
        CardModule,
        ButtonModule,
        RouterModule,
        CommonModule,
        GalleriaModule,
    ],
    exports: [IntroComponent, NavbarComponent],
})
export class BodyModule {}
