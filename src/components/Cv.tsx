import { Download } from "lucide-react";
import { Button } from "./ui/button";

export default function Cv() {
  return (
    <div className="mt-12 flex justify-center border-t border-gray-600 pt-6">
      <Button className="bg-gray-900 hover:bg-gray-800 ">
        <a
          href="/abinantony it cv resume (2).pdf"
          className="gap-2 flex items-center justify-center"
          download
        >
          <Download className=" text-blue-500" />
          Download CV
        </a>
      </Button>
    </div>
  );
}
{/* <Button className="bg-gray-800 hover:bg-gray-700 border  mt-4">
<Github size={16} className="text-blue-500" />
View on GitHub
</Button> */}
