import { Typography, Box, styled, Button } from "@mui/material";
import { addEllipis } from "../../utils/common-utils";
import { ButtonGroups } from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component= styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff;
 `
const LeftComponent= styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`
const SmallText = styled(Typography)`
     color: #878787;
     font-size: 14px;
     margin-top: 10px;
`

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`
const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    
    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="product" style={{height: 110, width:110}}/>
                <ButtonGroups/>
            </LeftComponent>
            <Box style={{margin: '20px'}}>
                <Typography>
                    {addEllipis(item.title.longTitle)}
                </Typography>
                <SmallText>
                    Seller: RetailNet
                </SmallText>
                <Typography style={{margin: '20px 0px'}}>
                    <Box component="span" style={{ fontWeight:600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp; 
                    <Box component="span" style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3C' }}>{item.price.discount} off</Box>
                </Typography>
                <Remove onClick= {() => removeItemFromCart(item.id)}>
                    Remove
                </Remove>
            </Box>
        </Component>
        
    )
}

export default CartItem;