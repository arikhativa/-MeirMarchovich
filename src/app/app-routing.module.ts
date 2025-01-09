import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IntroComponent } from './intro/intro.component'
import { ROUTER_PATHS } from './misc/types'
import { ProductsComponent } from './products/products.component'
import { AboutComponent } from './about/about.component'
import { LicensesComponent } from './licenses/licenses.component'

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
        component: AboutComponent,
    },
    {
        path: ROUTER_PATHS.CONTACT.replace(/^\//, ''),
        component: IntroComponent,
    },
    {
        path: ROUTER_PATHS.LICENSES.replace(/^\//, ''),
        component: LicensesComponent,
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
