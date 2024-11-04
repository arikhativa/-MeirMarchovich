export enum ProductType {
    METALS = 'Metals',
    PLASTICS = 'Plastics',
}

export enum ProductSubType {
    IRON = 'Iron',
    STEAL = 'Steal',
    ALUMINUM = 'Aluminum',
    POLYETHYLENE = 'Polyethylene',
    PARAFFIN = 'Paraffin',
}

export interface Product {
    name: string
    img: string
    type: ProductType
    subtype: ProductSubType
}

export const allProducts: Product[] = [
    {
        type: ProductType.METALS,
        subtype: ProductSubType.IRON,
        name: 'iron 500',
        img: '',
    },
    {
        type: ProductType.METALS,
        subtype: ProductSubType.IRON,
        name: 'cast iron',
        img: '',
    },
    {
        type: ProductType.METALS,
        subtype: ProductSubType.IRON,
        name: 'iron shells',
        img: '',
    },
    {
        type: ProductType.METALS,
        subtype: ProductSubType.STEAL,
        name: 'steal 63',
        img: '',
    },
    {
        type: ProductType.METALS,
        subtype: ProductSubType.STEAL,
        name: 'arch steal',
        img: '',
    },
    {
        type: ProductType.METALS,
        subtype: ProductSubType.ALUMINUM,
        name: 'kitchen aluminum',
        img: '',
    },
    {
        type: ProductType.METALS,
        subtype: ProductSubType.ALUMINUM,
        name: ' aluminum oxide',
        img: '',
    },
    {
        type: ProductType.PLASTICS,
        subtype: ProductSubType.POLYETHYLENE,
        name: 'polyethylene 500',
        img: '',
    },
    {
        type: ProductType.PLASTICS,
        subtype: ProductSubType.POLYETHYLENE,
        name: 'polyethylene 1000',
        img: '',
    },
    {
        type: ProductType.PLASTICS,
        subtype: ProductSubType.POLYETHYLENE,
        name: 'polyethylene 2000',
        img: '',
    },
    {
        type: ProductType.PLASTICS,
        subtype: ProductSubType.PARAFFIN,
        name: 'paraffin monoxide',
        img: '',
    },
    {
        type: ProductType.PLASTICS,
        subtype: ProductSubType.PARAFFIN,
        name: 'paraffin 36',
        img: '',
    },
]
