import Header from "@/components/Header/Header";
import TaskContent from "@/components/Task/TaskContent";
import { Suspense } from "react";

const TaskList = () => {
  return (
    <Suspense>
      <div className="flex-1 overflow-hidden p-4 max-h-screen">
        <Header title="Task List" />
        <TaskContent />
      </div>
    </Suspense>
  );
};

export default TaskList;
