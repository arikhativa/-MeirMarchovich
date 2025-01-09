export enum ProductType {
    Ferrous = 'Ferrous',
    Miscellaneous = 'Miscellaneous',
    NonFerrous = 'Non Ferrous',
}

export enum ProductSubType {
    Aluminum = 'Aluminum',
    Brass = 'Brass',
    Zinc = 'Zinc',
    Copper = 'Copper',
    Lead = 'Lead',
    Nickel = 'Nickel',
}

export interface Product {
    img: string
    name: string
    type: ProductType
    subtype?: ProductSubType
}

export const allProducts: Product[] = [
    // Ferrous
    {
        name: 'Heavy Melting Steel',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Pipe Scrap',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Fabrication',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'PNS',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Machine parts',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Shredded Steel Scrap',
        type: ProductType.Ferrous,
        img: '',
    },
    {
        name: 'Turnings',
        type: ProductType.Ferrous,
        img: '',
    },
    // Miscellaneous
    {
        name: 'DC Motors',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Armatures',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Mixed Electric Motors',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Electric Meter',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Transformer',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Rotors Stators',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Al Starter',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Aluco Bond',
        type: ProductType.Miscellaneous,
        img: '',
    },
    {
        name: 'Alternator',
        type: ProductType.Miscellaneous,
        img: '',
    },
    // NonFerrous Aluminum
    {
        name: 'Aluminium Dross',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Litho Sheets',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Talk',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Wheels',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Taint Tabor',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'UBC',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Aluminium Billets',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Alu Cables',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Wire',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Foil',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Aluminium Punching',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Aluminum profile',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Extrusion',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Series 5000',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Series 6000',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    {
        name: 'Series 7000',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Aluminum,
        img: '',
    },
    // NonFerrous Brass
    {
        name: 'Brass Dross',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Pallu Pales',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Hair Wire',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Brass Label',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Brass Ebony',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Honey',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Water Meter',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'radiator',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Turnings',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Billets',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    {
        name: 'Brass Valves',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Brass,
        img: '',
    },
    // NonFerrous Zinc
    {
        name: 'Dross',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Zinc,
        img: '',
    },
    {
        name: 'Zinc Saves',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Zinc,
        img: '',
    },
    {
        name: 'Zinc Die Cast',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Zinc,
        img: '',
    },
    // NonFerrous Copper
    {
        name: 'Dross',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Millberry',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Berry',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Birch Cliff',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Turnings',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Teli Birch',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Wire Rod',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Cable',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    {
        name: 'Armord Cable',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Copper,
        img: '',
    },
    // NonFerrous Lead
    {
        name: 'Lead Striping',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Lead,
        img: '',
    },
    {
        name: 'Lead Wheel Weight',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Lead,
        img: '',
    },
    {
        name: 'Lead Battery',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Lead,
        img: '',
    },
    {
        name: 'Mix Lead',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Lead,
        img: '',
    },
    // NonFerrous Nickel
    {
        name: '316',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Nickel,
        img: '',
    },
    {
        name: '304',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Nickel,
        img: '',
    },
    {
        name: '430',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Nickel,
        img: '',
    },
    {
        name: '304 Pipes',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Nickel,
        img: '',
    },
    {
        name: '316 Pipes',
        type: ProductType.NonFerrous,
        subtype: ProductSubType.Nickel,
        img: '',
    },
]
