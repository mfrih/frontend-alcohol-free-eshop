import React from "react";

function SubCategoryList({ uniqueSubCategories, setSearchParams }) {
  const handleSubCategoryClick = (subcategory) => {
    setSearchParams({ subcategory });
  };

  return (
    <>
      <div>
        {uniqueSubCategories.map((subcategory) => {
          return (
            <div
              key={crypto.randomUUID()}
              onClick={() => handleSubCategoryClick(subcategory)}
            >
              <button>{subcategory}</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SubCategoryList;
