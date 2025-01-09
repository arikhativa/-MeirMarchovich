import { Component } from '@angular/core'
import { Product, ProductSubType, ProductType } from '../misc/products'
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
        { name: ProductType.Ferrous, code: ProductType.Ferrous },
        { name: ProductType.Miscellaneous, code: ProductType.Miscellaneous },
        { name: ProductType.NonFerrous, code: ProductType.NonFerrous },
    ]

    selectedTypes: MultiSelectType[] = [...this.multiSelectTypes]

    products!: Product[]

    constructor(private productsService: ProductsService) {}

    ngOnInit() {
        this.products = this.productsService.allProducts
    }

    // "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined
    getColorByType(type: ProductType): TagColor {
        if (type === ProductType.Ferrous) {
            return 'success'
        }
        if (type === ProductType.Miscellaneous) {
            return 'warning'
        }
        return undefined
    }

    getColorBySubType(type: ProductSubType): TagColor {
        if (type === ProductSubType.Aluminum) {
            return 'success'
        }
        if (type === ProductSubType.Brass) {
            return 'secondary'
        }
        if (type === ProductSubType.Copper) {
            return 'warning'
        }
        if (type === ProductSubType.Lead) {
            return undefined
        }
        if (type === ProductSubType.Nickel) {
            return 'danger'
        }
        if (type === ProductSubType.Zinc) {
            return 'contrast'
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
