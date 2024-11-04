import { Component } from '@angular/core'
import { Product, ProductType } from '../misc/products'
import { ProductsService } from '../products.service'

interface MultiSelectType {
    name: ProductType
    code: ProductType
}

type TagColor =
    | 'success'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'contrast'
    | undefined

@Component({
    selector: 'app-products-store',
    templateUrl: './products-store.component.html',
    styleUrl: './products-store.component.scss',
})
export class ProductsStoreComponent {
    multiSelectTypes: MultiSelectType[] = [
        { name: ProductType.METALS, code: ProductType.METALS },
        { name: ProductType.PLASTICS, code: ProductType.PLASTICS },
    ]

    selectedTypes: MultiSelectType[] = [...this.multiSelectTypes]

    products!: Product[]

    constructor(private productsService: ProductsService) {}

    ngOnInit() {
        this.products = this.productsService.allProducts
    }

    getColorByType(type: ProductType): TagColor {
        if (type === ProductType.METALS) {
            return 'success'
        }
        return undefined
    }

    filterByType(type: ProductType) {
        this.products = this.productsService.allProducts.filter(
            (product) => product.type === type
        )
    }

    onSelectedTypesChange() {
        this.products = this.productsService.allProducts.filter((product) =>
            this.selectedTypes.some((type) => type.code === product.type)
        )
    }
}
