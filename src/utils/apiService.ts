import { Todo } from 'src/components/models';

const apiServerUrl: string | undefined = 'https://jsonplaceholder.typicode.com';


export const fetchTodos = async () => {
  try {
    const response = await fetch(`${apiServerUrl}/todos?userId=1`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    throw error;
  }
};


export const editTodo = async (id: number, valueToUpdate: Partial<Todo>) => {
  try {
    const response = await fetch(`${apiServerUrl}/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(valueToUpdate),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to edit todo:', error);
    throw error;
  }
};

export const createTodo = async (todo: Todo) => {
  try {
    const response = await fetch(`${apiServerUrl}/todos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to create todo:', error);
    throw error;
  }
};
