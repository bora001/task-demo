import Header from "@/components/Header/Header";
import TaskContent from "@/components/Task/TaskContent";
import React from "react";

const TaskList = () => {
  return (
    <div className="flex-1 overflow-hidden p-4 max-h-screen">
      <Header title="Task List" />
      <TaskContent />
    </div>
  );
};

export default TaskList;
