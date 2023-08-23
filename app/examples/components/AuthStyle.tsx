import Auth from "@/components/examples/Auth";

const AuthStyle = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 ">
        <p className="text-xl font-semibold">React Authentication Form</p>
        <p className="text-gray-600">
          This form has been constructed using a variety of UI components. Each
          of these components offers reusability in terms of styling, and
          I&apos;ve also applied custom styles where necessary. Here&apos; a
          rundown of the components utilized within the form.
        </p>
        <ul className="flex flex-col gap-2 list-disc ml-8 text-gray-600">
          <li>Tooltip</li>
          <li>Button</li>
          <li>Separator</li>
          <li>Input</li>
        </ul>
      </div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Auth />
      </div>
    </div>
  );
};

export default AuthStyle;
