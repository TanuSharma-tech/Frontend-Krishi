// src/redux/actions/orderActions.js

export const addOrder = (order) => ({
  type: "ADD_ORDER",
  payload: order,
});

export const removeOrder = (orderId) => ({
  type: "REMOVE_ORDER",
  payload: orderId,
});

export const updateOrderStatus = (id, status) => ({
  type: "UPDATE_ORDER_STATUS",
  payload: { id, status },
});
