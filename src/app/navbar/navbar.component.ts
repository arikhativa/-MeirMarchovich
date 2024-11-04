import { Component, Input } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'
import { pathToIndex } from '../misc/utils'
import { PagesNames, ROUTER_PATHS } from '../misc/types'
import { MenuItem } from 'primeng/api'
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    constructor(private router: Router) {}

    items!: MenuItem[]

    ngOnInit() {
        this.items = [
            {
                label: PagesNames.HOME,
                route: ROUTER_PATHS.HOME,
            },
            {
                label: PagesNames.PRODUCTS,
                route: ROUTER_PATHS.PRODUCTS,
            },
            {
                label: PagesNames.ABOUT,
                route: ROUTER_PATHS.ABOUT,
            },
            {
                label: PagesNames.CONTACT,
                route: ROUTER_PATHS.CONTACT,
            },
            {
                label: PagesNames.LICENSES,
                route: ROUTER_PATHS.LICENSES,
            },
        ]
    }
}
