import PlusIcon from '@icons/PlusIcon';
import TrashIcon from '@icons/TrashIcon';
import { Column, Task } from 'src/types';

interface ColumnContainerProps {
  column: Column;
  deleteColumn: (id: string) => void;
}

const ColumnContainer = ({ column, deleteColumn }: ColumnContainerProps) => {
  return (
    <div
      className="
      bg-columnBackgroundColor
        w-[350px]
        h-[500px]
        max-h-[500px]
        rounded-md
        flex
        flex-col
    ">
      {/* Column title */}
      <div
        className="
        bg-mainBackgroundColor
          text-md
          h-[60px]
          cursor-grab
          rounded-md
          rounded-b-none
          p-3
          font-bold
          border-columnBackgroundColor
          border-4
          flex
          items-center
          justify-between
      ">
        <div className="flex gap-2">
          <div
            className="
            flex
            justify-center
            items-center
            bg-columnBackgroundColor
            px-2
            py-1
            text-sm
            rounded-full
        ">
            0
          </div>
          {column.title}
        </div>
        <button
          className="
          stroke-gray-500
          hover:stroke-white
          hover:bg-columnBackgroundColor
          rounded
          px-1
          py-2
      "
          onClick={() => deleteColumn(column.id)}>
          <TrashIcon />
        </button>
      </div>
      {/* Column task container */}
      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        Content
      </div>
      {/* Column footer */}
      <button className="flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4 border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black">
        <PlusIcon />
        Add task
      </button>
    </div>
  );
};

export default ColumnContainer;
