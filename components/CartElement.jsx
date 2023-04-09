import { API_URL } from "@/config/index";
import { CardContext } from "@/context/CardContext";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

import {
  default as billingCityNam,
  default as cityNam,
} from "../public/city.json";

import countryNam from "../public/country";
import billingCountryNam from "../public/country.json";
import {
  default as billingStateNam,
  default as stateNam,
} from "../public/state.json";

import { Button, Card, CardBody, Checkbox } from "@material-tailwind/react";

function CartElement() {
  const [isFetching, setIsFetching] = useState(false);
  const [cardError, setCardError] = useState(null);
  const [states, setStates] = useState("");
  const [cities, setCities] = useState("");
  const [billingStates, setBillingStates] = useState("");
  const [billingCities, setBillingCities] = useState("");
  const [same, setSame] = useState(true);
  const { cart } = useContext(CardContext);

  const initial = {
    product: {
      orderName: "",
      orderId: "",
      paidAmmount: "",
      TrxId: "",
      file: "",
      info: {},
    },
    Billing: {
      firstName: "",
      LastName: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      phone: "",
      companyName: "",
    },
    Shipping: {
      firstName: "",
      LastName: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      phone: "",
      companyName: "",
    },
  };

  const [order, setOrder] = useState(initial);



  useEffect(() => {
    if (same) {
      setOrder({ ...order, Billing: { ...order.Shipping } });
    } else {
      setOrder({ ...order, Billing: { ...order.Billing } });
    }
  }, [same, order.Shipping]);

  //  // set states
  useEffect(() => {
    const handleStates = () => {
      const countryId = countryNam.find(
        (country) =>
          country.country_name.toLowerCase() ===
          order?.Shipping.country.toLowerCase()
      );
      const allStates = stateNam.filter(
        (state) => state.country_id == countryId?.country_id
      );
      setStates(allStates);
    };
    // const
    handleStates();
  }, [order?.Shipping.country]);

  // // set cities
  useEffect(() => {
    const handleCities = () => {
      const countryId = countryNam.find(
        (country) =>
          country.country_name.toLowerCase() ===
          order?.Shipping.country.toLowerCase()
      );
      const allStates = stateNam.filter(
        (state) => state.country_id == countryId?.country_id
      );
      const stateId = allStates.find(
        (state) => state.state_name === order?.Shipping.state
      );
      const city = cityNam.filter(
        (city) => city.state_id === stateId?.state_id
      );

      setCities(city);
    };
    handleCities();
  }, [order?.Shipping.state]);

  // set states
  useEffect(() => {
    const handleStates = () => {
      const countryId = billingCountryNam.find(
        (country) =>
          country.country_name.toLowerCase() ===
          order?.Billing.country.toLowerCase()
      );

      const allStates = billingStateNam.filter(
        (state) => state.country_id == countryId?.country_id
      );

      setBillingStates(allStates);
    };

    // const
    handleStates();
  }, [order?.Billing.country]);

  // set cities
  useEffect(() => {
    const handleCities = () => {
      const countryId = billingCountryNam.find(
        (country) =>
          country.country_name.toLowerCase() ===
          order?.Billing.country.toLowerCase()
      );
      const allStates = billingStateNam.filter(
        (state) => state.country_id == countryId?.country_id
      );
      const stateId = allStates.find(
        (state) => state.state_name === order?.Billing.state
      );
      const city = billingCityNam.filter(
        (city) => city.state_id === stateId?.state_id
      );

      setBillingCities(city);
    };
    handleCities();
  }, [order?.Billing.state]);

  // onetime payment

  // const createOntimePayment = async () => {
  //   try {
  //     if (elements.getElement("card") === null) return;

  //     setIsFetching(true);
  //     const { error } = await stripe.createPaymentMethod({
  //       type: "card",
  //       card: elements.getElement("card"),
  //     });

  //     if (error) {
  //       setCardError(error);
  //       return;
  //     }

  //     setCardError(null);

  //     const res = await fetch(`/api/chargepayment`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         amount: donation.Amount,
  //       }),
  //     });

  //     const data = await res.json();
  //     if (!res.ok) return alert("Payment unsuccessfull!");

  //     const { paymentIntent, error: confirmError } =
  //       await stripe.confirmCardPayment(data.clientSecret, {
  //         payment_method: {
  //           card: elements.getElement("card"),
  //         },
  //       });

  //     setButton(false);

  //     if (confirmError) return alert("Payment unsuccessfull!");

  //     setDonation({
  //       ...donation,
  //       CardInfo: `Amount: $${paymentIntent.amount}  \n ClientSecret: ${paymentIntent.client_secret}`,
  //     });

  //     setButton(true);

  //     elements.getElement(CardElement).clear();

  //     // send mail
  //     const sendmail = await fetch(`/api/emails/donationmail`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: donation.Email,
  //         subject: `Your Donation $${donation.Amount / 100} to people!`,
  //         message: `Thank you so much for your generous gift! It's donors like you that make our work possible. Your contribution is enabling us to accomplish Kingdom of Kush as well as helping us make progress toward`,
  //       }),
  //     });

  //     setDonation(donationInitial);
  //     showAlerts(
  //       donation.Email,
  //       donation.Name,
  //       paymentIntent.amount,
  //       paymentIntent.client_secret
  //     );

  //     setIsFetching(false);
  //   } catch (err) {
  //     console.error(err);
  //     alert("Payment Faild!" + err.message);
  //   }
  // };

  ///////////////////////////////////
  //  stripe related funtionality
  // to access stripe server
  const stripe = useStripe();
  // to access card element
  const elements = useElements();

  return (
    <div className="container mx-auto px-4">
      <div className="grid  justify-items-center grid-cols-1 gap-x-2 md:grid-cols-2">
        {/* products */}
        <div className="products">
          <h3 className="font-bold text-[25px] my-[1rem]   ">
            {cart !== [] ? "Products" : "No Cart"}
          </h3>
          {cart !== []
            ? cart.map((data, index) => (
                <Card className="w-96 my-6  relative" key={index}>
                  <MdDeleteForever className=" right-2 top-2 cursor-pointer text-[1.3rem]  absolute text-red-500" />
                  <CardBody className="  flex    space-x-8 items-center  p-4 ">
                    <div className="product-img ">
                      <Image
                        src={`${API_URL}${data.imgUrl}`}
                        height={150}
                        width={150}
                        alt="product-img"
                        className="rounded-md "
                      />
                    </div>

                    <div className="product-des col-span-3 flex justify-between space-x-10 backdrop:xl:space-x-[20rem] ">
                      <div className="details ">
                        <h2 className="font-bold mb-2">{data.title}</h2>
                        <ul className="">
                          <li>
                            <span className="title font-bold">Job Name: </span>
                            <span className="data"> {data.jobName}</span>
                          </li>
                          <li>
                            <span className="title font-bold">
                              Width & Length:
                            </span>
                            <span className="data"> {data.width_length}</span>
                          </li>
                          <li>
                            <span className="title font-bold">Meterial :</span>
                            <span className="data">{data.material}</span>
                          </li>
                          <li>
                            <span className="title font-bold">Reinforce :</span>
                            <span className="data"> {data.reinforce}</span>
                          </li>
                          <li>
                            <span className="title font-bold">Qty :</span>
                            <span className="data font-bold">
                              {" "}
                              {data.quantity}
                            </span>
                          </li>
                          <li>
                            <span className="title font-bold">Price :</span>
                            <span className="data font-bold">
                              {" "}
                              {data.total}$
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))
            : ""}
        </div>

        <div className="shipping mt-4 min-w-full">
          <div className="shiping_info my-6">
            <h5 className="font-bold text-[1.2rem] mb-2">
              Shipping Information
            </h5>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-4 ">
              <div className="">
                <label
                  className="block tracking-wide text-base text-gray-700  mb-1"
                  htmlFor="grid-first-name"
                >
                  First name
                </label>
                <input
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="">
                <label
                  className="block tracking-wide text-base text-gray-700  mb-1"
                  htmlFor="grid-first-name"
                >
                  Last name
                </label>
                <input
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
              <div>
                <label
                  className="block tracking-wide text-base text-gray-700  mb-1"
                  htmlFor="grid-first-name"
                >
                  Zip Code
                </label>
                <input
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Zip code"
                />
              </div>
              <div className="w-full ">
                <label
                  className="block  tracking-wide text-gray-700   "
                  htmlFor="country"
                >
                  Country
                </label>
                <div>
                  <select
                    required
                    id="country"
                    onChange={(e) =>
                      setOrder({
                        ...order,
                        Shipping: {
                          ...order.Shipping,
                          country: e.target.value,
                        },
                      })
                    }
                    disabled={isFetching}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                  >
                    <option selected>Select country</option>
                    {countryNam?.map((country, country_id) => (
                      <option key={country_id} value={country?.country_name}>
                        {country?.country_name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                </div>
              </div>
            </div>

            <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
              <div className="w-full ">
                <label
                  className="block  tracking-wide text-gray-700   "
                  htmlFor="country"
                >
                  State
                </label>
                <div>
                  <select
                    required
                    onChange={(e) =>
                      setOrder({
                        ...order,
                        Shipping: {
                          ...order.Shipping,
                          state: e.target.value,
                        },
                      })
                    }
                    id="country"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                  >
                    <option selected>Select State</option>
                    {states?.length > 0
                      ? states?.map((state, state_id) => (
                          <option key={state_id} value={state?.state_name}>
                            {state?.state_name}
                          </option>
                        ))
                      : ""}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                </div>
              </div>

              <div className="w-full ">
                <label
                  className="block  tracking-wide text-gray-700   "
                  htmlFor="country"
                >
                  City
                </label>
                <div>
                  <select
                    required
                    onChange={(e) =>
                      setOrder({
                        ...order,
                        Shipping: {
                          ...order.Shipping,
                          city: e.target.value,
                        },
                      })
                    }
                    id="country"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                  >
                    <option selected>Select City</option>
                    {cities?.length > 0
                      ? cities?.map((city, city_id) => (
                          <option key={city_id} value={city?.city_name}>
                            {city?.city_name}
                          </option>
                        ))
                      : ""}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                </div>
              </div>
            </div>

            <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
              <div className="">
                <label
                  className="block tracking-wide text-base text-gray-700  mb-1"
                  htmlFor="grid-first-name"
                >
                  Company Name
                </label>
                <input
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Company Name"
                />
              </div>
              <div className="">
                <label
                  className="block tracking-wide text-base text-gray-700  mb-1"
                  htmlFor="grid-first-name"
                >
                  Phone
                </label>
                <input
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>

          <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
            <div className="">
              <label
                className="block tracking-wide text-base text-gray-700  mb-1"
                htmlFor="grid-first-name"
              >
                Address
              </label>
              <textarea
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>

          <div>
            <h5 className="font-bold text-[1.2rem] ">Billing Information</h5>

            <div className="-ml-3">
              <Checkbox
                label="Same as Shiping Address"
                defaultChecked
                onChange={(e) => setSame(e.target.checked)}
              />
            </div>
          </div>

          {!same ? (
            <div className="billing_info  mb-6 mt-2">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-4 ">
                <div className="">
                  <label
                    className="block tracking-wide text-base text-gray-700  mb-1"
                    htmlFor="grid-first-name"
                  >
                    First name
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="">
                  <label
                    className="block tracking-wide text-base text-gray-700  mb-1"
                    htmlFor="grid-first-name"
                  >
                    Last name
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                <div>
                  <label
                    className="block tracking-wide text-base text-gray-700  mb-1"
                    htmlFor="grid-first-name"
                  >
                    Zip Code
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Zip code"
                  />
                </div>
                <div className="w-full ">
                  <label
                    className="block  tracking-wide text-gray-700   "
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <div>
                    <select
                      required
                      id="country"
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          Billing: {
                            ...order.Billing,
                            country: e.target.value,
                          },
                        })
                      }
                      disabled={isFetching}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    >
                      <option selected>Select country</option>
                      {countryNam?.map((country, country_id) => (
                        <option key={country_id} value={country?.country_name}>
                          {country?.country_name}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                </div>
              </div>

              <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                <div className="w-full ">
                  <label
                    className="block  tracking-wide text-gray-700   "
                    htmlFor="country"
                  >
                    State
                  </label>
                  <div>
                    <select
                      required
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          Billing: {
                            ...order.Billing,
                            state: e.target.value,
                          },
                        })
                      }
                      id="country"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    >
                      <option selected>Select State</option>
                      {billingStates?.length > 0
                        ? billingStates?.map((state, state_id) => (
                            <option key={state_id} value={state?.state_name}>
                              {state?.state_name}
                            </option>
                          ))
                        : ""}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                </div>

                <div className="w-full ">
                  <label
                    className="block  tracking-wide text-gray-700   "
                    htmlFor="country"
                  >
                    City
                  </label>
                  <div>
                    <select
                      required
                      id="city"
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          Billing: {
                            ...order.Billing,
                            city: e.target.value,
                          },
                        })
                      }
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    >
                      <option selected>Select City</option>
                      {billingCities?.length > 0
                        ? billingCities?.map((city, city_id) => (
                            <option key={city_id} value={city?.city_name}>
                              {city?.city_name}
                            </option>
                          ))
                        : ""}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                </div>
              </div>

              <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                <div className="">
                  <label
                    className="block tracking-wide text-base text-gray-700  mb-1"
                    htmlFor="grid-first-name"
                  >
                    Company Name
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Company Name"
                  />
                </div>
                <div className="">
                  <label
                    className="block tracking-wide text-base text-gray-700  mb-1"
                    htmlFor="grid-first-name"
                  >
                    Phone
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
              </div>

              <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                <div className="">
                  <label
                    className="block tracking-wide text-base text-gray-700  mb-1"
                    htmlFor="grid-first-name"
                  >
                    Address
                  </label>
                  <textarea
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-lightGray font-bold text-sm mb-2 block"
            >
              Card info
            </label>
            <CardElement className=" border p-3  w-full  rounded-md" />

            {cardError ? (
              <p className="  mt-2 text-base text-red">{cardError.message}</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <h1 className="mb-4 font-bold text-[1.2rem]">
              Total : <span className="font-normal">100$</span>{" "}
            </h1>
          </div>

          <Button type="submit" className="mb-6" size="sm">
            {isFetching ? "Loading..." : "Confirm Order"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartElement;
