import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";
import TasksPage from "./components/TasksPage";
import {editTask, createTask, removeTask} from "./actions"


function App(props) {

  const onStatusChange = (id, status) =>{
    props.dispatch(editTask(id,{status}));
  };

  const onCreateTask = ({title, descripion}) => {
    props.dispatch(createTask({title, descripion}))
  }

  const onRemoveTask = (id) => {
    props.dispatch(removeTask(id))
  }

  return (
    <>
    <TasksPage tasks = {props.tasks} 
    onStatusChange={onStatusChange}
    onCreateTask={onCreateTask}
    onRemoveTask={onRemoveTask}
    />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
