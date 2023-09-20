import PlusIcon from '@icons/PlusIcon';
import { useState } from 'react';
import { Column } from 'src/types';
import { v4 as uuidv4 } from 'uuid';

const defaultCols: Column[] = [
  {
    id: 'todo',
    title: 'Todo'
  },
  {
    id: 'doing',
    title: 'Work in progress'
  },
  {
    id: 'done',
    title: 'Done'
  }
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>(defaultCols);

  function createNewColumn() {
    const columnToAdd: Column = {
      id: uuidv4(),
      title: `Column ${columns.length + 1}`
    };

    setColumns([...columns, columnToAdd]);
  }

  return (
    <div
      className="
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]
    ">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
            {columns.map((col) => (
             <p key={col.id}>{col.title}</p>
            ))}
        </div>
        <button
          className="h-[60px] w-[350px]
      min-w-[350px]
      cursor-pointer
      rounded-lg
      bg-mainBackgroundColor
      border-2
      border-columnBackgroundColor
      p-4
      ring-rose-500
      hover:ring-2
      flex
      gap-2"
          onClick={createNewColumn}>
          <PlusIcon />
          Add Column
        </button>
      </div>
    </div>
  );
};

export default KanbanBoard;
