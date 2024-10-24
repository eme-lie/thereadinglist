import { EllipsisVertical } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const BookItem = ({ author, title }) => {
  return (
    <div className="bg-blue-800 p-4 mb-2 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-blue-100 font-bold">{author}</h3>
        <p className="text-blue-200">by {title} </p>
      </div>

      <div className="flex gap-x-2">
        <Popover>
          <PopoverTrigger>
            <EllipsisVertical />
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <p className="p-2">Update</p>
              <p className="p-2">Delete</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default BookItem;
