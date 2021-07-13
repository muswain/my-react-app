type Action =
  | { type: "plus" }
  | { type: "minus" }
  | { type: "setValue"; payload: { value: number } };

type State = {
  count: number;
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "plus":
      return { ...state, count: state.count + 1 };
    case "minus":
      return { ...state, count: state.count - 1 };
    case "setValue":
      return { ...state, count: action.payload.value };
    default:
      throw new Error(`Unhandled action type`);
  }
};
