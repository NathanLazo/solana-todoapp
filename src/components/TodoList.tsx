"use client";

type TodoType = {
  id: string;
  todo: string;
  done: boolean;
  createdAt: Date;
};

const statuses = {
  Completed: "text-green-400 bg-green-400/10",
  Pending: "text-rose-400 bg-rose-400/10",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TodoList({
  todos,
  setTodos,
}: {
  todos: TodoType[] | null;
  setTodos: (todos: TodoType[] | null) => void;
}) {
  return (
    <table className='mt-6 w-full whitespace-nowrap text-left'>
      <colgroup>
        <col className='w-full sm:w-4/12' />
        <col className='lg:w-4/12' />
        <col className='lg:w-2/12' />
        <col className='lg:w-1/12' />
        <col className='lg:w-1/12' />
      </colgroup>
      <thead className='border-b border-white/10 text-sm leading-6 text-white'>
        <tr>
          <th
            scope='col'
            className='py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8'
          >
            Todo
          </th>
          <th
            scope='col'
            className='hidden py-2 pl-0 pr-8 font-semibold sm:table-cell'
          >
            Id
          </th>
          <th
            scope='col'
            className='hidden py-2 pl-0 pr-8 font-semibold sm:table-cell'
          >
            Created at
          </th>
          <th
            scope='col'
            className='hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8'
          >
            Finish
          </th>
        </tr>
      </thead>
      <tbody className='divide-y divide-white/5'>
        {todos?.map((item) => (
          <tr key={item.id}>
            <td className='py-4 pl-4 pr-8 sm:pl-6 lg:pl-8'>
              <div className='flex items-center gap-x-4'>
                <div className='truncate text-sm font-medium leading-6 text-white'>
                  {item.todo}
                </div>
              </div>
            </td>
            <td className='hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8'>
              <div className='flex gap-x-3'>
                <div className='font-mono text-sm leading-6 text-gray-400'>
                  {item.id}
                </div>
              </div>
            </td>
            <td className='hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8'>
              <div className='flex gap-x-3'>
                <div className='font-mono text-sm leading-6 text-gray-400'>
                  {item.createdAt.toLocaleDateString()}
                </div>
              </div>
            </td>

            <td className='hidden py-4 pl-0  text-right text-sm leading-6 text-gray-400 sm:table-cell pr-2'>
              {
                <button
                  className={classNames(
                    "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium",
                    item.done ? statuses.Completed : statuses.Pending
                  )}
                  onClick={() => {
                    // @ts-ignore
                    setTodos((prev) => {
                      if (prev) {
                        // @ts-ignore
                        return prev.map((prevItem) => {
                          if (prevItem.id === item.id) {
                            return {
                              ...prevItem,
                              done: !prevItem.done,
                            };
                          }
                          return prevItem;
                        });
                      }
                      return prev;
                    });
                  }}
                >
                  <p>{item.done ? "Completed" : "Pending"}</p>
                </button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
