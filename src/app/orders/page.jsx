import { useState, useEffect } from "react";
import {
  LuCalendar,
  LuChevronDown,
  LuEye,
} from "react-icons/lu";
import { OrderDataTable } from "@/components";
import { getDishById, getOrderById } from "@/helpers";
import { toSentenceCase } from "@/utils";
import { orderHistoryData, dishesData, orderProgressData } from "@/assets/data";
export const orderRows = orderHistoryData.map((order) => {
  return {
    ...order,
    dish: dishesData.find((dish) => dish.id == order.dish_id),
  };
});

const columns = [
  {
    key: "date",
    name: "Date",
  },
  {
    key: "id",
    name: "Order ID",
  },
  {
    key: "dish_id",
    name: "Dish",
  },
  {
    key: "amount",
    name: "Total",
  },
  {
    key: "status",
    name: "Status",
  },
];

const OrderList = () => {
  const [fetchedOrders, setFetchedOrders] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resolvedStatuses = await Promise.all(
        Object.keys(orderProgressData).map(async (status, idx) => {
          const orders = await Promise.all(
            orderProgressData[status].map(async (order, index) => {
              order.order = await getOrderById(order.order_id);
              const dish = await getDishById(order.order?.dish_id ?? 0);
              return (
                <div
                  key={order.order_id + index}
                  className="flex items-center gap-4 rounded-lg bg-primary/10 p-2"
                >
                  <div className="flex h-16 w-16 items-center justify-center">
                    <img
                      src={dish?.images[0] ?? ""}
                      height={64}
                      width={64}
                      alt="food"
                    />
                  </div>
                  <div className="w-full">
                    <h6 className="mb-1 flex items-center justify-between text-base font-medium text-default-900">
                      {dish?.name}
                      <p className="me-1 text-xs font-medium text-default-400">
                        {order.time}
                      </p>
                    </h6>
                    <p className="font-medium text-default-600">
                      {order.order_id.toUpperCase()}
                    </p>
                  </div>
                </div>
              );
            })
          );

          return (
            <div className="mb-6" key={status + idx}>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <h2 className="mb-0.5 text-xl font-semibold text-default-800">
                  {toSentenceCase(status)}
                </h2>
                <a href="/admin/orders/9f36ca">
                  <LuEye size={18} />
                </a>
              </div>
              <div className="flex flex-col gap-4">{orders}</div>
            </div>
          );
        })
      );
      setFetchedOrders(resolvedStatuses);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <div className="grid gap-6 xl:grid-cols-12">
          <div className="xl:col-span-9">
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3"></div>
              <div className="grid grid-cols-1">
                <OrderDataTable
                  title="Order History"
                  columns={columns}
                  rows={orderRows}
                />
              </div>
            </div>
          </div>
          <div className="xl:col-span-3">
            <div className="rounded-lg border border-default-200">
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="mb-4 text-xl font-semibold text-default-800">
                    Ongoing Orders
                  </h2>
                  <div className="relative">
                    <span className="absolute start-2.5 top-1/2 -translate-y-1/2">
                      <LuCalendar size={16} className="text-default-700" />
                    </span>
                    <span className="absolute end-2.5 top-1/2 -translate-y-1/2">
                      <LuChevronDown size={16} className="text-default-700" />
                    </span>
                  </div>
                </div>
                {fetchedOrders}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
