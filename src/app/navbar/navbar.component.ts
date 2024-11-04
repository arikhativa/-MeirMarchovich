import { Component, Input } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'
import { pathToIndex } from '../misc/utils'
import { PagesNames, ROUTER_PATHS } from '../misc/types'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    @Input() isMobile!: boolean
    isMenuOpen: boolean = false
    activeIndex: number = 0
    allPages: { path: ROUTER_PATHS; title: PagesNames }[] = []

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter(
                    (event): event is NavigationEnd =>
                        event instanceof NavigationEnd
                )
            )
            .subscribe(this.setIndexViaURL)

        this.allPages = Object.keys(ROUTER_PATHS).map((key) => {
            return {
                path: ROUTER_PATHS[key as keyof typeof ROUTER_PATHS],
                title: PagesNames[key as keyof typeof PagesNames],
            }
        })
    }

    setIndexViaURL = (event: NavigationEnd) => {
        const i = pathToIndex(
            event.urlAfterRedirects as keyof typeof ROUTER_PATHS
        )

        this.activeIndex = i
    }

    setActive(i: number) {
        this.activeIndex = i
    }

    isActive(i: number) {
        return this.activeIndex === i
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
    }
}
