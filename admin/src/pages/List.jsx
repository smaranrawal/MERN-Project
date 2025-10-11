import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/list`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res_data = await response.json();
      // console.log(res_data);
      if (response.ok) {
        setList(res_data.products);
      } else {
        toast.error(res_data.message);
      }
    } catch (error) {}
  };

  const removeProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/remove`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id }),
        }
      );
      const res_data = await response.json();
      // console.log(res_data);
      if (response.ok) {
        toast.success(res_data.message);
        await fetchList();
      } else {
        toast.error(res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-gray-800 text-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-900 text-amber-400">
            <th className="py-2 px-4 text-left">Image</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Category</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {list && list.length > 0 ? (
            list.map((product) => (
              <tr
                key={product._id}
                className="border-b border-gray-700 hover:bg-gray-700"
              >
                <td className="py-2 px-4">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">${product.price}</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
                    onClick={() => removeProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-400">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
