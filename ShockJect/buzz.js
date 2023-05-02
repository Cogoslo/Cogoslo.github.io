function shockme() { async function postJSON(data) {
  try {
    const response = await fetch("https://do.pishock.com/api/apioperate/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body:(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
}
