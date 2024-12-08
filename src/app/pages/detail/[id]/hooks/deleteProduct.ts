let token = "";

if (typeof window !== "undefined") {
  token = window.localStorage.getItem("accessToken") ?? "";
}
export const deleteProduct = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/product/${id}`,
      // `http://localhost:3001/product/newproduct/product/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log(response);

      // Handle success
    } else {
      console.log(response);
      throw new Error("Failed post data");
      // Handle error
    }
  } catch (error) {
    throw new Error("Failed post data");
  }
};
