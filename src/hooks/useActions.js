import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  const { addToOrders, removeFromOrders, removeAllFromOrders } =
    useContext(AppStateContext);
  return { addToOrders, removeFromOrders, removeAllFromOrders };
}
