import listingStore from "./store/listingStore";
import dataespecialidades from "../data/job"

export default function CategoryOption() {

  const { categoriesServices } = dataespecialidades

  const getCategory = listingStore((state) => state.getCategory);
  const setCategory = listingStore((state) => state.setCategory);

  // handler
  const categoryHandler = (data) => {
    setCategory(data);
  };

  return (
    <>
      <div className="checkbox-style1 mb15">
        {categoriesServices.map((item,i) => (
          <label key={ i } className="custom_checkbox">
            {item.option}
            <input
              type="checkbox"
              onChange={() => categoryHandler(item.value)}
              checked={getCategory.includes(item.value)}
            />
            <span className="checkmark" />
            <span className="right-tags">(100)</span>
          </label>
        ))}
      </div>
    </>
  );
}
