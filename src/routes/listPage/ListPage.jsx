import "./listPage.scss";
import { listData } from "../../lib/dummyData";
import { Filter, Card } from "../../components";

const ListPage = () => {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div className="mapContainer">mapContainer</div>
    </div>
  );
};

export default ListPage;
