import { TodoListItem, Grid, GridItem } from '..';

export const TodoList = ({ todosData, onDelete, onEditTodo }) => {
  return (
    <Grid>
      {todosData.map((item, idxNumber) => (
        <GridItem key={item.id}>
          <TodoListItem
            id={item.id}
            text={item.text}
            number={idxNumber + 1}
            onDelete={onDelete}
            onEditTodo={onEditTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
