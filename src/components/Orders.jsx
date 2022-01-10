import useOrders from "../hooks/useOrders";

export default function Orders() {
  const orders = useOrders();
  return (
    <aside>
      <div>
        {orders.map((order) => {
          return (
            <div>
              {order.id} ${order.quantity}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
