import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface ErrorState {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  zipcode?: string;
  city?: string;
  country?: string;
}

const CheckoutForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [paymentMethod, setPaymentMethod] =
    useState<string>("Cash on Delivery");
  const [error, setError] = useState<ErrorState>({});

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    zipcode: Yup.string().required("Zip code is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      address,
      zipcode,
      city,
      country,
      paymentMethod,
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setError({});
      navigate("/order-confirmed", { state: formData });
    } catch (validationError: any) {
      const newError: ErrorState = {};
      (
        validationError.inner as Array<{
          path: keyof ErrorState;
          message: string;
        }>
      ).forEach((err) => {
        newError[err.path] = err.message;
      });
      setError(newError);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-2/3 max-laptop:mb-10 max-laptop:w-[93vw] max-laptop:mx-auto max-tablet:min-w-[40rem]"
    >
      <h1 className="text-3xl font-bold mb-8">CHECKOUT</h1>

      <section className="mb-8">
        <h2 className="text-orange-500 font-bold uppercase mb-4 text-sm">
          BILLING DETAILS
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Alexei Ward"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg p-3"
            />
            {error.name && (
              <p className="text-red-500 text-xs mt-1">{error.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-3"
              placeholder="alexei@mail.com"
            />
            {error.email && (
              <p className="text-red-500 text-xs mt-1">{error.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 202-555-0136"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-lg p-3"
            />
            {error.phone && (
              <p className="text-red-500 text-xs mt-1">{error.phone}</p>
            )}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-orange-500 font-bold uppercase mb-4 text-sm">
          SHIPPING INFO
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col col-span-2">
            <label htmlFor="address" className="mb-2 text-sm">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="1137 Williams Avenue"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border rounded-lg p-3"
            />
            {error.address && (
              <p className="text-red-500 text-xs mt-1">{error.address}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="zipCode" className="mb-2 text-sm">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              placeholder="10001"
              name="zipCode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              className="border rounded-lg p-3"
            />
            {error.zipcode && (
              <p className="text-red-500 text-xs mt-1">{error.zipcode}</p>
            )}
          </div>
          <div className="">
            <div className="flex flex-col">
              <label htmlFor="city" className="mb-2 text-sm">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="New York"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border rounded-lg p-3 mb-3"
              />
              {error.city && (
                <p className="text-red-500 text-xs mt-1">{error.city}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="country" className="mb-2 text-sm">
                Country
              </label>
              <input
                type="text"
                id="country"
                placeholder="United States"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border rounded-lg p-3"
              />
              {error.country && (
                <p className="text-red-500 text-xs mt-1">{error.country}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-orange-500 font-bold uppercase mb-4 text-sm">
          PAYMENT DETAILS
        </h2>
        <div className="mb-4 grid grid-cols-2">
          <p className="text-sm">Payment Method</p>
          <div>
            <label className="flex items-center border border-gray-300 rounded-lg p-3">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={() => setPaymentMethod("Cash on Delivery")}
                className="mr-4 bg-orange-300"
              />
              Cash on Delivery
            </label>
          </div>
        </div>
      </section>

      <button
        type="submit"
        className="mt-8 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
      >
        Continue & Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
