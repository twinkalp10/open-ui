import { Label } from "@/components/Label";
import { CircularProgress } from "@/components/Progress";
import { Slider } from "@/components/Slider";
import { Switch } from "@/components/Switch";
import React from "react";

const Savings = () => {
  const [value, setValue] = React.useState([33]);
  const [progress1, setProgress1] = React.useState(13);
  const [progress2, setProgress2] = React.useState(25);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress1(66);
      setProgress2(50);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col gap-6 mt-4">
      <p className="font-medium text-base">
        Set Your saving target for this month
      </p>
      <div>
        <Slider
          defaultValue={value}
          max={100}
          step={1}
          width="w-64"
          trackcolor="bg-[#191D88]"
          thumbcolor="bg-slate-400"
          container="rounded"
          onValueChange={(value) => {
            setValue(value);
          }}
        />
        <p className="text-gray-500 text-sm">{value}%</p>
      </div>
      <div>
        <p className="font-medium text-base">
          Do you want to consider your current account?
        </p>
        <div className="flex items-center space-x-1 mt-5">
          <Switch id="current_account" size="medium" color="gray" />
          <Label htmlFor="current_account">Current Account</Label>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col justify-center items-center gap2">
          <CircularProgress
            value={progress1}
            size="small"
            indicatorcolor="#191D88"
          />
          <p>Monthly saving {progress1}%</p>
        </div>

        <div className="flex flex-col justify-center items-center gap2">
          <CircularProgress
            value={progress2}
            size="small"
            indicatorcolor="#191D88"
          />
          <p>yearly saving {progress2}%</p>
        </div>
      </div>
    </div>
  );
};

export default Savings;
