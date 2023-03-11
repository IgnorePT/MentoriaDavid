export const mapProductData = (products, type = "default") => {
    return products.map(product => {
        switch (type) {
            case "new":
                return {
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    image: product.images[0],
                    id: product.id,
                }
            default: 
                return product
        }
    })
}