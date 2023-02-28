import { eleadsalesactivitiesV1 } from "../../src/apis/eleadsalesactivities/v1";

export function validateLink(item: eleadsalesactivitiesV1.Link): void {

  // check if the first item has rel property
  expect(item).toHaveProperty("rel"); 
  
  // check if the first item has href property
  expect(item).toHaveProperty("href"); 
  
  // check if the first item has method property
  expect(item).toHaveProperty("method");
  
  // check if the first item has title property 
  expect(item).toHaveProperty("title"); 
}

export function validateActivityType(item: eleadsalesactivitiesV1.ActivityType): void {

  // check if the first item has id property
  expect(item).toHaveProperty("id"); 

  // check if the first item has name property
  expect(item).toHaveProperty("name"); 

  // check if the first item has links property
  expect(item).toHaveProperty("links"); 
    
  // if the first item has links property, check if it is an array
  if (item.links) {
    expect(Array.isArray(item.links)).toBeTruthy();
    
    // if result.items[0].links is an array, check if it has at least one item
    if (item.links.length > 0) {
      for (const link of item.links) {
        validateLink(link);
      }
    }
  }
}
