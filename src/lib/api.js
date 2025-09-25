const API_BASE_URL = "https://jsonplaceholder.typicode.com"

// JSONPlaceholder does not have a 'department' field, so i mapped 'company.name' to 'department'
// and 'username' to 'last name'.

export async function fetchUsers() {
  const response = await fetch(`${API_BASE_URL}/users`)
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  const data = await response.json()
  return data.map(mapJsonPlaceholderUserToUser)
}

// Helper function to map JSONPlaceholder user data to the User type
function mapJsonPlaceholderUserToUser(jpUser) {
  return {
    id: jpUser.id,
    name: jpUser.name,
    username: jpUser.username, // Using username as last name
    email: jpUser.email,
    company: {
      name: jpUser.company.name, // Using company name as department
      catchPhrase: jpUser.company.catchPhrase,
      bs: jpUser.company.bs,
    },
    address: jpUser.address,
    phone: jpUser.phone,
    website: jpUser.website,
  }
}