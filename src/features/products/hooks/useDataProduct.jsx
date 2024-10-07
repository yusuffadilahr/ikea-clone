import React from 'react'

const useDataProduct = () => {


    const ikeaOutdoorFurnitureProducts = [
        {
            id: 1,
            name: "TÄRNÖ",
            description: "Chair, outdoor, foldable, black/light brown stained.",
            price: 21.67, 
            category: "Chair",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/283/0728354_PE736202_S4.webp"
        },
        {
            id: 2,
            name: "HÖGSTEN",
            description: "Chair + armrest, outdoor, white.",
            price: 79.67, 
            category: "Chair",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/341/0134124_PE290006_S4.webp"
        },
        {
            id: 3,
            name: "LÄCKÖ",
            description: "Chair, outdoor, gray.",
            price: 33.00, 
            category: "Chair",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/283/0728346_PE736205_S4.webp"
        },
        {
            id: 4,
            name: "FEJAN",
            description: "Chair, outdoor, foldable, white.",
            price: 18.33, 
            category: "Chair",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/283/0728344_PE736190_S4.webp"
        },
        {
            id: 5,
            name: "FEJAN",
            description: "Table + 2 folding chairs, outdoor, white/white.",
            price: 63.27, 
            category: "Table and Chair Set",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/263/1126377_PE875712_S3.webp"
        },
        {
            id: 6,
            name: "TÄRNÖ",
            description: "Table + 2 chairs, outdoor, black/light brown stained.",
            price: 76.60, 
            category: "Table and Chair Set",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/355/1035546_PE838191_S4.webp"
        }
    ]

    const ikeaWorkspaceProducts = [
        {
            id: 1,
            name: "LÅNGFJÄLL Office Chair",
            description: "Ergonomic office chair with adjustable height and lumbar support.",
            price: 149.99,
            category: "Office Chair",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/254/0725412_PE734844_S4.webp"
        },
        {
            id: 2,
            name: "MALM Desk",
            description: "Simple and elegant desk with a spacious work surface.",
            price: 199.00,
            category: "Desk",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/359/0735975_PE740309_S4.webp"
        },
        {
            id: 3,
            name: "BEKANT Desk",
            description: "Sit/stand desk with adjustable height for a healthier work style.",
            price: 499.00,
            category: "Desk",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/354/0735409_PE739943_S4.webp"
        },
        {
            id: 4,
            name: "KALLAX Shelf Unit",
            description: "Versatile shelving unit that can be used to organize your workspace.",
            price: 89.99,
            category: "Storage",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/447/0644757_PE702939_S4.webp"
        },
        {
            id: 5,
            name: "FLEXA Desk",
            description: "A flexible desk that can adapt to your needs.",
            price: 249.00,
            category: "Desk",
            imageUrl: "https://flexaworld.com/cdn/shop/products/82-50176-40_01_1800x1800.jpg?v=1724858182"
        },
        {
            id: 6,
            name: "FLEXA Desk",
            description: "A flexible desk that can adapt to your needs.",
            price: 249.00,
            category: "Desk",
            imageUrl: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/106/0710683_PE727709_S4.webp"
        }
    ]

    return {
        ikeaOutdoorFurnitureProducts, ikeaWorkspaceProducts
    }
}

export default useDataProduct
