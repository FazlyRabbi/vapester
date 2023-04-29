import { useContext, useState } from "react";
import { AgeGateContext } from "@/context/ageGateContext";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const AgeGateModal = () => {
  const { setIsOver18, isOver18 } = useContext(AgeGateContext);

  const [no, setNo] = useState(false);

  const handleYesClick = () => {
    setIsOver18(true);
    setNo(false);
  };

  const handleNoClick = () => {
    setNo(true);
  };

  return (
    <div>
      <h1 className="  capitalize  text-[2rem]  text-red flex justify-center mt-[10rem]">
        You Can't Access is the website if your are not 18+
      </h1>

      <Dialog
        open={!isOver18}
        className="bg-[#292929] 
     
      "
      >
        <DialogHeader
          className="  flex justify-center
        
         font-eco font-bold 
         
           text-[1.2rem]
         
         
         md:text-[2rem]
          text-red
        
        "
        >
          Are You 18+ ?
        </DialogHeader>

        {no ? (
          <p
            className=" font-eco text-cen
    flex justify-center 
my-4
       text-[1.2rem]
    text-white
   
   "
          >
            The products on this website are intended for adults only!
          </p>
        ) : (
          ""
        )}

        <DialogFooter
          className="flex justify-center
        
    
        md:space-x-5"
        >
          <Button
            size="sm"
            className="text-[.4rem] md:text-[.9rem]"
            color="red"
            variant="gradient"
            onClick={() => handleNoClick()}
          >
            <span>No</span>
          </Button>
          <Button
            size="sm"
            className="text-[.4rem] md:text-[.9rem]"
            variant="gradient"
            color="amber"
            onClick={() => handleYesClick()}
          >
            <span>yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AgeGateModal;
