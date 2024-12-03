import { Component } from '@angular/core'
import { TextWithImageProp } from '../text-with-image/text-with-image.component'
import { aboutUs } from '../misc/strings'
import { PagesNames, ROUTER_PATHS } from '../misc/types'

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {
    readonly list: TextWithImageProp[] = [
        {
            image: 'assets/images/about/1.png',
            title: aboutUs.sectionA.title,
            body: aboutUs.sectionA.body,
            textLocation: 'left',
        },
        {
            image: 'assets/images/about/2.png',
            title: aboutUs.products.title,
            body: aboutUs.products.body,
            link: {
                text: PagesNames.PRODUCTS,
                url: ROUTER_PATHS.PRODUCTS,
            },
            textLocation: 'right',
        },
        {
            image: 'assets/images/about/3.png',
            title: aboutUs.order.title,
            body: aboutUs.order.body,
            textLocation: 'left',
        },
        {
            image: 'assets/images/about/4.png',
            title: aboutUs.moreInformation.title,
            body: aboutUs.moreInformation.body,
            link: {
                text: 'Contact Us',
                url: ROUTER_PATHS.CONTACT,
            },
            textLocation: 'right',
        },
    ]
}
