export const handleSubmit = async (event: any) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  try {
    const response = await fetch("/api/submit-data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // Handle success
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle error
  }
};
