async function fetchRandomUserData() {
  const response = await fetch("https://randomuser.me/api/");

  if (!response.ok) {
    throw new Error("Failed Fetch")
  }

  const json = await response.json();

  results = json.results[0];
  return {
    name: `${results.name.first} ${results.name.last}`,
    email: results.email,
  };
}

async function displayUserData() {
  try {
    const data = await fetchRandomUserData();
    console.log(`Name: ${data.name}`);
    console.log(`Email: ${data.email}`);
  } catch (error) {
    console.warn(error.message)
  }

}

displayUserData();
