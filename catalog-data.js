/**
 * Category class
 */
class Category {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

/**
 * Product class
 */
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Constants
const MAX_CATS = 2;
const MAX_PRODUCTS = 4;
const MIN_PRICE = 100;
const MAX_PRICE = 50000;

// Make root Category
let RootCategory = new Category('ROOT');
// Random number between 1 and 10 of level1 categories
let numLevel1Categories = Math.floor(Math.random() * MAX_CATS) + 1;
for (let i = 0; i < numLevel1Categories; i++) {
    // Level 1
    let level1Cat = new Category(`L1_${i+1}`);
    // Add level1 category to root category
    RootCategory.addChild(level1Cat);
    // Random number between 1 and MAX_CATS of level2 categories
    let numLevel2Categories = Math.floor(Math.random() * MAX_CATS) + 1;
    // Generate Level 2 subcategories
    for (let j = 0; j < numLevel2Categories; j++) {
        let level2Cat = new Category(`L1_${i+1}_L2_${j+1}`);
        // Add level2 category to level1 category
        level1Cat.addChild(level2Cat);
        // Random number between 1 and MAX_CATS of level3 categories
        let numLevel3Categories = Math.floor(Math.random() * MAX_CATS) + 1;
        // Generate Level 3 subcategories
        for (let k = 0; k < numLevel2Categories; k++) {
            let level3Cat = new Category(`L1_${i+1}_L2_${j+1}_L3_${k+1}`);
            // Add level2 category to level1 category
            level2Cat.addChild(level3Cat);
            // Generate random number of products (between 1 and MAX_PRODUCTS)
            let numProducts = Math.floor(Math.random() * MAX_PRODUCTS) + 1;
            for (let l = 0; l < numProducts; l++) {
                // Random price between MIN_PRICE and MAX_PRICE
                let randomPrice = Math.round(Math.random() * (MAX_PRICE - MIN_PRICE + 1)) + MIN_PRICE;
                level3Cat.addChild(new Product(`L1_${i+1}_L2_${j+1}_L3_${k+1}_P${l+1}`, randomPrice));
            }
        }
    }
}

module.exports = RootCategory;
