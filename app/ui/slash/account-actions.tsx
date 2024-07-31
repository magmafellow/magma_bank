import { PiPlusSquareThin, PiMinusSquareThin } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";


export default function AccountActions() {
  return (
    <div className="mt-3 flex gap-x-4 ">
      <div>
        <PiPlusSquareThin className="cursor-pointer text-[50px] hover:text-orange-800 dark:hover:text-orange-300" />
      </div>
      <div>
        <PiMinusSquareThin className="cursor-pointer text-[50px] hover:text-orange-800 dark:hover:text-orange-300" />
      </div>
      <div>
        <IoIosSend className="cursor-pointer text-[50px] hover:text-orange-800 dark:hover:text-orange-300" />
      </div>
    </div>
  );
}
