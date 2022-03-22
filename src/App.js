import "bootstrap/dist/css/bootstrap.min.css";
import {connect} from "react-redux";
import TasksPage from "./components/TasksPage";
import {editTask, createTask} from "./actions"


function App(props) {

  const onStatusChange = (id, status) =>{
    props.dispatch(editTask(id,{status}));
  };

  const onCreateTask = ({title, descripion}) => {
    props.dispatch(createTask({title, descripion}))
  }

  return (
    <>
    <TasksPage tasks = {props.tasks} 
    onStatusChange={onStatusChange}
    onCreateTask={onCreateTask}
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
