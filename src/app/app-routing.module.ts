import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IntroComponent } from './intro/intro.component'
import { ROUTER_PATHS } from './misc/types'
import { ProductsComponent } from './products/products.component'

const routes: Routes = [
    {
        path: ROUTER_PATHS.HOME.replace(/^\//, ''),
        component: IntroComponent,
    },
    {
        path: ROUTER_PATHS.PRODUCTS.replace(/^\//, ''),
        component: ProductsComponent,
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
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
