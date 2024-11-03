import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IntroComponent } from './intro/intro.component'
import { ROUTER_PATHS } from './misc/types'

const routes: Routes = [
    {
        path: ROUTER_PATHS.HOME.replace(/^\//, ''),
        component: IntroComponent,
    },
    {
        path: ROUTER_PATHS.PRODUCTS.replace(/^\//, ''),
        component: IntroComponent,
    },
    {
        path: ROUTER_PATHS.ABOUT.replace(/^\//, ''),
        component: IntroComponent,
    },
    {
        path: ROUTER_PATHS.CONTACT.replace(/^\//, ''),
        component: IntroComponent,
    },
    {
        path: ROUTER_PATHS.LICENSES.replace(/^\//, ''),
        component: IntroComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
