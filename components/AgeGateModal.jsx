import { AgeGateContext } from "@/context/ageGateContext";
import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useContext, useState } from "react";

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
      <Dialog
        open={!isOver18}
        className="bg-[#121212] 
     
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
            className=" font-eco 
    px-2
      my-4
  text-center
       text-[.9rem]
       md:text-[1.3rem]
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
