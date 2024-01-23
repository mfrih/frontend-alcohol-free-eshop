import React from "react";

function SubCategoryList({ uniqueSubCategories }) {
  return (
    <>
      <div>
        {uniqueSubCategories.map((subcategory) => {
          return (
            <div key={crypto.randomUUID}>
              <button>{subcategory}</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SubCategoryList;
