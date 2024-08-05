import "./filter.scss";
import useFormData from "../../hooks/useFormData";

const Filter = () => {
  const [typeContent, propertyContent, bedRoomsContent] = useFormData();
  return (
    <div className="filter">
      <h1>
        Search Results for <b> London</b>
      </h1>
      <form>
        <div className="top">
          <div className="item">
            <label htmlFor="city">Location</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
            />
          </div>
        </div>

        <div className="bottom">
          <div className="item">
            <label htmlFor="type">Type </label>
            <select name="type" id="type">
              {typeContent}
            </select>
          </div>

          <div className="item">
            <label htmlFor="properties">Properties</label>
            <select name="type" id="type">
              {propertyContent}
            </select>
          </div>

          <div className="item">
            <label htmlFor="type">Min Price </label>
            <input type="number" id="min" name="min" placeholder="Min price" />
          </div>

          <div className="item">
            <label htmlFor="max">Max Price </label>
            <input type="number" id="max" name="max" placeholder="Max price" />
          </div>

          <div className="item">
            <label htmlFor="bedroom">Bedrooms</label>
            <select name="bedroom" id="bedroom">
              {bedRoomsContent}
            </select>
          </div>

          <button>
            <img src="./search.png" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
