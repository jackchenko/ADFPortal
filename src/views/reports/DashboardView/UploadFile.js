// import React, { useState } from 'react';
import React from 'react';
import clsx from 'clsx';
// import moment from 'moment';
// import { v4 as uuid } from 'uuid';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  // Chip,
  Divider,
  // Table,
  // TableBody,
  // TableCell,
  // TableHead,
  // TableRow,
  // TableSortLabel,
  // Tooltip,
  makeStyles
} from '@material-ui/core';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// const data = [
//   {
//     id: uuid(),
//     ref: 'CDD1049',
//     amount: 30.5,
//     customer: {
//       name: 'Ernst & Young Toronto - Canada'
//     },
//     createdAt: 1555016400000,
//     status: 'validating'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1048',
//     amount: 25.1,
//     customer: {
//       name: 'Deloitte Toronto - Canada'
//     },
//     createdAt: 1555016400000,
//     status: 'token issued'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1047',
//     amount: 10.99,
//     customer: {
//       name: 'Ernst & Young Toronto - Canada'
//     },
//     createdAt: 1554930000000,
//     status: 'case rejected'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1046',
//     amount: 96.43,
//     customer: {
//       name: 'KPMG New York - USA'
//     },
//     createdAt: 1554757200000,
//     status: 'token issued'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1045',
//     amount: 32.54,
//     customer: {
//       name: 'PWG Shanghai - China'
//     },
//     createdAt: 1554670800000,
//     status: 'documents received'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1044',
//     amount: 16.76,
//     customer: {
//       name: 'KPMG New York - USA'
//     },
//     createdAt: 1554670800000,
//     status: 'validating'
//   }
// ];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const UploadFile = ({ className, ...rest }) => {
  const classes = useStyles();
  // const [orders] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="File Upload" />
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={26}
      >
        <input type="file" name="file" />
        <Button>Submit</Button>
      </Box>
    </Card>
  );
};

UploadFile.propTypes = {
  className: PropTypes.string
};

export default UploadFile;
