/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/Cartslice';
import { updateProductQuantity } from '../Store/DataSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product() {
  const dispatch = useDispatch();
  const Navigation = useNavigate()
  const { catagery, productId } = useParams();
  const data = useSelector((state) =>
    state.Products[catagery].find((p) => p.id == productId)
  );
  const alreadyitem = useSelector((state)=>state.cart.items)
  const [quantity, setquantity] = useState(data.quantity-1);
  const [Price, setPrice] = useState(data.price);
  const [buy, setbuy] = useState(1);
  const limit = data.quantity;

  useEffect(() => {
    setPrice(data.price * buy);
  }, [buy, data.price]);

  const incremet = () => {
    if (buy < limit) {
      setbuy(buy + 1);
      setquantity(quantity - 1);
    }
    else{
      setquantity(0)
    }
  };

  const decrement = () => {
    if (buy > 1) {
      setbuy(buy - 1);
      setquantity(quantity + 1);
    }
  };
  const addItem = () => {
    if (data) {
      const existingItem = alreadyitem.find((item) => item.id === data.id);
      if (!existingItem) {
        const productPack = {
          id: data.id,
          title: data.title,
          img: data.img,
          price: Price,
          buy: buy,
          catagery:catagery
        };
        dispatch(addToCart(productPack));
        toast.success("Successfully Added");
        dispatch(updateProductQuantity(productPack))

      } else {
        toast.error("Already Added");
      }
    }
  };
  const BuyNow = ()=>{
    toast.success("Thanks For Purchasing.")
    setTimeout(() => {
      Navigation('/')
    }, 1500);
  }
  return (
    <div className='w-full h-[90vh]  flex relative'>
      <h1 className='absolute left-1/2 top-10 -translate-x-1/2 text-2xl font-semibold text-purple-700'>
        Products
      </h1>
      <div className='forimg w-1/2 h-full  flex flex-col justify-center items-center'>
        <img src={data.img} alt='' className='w-[40vw] h-auto' />
      </div>
      <div className='data w-1/2 h-full flex flex-col justify-center items-center px-3'>
        <div className='cont w-full h-96 border-2 flex flex-col justify-center items-center '>
          <div className='main flex flex-col gap-5'>
            <h1 className='text-2xl'>{data.title}</h1>
            <p className='text-xl text-red-500'>{`Stock.${quantity}`}</p>
            <p className='text-2xl text-red-500'>{`Rs.${Price}`}</p>
            <div className='buttons w-full flex gap-5'>
              <div className='addminu'>
                <button className='px-2 text-3xl border' onClick={decrement}>-</button>
                <span className='px-2 text-3xl'>{buy}</span>
                <button className='px-2 text-3xl border' onClick={incremet}>
                  +
                </button>
              </div>
              <div className='but flex gap-5'>
                {' '}
                <button className='py-2 px-2 uppercase bg-yellow-500 text-black' onClick={()=>addItem()}>
                  {' '}
                  Add to Cart
                </button>
                <button className='py-2 px-4 uppercase bg-red-600 text-white ' onClick={BuyNow}>
                  Buy Now
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;