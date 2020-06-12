/*eslint-disable @typescript-eslint/no-unused-vars*/

// type Action =
//   | { type: "ADD_TODO"; itemName: string }
//   | { type: "REMOVE_TODO"; id: string }
//   | { type: "TOGGLE_COMPLETE"; id: string };

type Action = {
  type: string;
  itemName?: string;
  id?: string;
};

type TodoItem = {
  id: string;
  name: string;
  isComplete: boolean;
};

type State = {
  items: Array<TodoItem>;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TODO": {
      let newItem: TodoItem = {
        id: Date.now().toString(36),
        name: action.itemName,
        isComplete: false
      };
      return {
        items: [...state.items, newItem]
      };
    }

    case "REMOVE_TODO": {
      let oldItems = state.items;
      let newItems = oldItems.filter(item => item.id !== action.id);
      return { items: newItems };
    }

    case "TOGGLE_COMPLETE": {
      let oldItems = state.items;
      let newItems = oldItems.map(item => {
        if (item.id === action.id) {
          return {...item, isComplete: !item.isComplete};
        } else {
          return item;
        }
      });
      return { items: newItems };
    }
  }
}
