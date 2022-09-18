import "./index.scss"

import axios from "axios";

import { ListContent, TabBtn } from "../../../components/Products";
import { useEffect, useState } from "react";

function WeeklyBest() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:10010/products/best/weekly`)
    .then((res) => {setProducts(res.data.data)})
  }, [])

  return (
    <div className="weekly-best">
      <div className="product-header">
        <h2 className="product-title">위클리 베스트</h2>
      </div>
      {/* 메뉴 탭 */}
      <TabBtn />
      <div className="container">
        <ListContent products={products}>
          <div className="date-filter">
            22년 9월 2째주
            <button className="filter">판매순</button>
          </div>
        </ListContent>
      </div>
    </div>
  );
}

export default WeeklyBest;
