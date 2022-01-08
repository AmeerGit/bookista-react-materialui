import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Stack, Paper, Box, Button } from '@mui/material';
import faker from 'faker';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const cardTemplate6 = ({ title, imageUrl, description, price, offerPrice }) => (
    <Paper sx={{ p: 1, color: 'background.paper', display: 'flex', flexDirection: 'row-reverse', boxShadow: 'none' }}>
        <Stack direction="column" m={2} spacing={3}>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
            <Stack direction="row" alignItems="baseline" m={2} spacing={1.5}>
                <Typography gutterBottom variant="h4" component="div">
                    $ {price}
                </Typography>
                <Typography gutterBottom variant="offerPrice" component="div">
                    $ {offerPrice}
                </Typography>
            </Stack>
            <Stack direction="row" alignItems="baseline" m={2} spacing={1.5}>
                <Button variant="outlined" color="error" startIcon={<ShoppingCartIcon />}>
                    Add to cart
                </Button>
                <Button variant="outlined" startIcon={<FavoriteBorderIcon />}>
                    {' '}
                </Button>
            </Stack>
        </Stack>
        <img src={imageUrl} width="150" height="200" alt="related books" />
    </Paper>
);

export default cardTemplate6;
