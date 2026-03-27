import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LocalUsers from "../view-user/LocalUsers";
import { useContext } from "react";
import { UserContext } from "../../context/globalcontext";

/* -------------------- ZOD SCHEMA -------------------- */
const schema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  username: z.string().min(3, "Username is required"),
  email: z
  .string()
  .min(1, "Email is required")
  .email("Invalid email format")
  .refine((val) => val.includes("."), {
    message: "Email must contain a domain (e.g. .com)",
  }),
  password: z
  .string()
  .min(6, "At least 6 characters")
  .regex(/[A-Z]/, "Must include 1 uppercase letter")
  .regex(/[0-9]/, "Must include 1 number"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  website: z.string().optional(),
  street: z.string().min(2, "Street is required"),
  suite: z.string().optional(),
  city: z.string().min(2, "City is required"),
  zip: z.string().optional(),
  company: z.string().optional(),
});

/* -------------------- INPUT COMPONENT -------------------- */
const InputField = ({ placeholder, name, register, error, type = 'text' }) => (
  <div>
    <input
    type={type}
      {...register(name)}
      placeholder={placeholder}
      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all duration-150 focus:outline-none focus:ring-2 ${
        error
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-200 focus:ring-indigo-500"
      }`}
    />
    {error && (
      <p className="text-xs text-red-500 mt-1">{error.message}</p>
    )}
  </div>
);

/* -------------------- LABEL -------------------- */
const SectionLabel = ({ children }) => (
  <p className="text-sm font-semibold text-gray-700 mb-3">{children}</p>
);

/* -------------------- MAIN COMPONENT -------------------- */
export default function User() {

const  {users,setUsers}= useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange", // real-time validation
  });

  const onSubmit = (data) => {
  const newData = {
    id: users.length + 1,
    name: data.name,
    username: data.username,
    email: data.email,
    address: {
      street: data.street,
      suite: data.suite,
      city: data.city,
      zipcode: data.zipcode,
      geo: {
        lat: data.lat,
        lng: data.lng,
      },
    },
    phone: data.phone,
    website: data.website,
    company: {
      name: data.companyName,
      catchPhrase: data.catchPhrase,
      bs: data.bs,
    },
  };

  setUsers((prev) => [...prev, newData]);
  console.log(newData)
  reset();
};

  return (
    <>
    
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create User
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Basic Information */}
          <div className="mb-6">
            <SectionLabel>Basic Information</SectionLabel>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <InputField
                placeholder="Full Name"
                name="fullName"
                register={register}
                error={errors.fullName}
              />
              <InputField
                placeholder="Username"
                name="username"
                register={register}
                error={errors.username}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <InputField
                placeholder="Email Address"
                name="email"
                register={register}
                error={errors.email}
              />
              <InputField
                placeholder="Phone Number"
                name="phone"
                register={register}
                error={errors.phone}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <InputField
                placeholder="Password"
                name="password"
                type="password"
                register={register}
                error={errors.password}
              />
              <InputField
                placeholder="Website"
                name="website"
                register={register}
                error={errors.website}
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-6">
            <SectionLabel>Address</SectionLabel>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <InputField
                placeholder="Street"
                name="street"
                register={register}
                error={errors.street}
              />
              <InputField
                placeholder="Suite / Apartment"
                name="suite"
                register={register}
                error={errors.suite}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <InputField
                placeholder="City"
                name="city"
                register={register}
                error={errors.city}
              />
              <InputField
                placeholder="Zip Code"
                name="zip"
                register={register}
                error={errors.zip}
              />
            </div>
          </div>

          {/* Company */}
          <div className="mb-8">
            <SectionLabel>Company</SectionLabel>
            <InputField
              placeholder="Company Name"
              name="company"
              register={register}
              error={errors.company}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Save User
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-2.5 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-lg border border-gray-200 bg-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    <LocalUsers users={users}/>
    </>
  );
}