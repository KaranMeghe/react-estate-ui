import "./list.scss";
import { listData } from "../../lib/dummyData";
import { Card } from "../index";

const ListPage = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListPage;
