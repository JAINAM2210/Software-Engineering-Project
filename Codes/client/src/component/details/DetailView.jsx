
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Typography, styled, Grid, colors } from '@mui/material';
import ActionItem  from './ActionItem';

const Component = styled(Box)`
    background: #F2F2F2;
    margin-op : 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`

const DetailView= () =>{
    
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const { id } = useParams();
    const dispatch = useDispatch();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {   
        if(product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading])

    console.log(product);

    return(
        <Component>
            {
                product && Object.keys(product).length && 
                <Grid container>
                    <Grid item lg = {4} md={4} sm={8} xs={12}> 
                        <ActionItem product = {product} />
                    </Grid>
                    <RightContainer item lg = {8} md={8} sm={8} xs={12}> 
                        <Typography> {product.title.longTitle} </Typography>
                        <Typography styled={{marginTop : 5, color : '#878787', fontsize : 14}}> 
                            8 rating & 1 review
                            <Box component="span"><img src = {fassured} style={{width: 77, marginLeft: 20}}/></Box>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                    </RightContainer>
                </Grid>   
            }
        </Component>
    )
}

export default DetailView;