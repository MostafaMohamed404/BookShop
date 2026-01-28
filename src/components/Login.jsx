import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { loginRequest } from "../services/auth.service";
import { useAuthStore } from "../store/auth.store";

export default function Login() {
  const login = useAuthStore((state) => state.login);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Min 6 chars").required("Required"),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await loginRequest(values);
        login(res.data.user, res.data.token);
        toast.success("Successfully logged in");
      } catch {
        toast.error("Invalid email or password");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
<div className="min-h-screen flex items-center justify-center">
  <div className="w-full max-w-md bg-white rounded-xl  p-8 text-center">
    {/* Title */}
    <h2 className="text-xl font-semibold text-[#D9176C] mb-6">
      Welcome Back!
    </h2>

    <form onSubmit={formik.handleSubmit} className="space-y-4 text-left">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="example@gmail.com"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D9176C]"
        />
      </div>

      {/* Options */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-600">
          <input type="checkbox" className="accent-[#D9176C]" />
          Remember me
        </label>

        <span className="text-[#D9176C] cursor-pointer hover:underline">
          Forget password?
        </span>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="w-full bg-[#D9176C] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        {formik.isSubmitting ? "Logging in..." : "Log in"}
      </button>
    </form>
      
        <div className="mt-4 flex justify-center gap-2 text-sm">
        {/* Sign Up Link */}
        <span className=" cursor-pointer hover:underline">
            Don't have an account?<a href="/signup" className="text-[#D9176C]"> Sign Up</a>
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

