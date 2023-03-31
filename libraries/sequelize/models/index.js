const { ProductsSchema, Products } = require("./products.model");
const { UsersSchema, Users } = require("./users.model");
const { CategoriesSchema, Categories } = require("./categories.model");
const { SubCategoriesSchema, SubCategories } = require("./subcategories.model");
const { InventoriesSchema, Inventories } = require("./inventories.model");
const { ProductsTagsSchema, ProductsTags } = require("./productstags.model");
const { UserRolesSchema, UserRoles } = require("./userroles.model");

function setupModels(sequelize) {
   //Users tables
   Users.init(UsersSchema, Users.config(sequelize));
   UserRoles.init(UserRolesSchema, UserRoles.config(sequelize));
   //Products tables
   Categories.init(CategoriesSchema, Categories.config(sequelize));
   SubCategories.init(SubCategoriesSchema, SubCategories.config(sequelize));
   Products.init(ProductsSchema, Products.config(sequelize));
   ProductsTags.init(ProductsTagsSchema, ProductsTags.config(sequelize));
   Inventories.init(InventoriesSchema, Inventories.config(sequelize));

   //Associations
      //Users
   Users.associate(sequelize.models);
   UserRoles.associate(sequelize.models);
      //Products
   Categories.associate(sequelize.models);
   SubCategories.associate(sequelize.models);
   Products.associate(sequelize.models);
   ProductsTags.associate(sequelize.models);
   Inventories.associate(sequelize.models);

}

module.exports = setupModels;
