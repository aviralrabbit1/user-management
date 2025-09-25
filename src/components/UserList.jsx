import React from 'react'
import { useState, useEffect, useCallback } from "react"
import { fetchUsers } from "../lib/api"
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';


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
    <div className="bg-card p-6 rounded-lg shadow-md">

      {loading && 
        <Box className="text-center">
          <CircularProgress color="success" size={60}/>
          <Typography variant="h3" gutterBottom>
            Loading users...
          </Typography>
        </Box>}
      {error && <p className="text-center text-destructive">{error}</p>}

      {!loading && !error && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="The table about users">
            <TableHead>
              <TableRow>
                <TableCell >
                  ID 
                </TableCell>
                <TableCell >
                  First Name 
                </TableCell>
                <TableCell >
                  Last Name 
                </TableCell>
                <TableCell >
                  Email 
                </TableCell>
                <TableCell >
                  Department
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.company.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default UserList