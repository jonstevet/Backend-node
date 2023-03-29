const { ProductsSchema, ProductsModel } = require('./products.model');
const { UsersSchema, UsersModel } = require('./user.model');
const { CategoriesSchema, CategoriesModel } = require('./categories.model');
const { SubCategoriesSchema, SubCategoriesModel } = require('./subcategories.model');
const { InventoriesSchema, InventoriesModel } = require('./inventories.model');

function setupModels(sequelize) {
    ProductsModel.init(ProductsSchema, ProductsModel.config(sequelize));
    UsersModel.init(UsersSchema, UsersModel.config(sequelize));
    CategoriesModel.init(CategoriesSchema, CategoriesModel.config(sequelize));
    SubCategoriesModel.init(SubCategoriesSchema, SubCategoriesModel.config(sequelize));
    InventoriesModel.init(InventoriesSchema, InventoriesModel.config(sequelize));
    return [ProductsModel, UsersModel, CategoriesModel, SubCategoriesModel, InventoriesModel];
}

module.exports = setupModels;