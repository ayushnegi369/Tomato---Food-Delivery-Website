import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";

const Orders = () => {
    const { url, token } = useContext(StoreContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const response = await axios.post(
                    url + "/api/order/user-orders",
                    {},
                    { headers: { token } }
                );
                if (response.data.success) {
                    setOrders(response.data.orders);
                } else {
                    setError(response.data.message || "Failed to fetch orders");
                }
            } catch (err) {
                setError("Failed to fetch orders");
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, [url, token]);

    if (loading) return <div>Loading orders...</div>;
    if (error) return <div style={{ color: "red" }}>{error}</div>;

    return (
        <div style={{ padding: 24 }}>
            <h2>Your Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{new Date(order.date).toLocaleString()}</td>
                                <td>
                                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                        {order.items.map((item, idx) => (
                                            <li key={idx} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                                                <img
                                                    src={url + "/images/" + item.image}
                                                    alt={item.name}
                                                    style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 4, marginRight: 8 }}
                                                />
                                                <span style={{ fontWeight: 500 }}>{item.name}</span>
                                                <span style={{ marginLeft: 8, color: "#888" }}>x {item.quantity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td>₹{order.amount}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Orders; 