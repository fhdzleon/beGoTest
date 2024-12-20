import { create } from "zustand";

interface Destination {
  address: string;
  start_date: number;
  end_date: number;
  nickname: string;
  show_navigation: boolean;
}

interface Order {
  _id: string;
  order_number: string;
  type: string;
  destinations: Destination[];
}

interface OrderStore {
  orders: Order[];
  filteredOrders: Order[];
  error: string | null;
  setOrders: (orders: Order[]) => void;
  setError: (error: string | null) => void;
  filterOrders: (orderNumber: string) => void;
}

const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  filteredOrders: [],
  error: null,
  setOrders: (orders) => set({ orders, filteredOrders: orders }),
  setError: (error) => set({ error }),
  filterOrders: (orderNumber) =>
    set((state) => ({
      filteredOrders: state.orders.filter((order) =>
        order.order_number.includes(orderNumber)
      ),
    })),
}));

export default useOrderStore;
