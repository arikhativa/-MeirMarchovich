import { NavbarComponent } from './../navbar/navbar.component'
import { NgModule } from '@angular/core'
import { IntroComponent } from '../intro/intro.component'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component'

@NgModule({
    declarations: [NavbarComponent, IntroComponent, LogoComponent],
    imports: [RouterModule, CommonModule],
    exports: [IntroComponent, NavbarComponent],
})
export class BodyModule {}
