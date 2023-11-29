export const isShowModalSelector = (state) => state.settingsState.isShowModal;
export const isSortedTodosSelector = (state) => state.settingsState.isSortedTodos;
export const isLoadingTodosSelector = (state) => state.settingsState.isLoadingTodos;
export const searchInputValueSelector = (state) => state.settingsState.searchInputValue;
export const addTodoInputValueSelector = (state) => state.settingsState.addTodoInputValue;
export const addTodoLoadingSelector = (state) => state.settingsState.addTodoLoading;
export const addTodoInputErrorSelector = (state) => state.settingsState.addTodoInputError;
export const chosenTodoIdSelector = (state) => state.settingsState.chosenTodoId;
export const chosenTodoTitleSelector = (state) => state.settingsState.chosenTodoTitle;