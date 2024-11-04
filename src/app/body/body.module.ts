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
import { MultiImageComponent } from '../multi-image/multi-image.component';
import { MultiImage4Component } from '../multi-image-4/multi-image-4.component';
import { MultiImage2Component } from '../multi-image-2/multi-image-2.component';
import { MultiImage3Component } from '../multi-image-3/multi-image-3.component';
import { SingleImageComponent } from '../single-image/single-image.component';
import { AboutSectionComponent } from '../about-section/about-section.component'
@NgModule({
    declarations: [
        NavbarComponent,
        IntroComponent,
        LogoComponent,
        VidComponent,
        GalleryComponent,
        MultiImageComponent,
        MultiImage4Component,
        MultiImage2Component,
        MultiImage3Component,
        SingleImageComponent,
        AboutSectionComponent,
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
