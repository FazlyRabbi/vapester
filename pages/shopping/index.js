import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartElement from "@/components/CartElement";

import useProtectedRoute from "Hooks/useProtectedRoute";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// connect stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function shopping() {
  useProtectedRoute();

  // const [subtotal, setSubtotal] = useState(0);

  // const [cartData, setCartData] = useState([]);

  // useEffect(() => {
  //   if (cart !== []) {
  //     cart.map((data) => setSubtotal(data));
  //   }
  // }, []);

  // const chechnum = () => {
  //   console.log(subtotal);
  // };

  // <CardElement className=" border p-3  rounded-md" />

  return (
    <>
      <Header />
      <div className="card element">
        <Elements stripe={stripePromise}>
          <CartElement />
        </Elements>
      </div>

      <Footer />
    </>
  );
}
