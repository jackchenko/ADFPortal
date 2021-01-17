import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
// import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  // ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    name: 'Token Issued',
    //  imageUrl: '/static/images/products/product_1.png',
    updatedAt: 'Amount: 32,000, Date: 2021-01-09'
  },
  {
    id: uuid(),
    name: 'Token Minted to ETH',
    //  imageUrl: '/static/images/products/product_2.png',
    updatedAt: 'Amount: 70,000, Date: 2020-11-01',
    date: '2020-01-01'
  },
  {
    id: uuid(),
    name: 'Token Transferred',
    //  imageUrl: '/static/images/products/product_3.png',
    updatedAt: 'Amount: 9,000, Date: 2020-08-29',
    date: '2020-01-01'
  },
  {
    id: uuid(),
    name: 'Token Minted to ETH',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: 'Amount: 100,000, Date: 2020-07-26',
    date: '2020-01-01'
  },
  {
    id: uuid(),
    name: 'Token Issued',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: 'Amount: 97,000, Date: 2020-05-30',
    date: '2020-01-01'
  }
];

const useStyles = makeStyles(({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
}));

const LatestProducts = ({ className, ...rest }) => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Transactions"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem
            divider={i < products.length - 1}
            key={product.id}
          >
            <ListItemText
              primary={product.name}
              secondary={product.updatedAt}
            />
            <IconButton
              edge="end"
              size="small"
            >
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={3}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
