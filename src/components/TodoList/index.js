import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { addTodo } from "../../redux/actions";
import {
  searchTextSelector,
  todoListSelector,
  todoRemainingSelector,
} from "../../redux/selectors";

export default function TodoList() {
  console.log("re-render todolist");

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  // const todoList = useSelector(todoListSelector)
  // const searchText = useSelector(searchTextSelector)
  const todoList = useSelector(todoRemainingSelector);
  const dispatch = useDispatch();

  const handleAddbuttonClick = () => {
    console.log("dispatch add todo");
    dispatch(
      addTodo({
        id: uuid(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name='Learn React' prioriry='High' />
         <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />

          <Select value={priority} onChange={handlePriorityChange}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddbuttonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
