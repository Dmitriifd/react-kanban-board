import PlusIcon from '@icons/PlusIcon';
import { useState } from 'react';
import { Column, Id, Task } from 'src/types';
import { v4 as uuidv4 } from 'uuid';
import ColumnContainer from './ColumnContainer';

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

const defaultTasks: Task[] = [
  {
    id: '1',
    columnId: 'todo',
    content: 'List admin APIs for dashboard'
  },
  {
    id: '2',
    columnId: 'todo',
    content:
      'Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation'
  },
  {
    id: '3',
    columnId: 'doing',
    content: 'Conduct security testing'
  },
  {
    id: '4',
    columnId: 'doing',
    content: 'Analyze competitors'
  },
  {
    id: '5',
    columnId: 'done',
    content: 'Create UI kit documentation'
  },
  {
    id: '6',
    columnId: 'done',
    content: 'Dev meeting'
  },
  {
    id: '7',
    columnId: 'done',
    content: 'Deliver dashboard prototype'
  },
  {
    id: '8',
    columnId: 'todo',
    content: 'Optimize application performance'
  },
  {
    id: '9',
    columnId: 'todo',
    content: 'Implement data validation'
  },
  {
    id: '10',
    columnId: 'todo',
    content: 'Design database schema'
  },
  {
    id: '11',
    columnId: 'todo',
    content: 'Integrate SSL web certificates into workflow'
  },
  {
    id: '12',
    columnId: 'doing',
    content: 'Implement error logging and monitoring'
  },
  {
    id: '13',
    columnId: 'doing',
    content: 'Design and implement responsive UI'
  }
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>(defaultCols);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  function createNewColumn() {
    const columnToAdd: Column = {
      id: uuidv4(),
      title: `Column ${columns.length + 1}`
    };

    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);

    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
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
            <ColumnContainer key={col.id} column={col} deleteColumn={deleteColumn} />
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
