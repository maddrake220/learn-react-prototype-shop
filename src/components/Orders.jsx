import { useMemo } from "react";
import useActions from "../hooks/useActions";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";

export default function Orders() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const { removeFromOrders, removeAllFromOrders } = useActions();
  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);
  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div classname="title">You don't have any orders</div>
          <div classname="subtitle">Click on a + to Add an order</div>
        </div>
      </aside>
    );
  }
  return (
    <aside>
      <div className="order">
        <div className="body">
          {orders.map((order) => {
            const { id, quantity } = order;
            const prototype = prototypes.find((p) => p.id === id);
            const click = () => {
              removeFromOrders(id);
            };
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail}></video>
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} x {quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {prototype.price * order.quantity}</p>
                  <button className="btn btn--link">
                    <i className="icon icon--cross" onClick={click} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="action">
                <div className="price">$ {totalPrice}</div>
              </div>
              <button className="btn btn--link" onClick={removeAllFromOrders}>
                <i className="icon icon--delete"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
