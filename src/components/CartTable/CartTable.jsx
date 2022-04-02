import React from "react";
import "./cartTable.css";

function CartTable() {
  return (
    <div className="price_table text_center mr_3 pd_md">
      <h2 className="pd_1_tb">Price Table</h2>
      <table>
        <tr>
          <td>Price (2 items)</td>
          <td>$33.25</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td>- $10</td>
        </tr>
        <tr>
          <td>Delivery Charges</td>
          <td>$5</td>
        </tr>
        <tr>
          <th>TOTAL AMOUNT</th>
          <th>$28.25</th>
        </tr>
      </table>
      <p className="mr_tb_md">You will save $12 on this order</p>
      <button className="btn_ecom">Place order</button>
    </div>
  );
}

export { CartTable };
