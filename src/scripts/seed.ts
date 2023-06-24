import { ProductModel } from "../modules/product/ProductModel";
import { connectDatabaseK8s } from "../mongo/mongoK8s";

const seedRun = async () => {
  const productA = await new ProductModel({
    name: "Computer",
    description: "Apple M1",
    price: 100000,
    barCode: "172837127637123",
  }).save();

  const productB = await new ProductModel({
    name: "Cellphone",
    description: "Iphone 14",
    price: 12322,
    barCode: "172387123827183",
  }).save();

  console.log({ productA });
  console.log({ productB });
};

(async () => {
  try {
    await connectDatabaseK8s();

    await seedRun();
  } catch (err) {
    console.log("err: ", err, err.stack);
    process.exit(1);
  }

  process.exit(0);
})();
