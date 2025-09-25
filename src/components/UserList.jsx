import React from 'react'
import { useState, useEffect, useCallback } from "react"
import { fetchUsers } from "../lib/api"


const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadUsers = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchUsers()
      console.log(data);
      setUsers(data)
    } catch (err) {
      setError("Failed to fetch users.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadUsers()
  }, [loadUsers])
  return (
    <div>UserList</div>
  )
}

export default UserList