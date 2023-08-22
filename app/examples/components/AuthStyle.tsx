import Auth from "@/components/examples/Auth";
import Link from "next/link";

const AuthStyle = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-3 ">
        <p className="text-xl font-semibold">React Authentication Form</p>
        <p className="text-gray-600">
          This form has been constructed using a variety of UI components. Each
          of these components offers reusability in terms of styling, and I've
          also applied custom styles where necessary. Here's a rundown of the
          components utilized within the form.
        </p>
        <ul className="flex flex-col gap-2 list-disc ml-8 text-gray-600">
          <li>Tooltip</li>
          <li>Button</li>
          <li>Separator</li>
          <li>Input</li>
        </ul>
      </div>
      <div className="flex flex-col space-y-2 text-center mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-gray-800">
          Enter your email below to create your account
        </p>
      </div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Auth />
        <p className="px-8 text-center text-sm text-gray-600">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-gray-900"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-gray-900"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default AuthStyle;
