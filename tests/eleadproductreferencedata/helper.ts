import { eleadproductreferencedataV1 } from "../../src/apis/eleadproductreferencedata/v1";

export function validateSubStatus(item: eleadproductreferencedataV1.SubStatus): void {

  // check if the item has subStatus property
  expect(item).toHaveProperty("subStatus"); 
}

export function validateStatuses(item: eleadproductreferencedataV1.Status): void {

  // check if the item has status property
  expect(item).toHaveProperty("status"); 

  // check if the item has substatuses property
  expect(item).toHaveProperty("subStatus"); 
    
  // if the item has substatuses property, check if it is an array
  if (item.subStatus) {
    expect(Array.isArray(item.subStatus)).toBeTruthy();
    
    // if item.substatuses is an array, check if it has at least one item
    if (item.subStatus.length > 0) {
      for (const subStatus of item.subStatus) {
        validateSubStatus(subStatus);
      }
    }
  }
}

export function validateSources(item: eleadproductreferencedataV1.Source): void {

  // check if the item has source property
  expect(item).toHaveProperty("name"); 
}
