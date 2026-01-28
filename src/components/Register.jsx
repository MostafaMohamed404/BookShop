import { useFormik } from "formik";
import { registerSchema } from "../validations/register.schema";
import { registerRequest } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";
import { toast } from "react-toastify";

export default function Register() {
  const { login } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await registerRequest(values);
        login(res.data.data.user, res.data.data.token);
        toast.success("Account created successfully 🎉");
      } catch (error) {
        toast.error(error.response?.data?.message || "Register failed");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-xl  p-8">
    
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <div>
             <label htmlFor="" className="py-2"> First Name</label>
            <input
            name="first_name"
            placeholder="First name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            className="input "
          />
            </div>
          <div>
            <label htmlFor=""> Last Name</label>
               <input
            name="last_name"
            placeholder="Last name"
            onChange={formik.handleChange}
            value={formik.values.last_name}
            className="input"
          />
          </div>

       
          </div>
   
          <div>
            <label htmlFor=""> Email</label>
               <input
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="input"
          />
          </div>
       
        <div>
          <label htmlFor=""> Password</label>
            <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="input"
          />
        </div>
        
        <div>
          <label htmlFor=""> Confirm Password</label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm password"
            onChange={formik.handleChange}
            value={formik.values.password_confirmation}
            className="input"
          />
        </div>
          
          <div>
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-[#D9176C]" />
              I agree to the <span className="text-[#D9176C] cursor-pointer hover:underline">Terms and Conditions</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-[#D9176C] text-white py-3 rounded-lg font-semibold"
          >
            {formik.isSubmitting ? "Creating..." : "Register"}
          </button>
        </form>
          <div className="mt-4 flex justify-center gap-2 text-sm">
        {/* Sign Up Link */}
        <span className=" cursor-pointer ">
           Already have an account? <a href="/signup" className="text-[#D9176C]"> Login</a>
        </span>
        </div>
          {/* Divider */}
    <div className="flex items-center my-6">
      <div className="flex-1 h-px bg-gray-300" />
      <span className="px-3 text-sm text-gray-400">or</span>
      <div className="flex-1 h-px bg-gray-300" />
    </div>
     {/* Google Login */}
    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg mb-3 hover:bg-gray-50 transition">
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="google"
        className="w-5 h-5"
      />
      <span className="text-sm font-medium text-gray-700">
        Login with Google
      </span>
    </button>

    {/* Facebook Login */}
    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
      <img
        src="https://www.svgrepo.com/show/475647/facebook-color.svg"
        alt="facebook"
        className="w-5 h-5"
      />
      <span className="text-sm font-medium text-gray-700">
        Login with Facebook
      </span>
    </button>
      </div>
      
    </div>
  );
}
