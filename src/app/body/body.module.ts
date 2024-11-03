import { NavbarComponent } from './../navbar/navbar.component'
import { NgModule } from '@angular/core'
import { IntroComponent } from '../intro/intro.component'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [NavbarComponent, IntroComponent],
    imports: [RouterModule, CommonModule],
    exports: [IntroComponent, NavbarComponent],
})
export class BodyModule {}
