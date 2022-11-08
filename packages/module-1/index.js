import module2Url from "module-2/index?url";

function module1() {
  console.log("I am Module 1");

  console.log("Module 2 URL", module2Url);
}

export { module1 };
