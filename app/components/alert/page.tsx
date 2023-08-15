import {
  Alert,
  AlertDescription,
  AlertFooter,
  AlertTitle,
} from "@/components/Alert";
import React from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/Button";

const Page = () => {
  return (
    <Alert variant="primary" container="rectangle" icon={<Cog6ToothIcon />}>
      <AlertTitle>This is a primary alert — check it out!</AlertTitle>
      <AlertDescription>
        This is a primary description — you can change it using variant props
      </AlertDescription>
      <AlertFooter>
        <Button variant="default" size="small">
          Save
        </Button>
        <Button variant="secondary" size="small">
          Cancel
        </Button>
      </AlertFooter>
    </Alert>
  );
};

export default Page;
