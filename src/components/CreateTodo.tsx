"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

type TodoType = {
  id: string;
  todo: string;
  done: boolean;
  createdAt: Date;
};

export function CreateTodo({
  setTodos,
}: {
  setTodos: Dispatch<SetStateAction<TodoType[] | null>>;
}) {
  const [todo, setTodo] = useState("");

  const createTodo = async () => {
    setTodos((prev) => {
      if (prev) {
        return [
          {
            id: Math.random().toString(36).substr(2, 9),
            todo,
            done: false,
            createdAt: new Date(),
          },
          ...prev,
        ];
      }
      return [
        {
          id: Math.random().toString(36).substr(2, 9),
          todo,
          done: false,
          createdAt: new Date(),
        },
      ];
    });
    setTodo("");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'>Create Todo</h4>
            <p className='text-sm text-muted-foreground'>
              Set the dimensions for the layer.
            </p>
          </div>
          <div className='grid gap-2'>
            <div className='grid grid-cols-3 items-center gap-4'>
              <Label htmlFor='width'>Todo</Label>
              <Input
                id='todo'
                placeholder='Enter your todo'
                className='col-span-2 h-8'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
            <Button className='w-full' onClick={createTodo}>
              Create
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
