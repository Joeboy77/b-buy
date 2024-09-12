import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import Product2 from'../../assets/images/product2.png'
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";




const ProductItem = () => {
  return (
    <>
        <div className="item productItem">
            <div className="imgWrapper">
                <img src={Product2} alt="poduct" className="w-100"/>

                <span className="badge badge-primary">26%</span>

                <div className="actions">
                    <Button><AiOutlineFullscreen /></Button>
                    <Button><IoMdHeartEmpty style={{fontSize: 20}} /></Button>
                </div>
            </div>
            <div className="info">
                <h4>Nivea Nourrisant Body Lotion</h4>
                <span className="text-success d-block">In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                <div className="d-flex">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$14.00</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductItem
