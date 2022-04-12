import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Toolbar } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, faculty_id, dept, mob, del) {
  return { name, faculty_id, dept, mob, del };
}

const rows = [
  createData('Dr. Reavthi T', 1, 'Computer Science', 1324567890,<IconButton color="inherit"><CancelIcon /></IconButton>),
  createData('Mrs. Mohanapriya D', 2, 'Computer Science', 1324567890,<IconButton color="inherit"><CancelIcon /></IconButton>),
];

export default function Tables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Faculty Id</StyledTableCell>
            <StyledTableCell align="center">Department</StyledTableCell>
            <StyledTableCell align="center">Mobile</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.faculty_id}</StyledTableCell>
              <StyledTableCell align="center">{row.dept}</StyledTableCell>
              <StyledTableCell align="center">{row.mob}</StyledTableCell>
              <StyledTableCell align="center">{row.del}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
