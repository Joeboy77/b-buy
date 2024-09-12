import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import React,{ useState } from "react";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });






const CountryDropDown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    return(
        <>
            <Button className='countryDrop' onClick={()=> setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">Ghana</span>
                </div>
                <span className="ml-auto"><FaAngleDown/></span>
            </Button>

            <Dialog  open={isOpenModal} onClose={() => setIsOpenModal(false)} className="locationModal" TransitionComponent={Transition}
            >
                <h4 className="mb-0">Choose your Location</h4>
                <p>Enter your address and we will specify the offer for your area</p>
                <Button className="close_" onClick={()=> setIsOpenModal(false)}><MdClose/></Button>

                <div className='headerSearch w-100 align-items-center'>
                    <input type='text' placeholder='Search your area...'/>
                    <Button><IoSearch/></Button>
                </div>

                <ul className="countryList mt-3">
                    <li><Button onClick={()=> setIsOpenModal(false)}>Ashanti</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Greater Accra</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Savana</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Upper West</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Upper East</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Ahafo</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Bono East</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Brong Ahafo</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Western</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Eastern</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Oti</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Western North</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Volta</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>North East</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Northern</Button></li>
                    <li><Button onClick={()=> setIsOpenModal(false)}>Central</Button></li>
                </ul>

            </Dialog>
        </>
    )
}
export default CountryDropDown