const useFormData = () => {
  const typeData = ["Any", "Rent", "Buy"];
  const propertyTypeData = ["Any", "Appartment", "House", "Condo", "Land"];
  const bedRooms = ["Any", 1, 2, 3, 4, 5, 6, 7, 8];

  const typeContent = typeData.map((type) => (
    <option id={type} key={type}>
      {type}
    </option>
  ));

  const propertyContent = propertyTypeData.map((property) => (
    <option id={property} key={property}>
      {property}
    </option>
  ));

  const bedRoomsContent = bedRooms.map((bedroom) => (
    <option id={bedroom} key={bedroom}>
      {bedroom}
    </option>
  ));
  return [typeContent, propertyContent, bedRoomsContent];
};

export default useFormData;
