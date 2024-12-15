export const getAllProducts = async () => {
  try {
    const response = await fetch("https://canthaitoan.vercel.app/api/auth");
    // const response = await fetch("http://localhost:3001/product/");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    return response.json();
  } catch (error: any) {
    throw new Error(`Data failed: ${error.message}`);
  }
};
