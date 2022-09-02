import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import "./CartPrice.scss";

function CartPrice({ cartList, checkedArray }) {
  const [price, setPrice] = useState(0);
  const [sale, setSale] = useState(0);
  const [wrap, setWrap] = useState(0);
  const [delivery, setDelivery] = useState(price > 30000 ? 2500 : 0);
  const [totalPrice, setTotalPrice] = useState(0);

  let usePrice = 0;
  let useSale = 0;
  let useWrap = 0;

  const reNumber = (total) => {
    total = String(total);

    if (7 > total.length && total.length > 3) {
      total = total.slice(0, -3) + "," + total.slice(-3);
    } else if (10 > total.length && total.length > 6) {
      total = total.slice(0, -6) + "," + total.slice(-6, -3) + "," + total.slice(-3);
    }

    return total;
  };

  useEffect(() => {
    if (cartList.length > 0) {
      cartList.forEach((element) => {
        if (checkedArray.includes(element.id)) {
          usePrice += element.detail.price_origin * element.quantity;
          useSale += element.detail.price_origin * element.quantity * element.detail.sale;
          useWrap += element.detail.wrap && 2000;
        }
      });
      setPrice(reNumber(usePrice));
      setSale(reNumber(useSale));
      setWrap(reNumber(useWrap));
      setTotalPrice(reNumber(usePrice - useSale + useWrap + delivery));
    }
  }, [cartList, checkedArray]);

  return (
    <>
      <section className="price-info">
        <div className="price-info-inner">
          <ul className="price-info-ul">
            <li className="price-info-li flex-bewteen">
              <p>상품 금액</p>
              <p>+ {price}원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>상품 할인</p>
              <p style={{ color: "red" }}>- {sale}원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>포장비</p>
              <p>+ {wrap}원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>부가 쇼핑백</p>
              <p>+ 0원</p>
            </li>
            <li className="price-info-li flex-bewteen">
              <p>배송비</p>
              <p>+ {delivery}원</p>
            </li>
          </ul>

          <div className="price-info-li-total flex-bewteen">
            <p>결제 예상 금액</p>
            <p>{totalPrice}원</p>
          </div>
          <div className="price-info-button">
            <Link to={`../payment/${checkedArray.join("-")}`}>
              <button className="price-info-button-inner">{totalPrice}원 주문하기</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPrice;
