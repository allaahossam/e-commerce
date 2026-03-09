import Image from "next/image";
import React from "react";
import { getUserOrders } from "../api/myOrders";

export default async function page() {

  const res = await getUserOrders();

  return (
    <div className="container mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        My Orders
      </h1>

      {res?.map((order: any, index: number) => (

        <div
          key={order._id}
          className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 mb-8"
        >

          {/* Order Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

            <div>
              <p className="text-sm text-gray-500">Order ID</p>
              <p className="font-medium text-gray-900">#{index + 1}</p>
              <p className="text-xs text-gray-400">
                ID: {order._id}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Placed On</p>
              <p className="font-medium text-gray-900">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Status</p>

              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                  {order.isPaid ? "Paid" : "Unpaid"}
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                  {order.isDelivered ? "Delivered" : "Processing"}
                </span>
              </div>
            </div>

          </div>

          {/* Items */}
          <div className="px-6 py-6 border-b border-gray-200">

            <h2 className="text-lg font-semibold mb-4">Items</h2>

            {order.cartItems.map((item: any) => (

              <div
                key={item._id}
                className="flex items-center justify-between mb-4"
              >

                <div className="flex gap-4 items-center">

                  <div className="w-20 h-20 border rounded-lg flex items-center justify-center p-2">
                    <Image
                      src={item.product.imageCover}
                      alt={item.product.title}
                      width={80}
                      height={80}
                    />
                  </div>

                  <div>
                    <p className="font-medium">
                      {item.product.title}
                    </p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.count}
                    </p>
                  </div>

                </div>

                <p className="font-semibold">
                  {item.price} EGP
                </p>

              </div>

            ))}

          </div>

          {/* Bottom Section */}
          <div className="grid md:grid-cols-2 gap-8 px-6 py-6">

            {/* Payment Summary */}
            <div>

              <h3 className="text-sm font-semibold mb-4 text-gray-700">
                PAYMENT SUMMARY
              </h3>

              <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method</span>
                  <span>{order.paymentMethodType}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping Price</span>
                  <span>{order.shippingPrice} EGP</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax Price</span>
                  <span>{order.taxPrice} EGP</span>
                </div>

                <div className="flex justify-between border-t pt-2 font-semibold">
                  <span>Total</span>
                  <span>{order.totalOrderPrice} EGP</span>
                </div>

              </div>

            </div>

            {/* User Info */}
            <div>

              <h3 className="text-sm font-semibold mb-4 text-gray-700">
                USER INFO
              </h3>

              <div className="border rounded-lg p-4 bg-gray-50 text-sm">

                <p className="font-medium">
                  {order.user.name}
                </p>

                <p className="text-gray-600">
                  Phone: {order.user.phone}
                </p>

                <p className="text-gray-600">
                  Email: {order.user.email}
                </p>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}