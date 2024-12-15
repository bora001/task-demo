import { useUserStore } from "@/providers/UserProvider";
import CustomSelect from "../CustomSelect";
import SearchInput from "../SearchInput";
import useSetSelect from "@/hooks/useSetSelect";
import ModalBasis from "../Modal/ModalBasis";
import { CheckIcon, PersonIcon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm, useWatch } from "react-hook-form";
import list from "@api/user_list.json";
import FormInput from "../FormInput";
import { useState } from "react";

const SELECT_LIST = [
  { value: "taskName", label: "Task Name" },
  { value: "reporter", label: "Reporter" },
  { value: "taskDescription", label: "Description" },
  { value: "assignee", label: "담당자 (Assignee)" },
];
const TASK_LIST = [
  { value: "buy", label: "물품구매" },
  { value: "delivery", label: "택배" },
  { value: "requestDelivery", label: "택배요청" },
];

const CreateTask = () => {
  const { setSelect, searchHandler } = useSetSelect();
  const { userRole, userName } = useUserStore((state) => state);
  const notAllowed = userRole === "Viewer";
  const [open, setOpen] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    getValues,
    formState: { isValid, errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = () => {
    console.log("제출", getValues());
    setOpen(false);
  };
  const taskType = useWatch({ control, name: "taskType" });
  const onClose = () => {
    reset();
    setOpen((prev) => !prev);
  };

  const ASSIGNEE_LIST = list
    .filter((item) => {
      if (userRole === "Admin") {
        return item;
      } else if (userRole === "PrimeUser") {
        return ["RegularUser", "PrimeUser", "Viewer"].includes(item.userRole);
      } else if (userRole === "RegularUser") {
        return item.userName === userName;
      }
    })
    .map(({ userName }) => ({ label: userName, value: userName }));

  return (
    <div className="flex gap-5 items-center">
      <div className="flex gap-2">
        <CustomSelect list={SELECT_LIST} setSelect={setSelect} />
        <SearchInput searchHandler={searchHandler} />
      </div>
      <ModalBasis
        open={open}
        onClose={onClose}
        trigger={
          <button
            onClick={() => setOpen(true)}
            className={notAllowed ? "btn-disabled" : "btn"}
            disabled={notAllowed}
          >
            Create Task
          </button>
        }
        title={
          <>
            <span className="bg-blue-500 text-white p-1 rounded-md">
              <PersonIcon />
            </span>
            Task 생성
          </>
        }
        content={
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="reporter">
                생성자
              </label>
              <input
                value={userName ?? ""}
                {...register("reporter", { required: true })}
                type="text"
                className="Input"
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="taskName">
                Task Name
              </label>
              <input
                {...register("taskName", { required: true })}
                type="text"
                className="Input"
                placeholder="Task Name을 입력해 주세요."
              />
            </fieldset>

            <CustomSelect
              list={ASSIGNEE_LIST}
              setValue={setValue}
              name="assignee"
              w={400}
              className="Input !justify-between"
              label="담당자 지정"
            />
            <CustomSelect
              list={TASK_LIST}
              setValue={setValue}
              name="taskType"
              w={400}
              className="Input !justify-between"
              label="Task Type"
            />
            {/* 물품구매 / 택배요청 / 택배 */}
            <div className="mt-[60px]">
              {taskType === "buy" && (
                <div className={GAP}>
                  <fieldset className="Fieldset">
                    <label className="Label" htmlFor="productName">
                      물품명
                    </label>
                    <input
                      {...register("productName", { required: true })}
                      type="text"
                      className="Input"
                      placeholder="물품 명을 입력해 주세요."
                    />
                  </fieldset>
                  <FormInput
                    {...register("productAmount", {
                      required: true,
                      validate: {
                        isNumber: (v) =>
                          !isNaN(Number(v)) ? true : "숫자 형태여야 합니다.", // 숫자 유효성 검사
                      },
                    })}
                    label="물품 갯수"
                    errorMessage={String(errors?.productAmount?.message ?? "")}
                    onBlur={() => trigger("productAmount")} // 블러 시 검증
                    placeholder="물품 갯수을 입력해 주세요."
                  />
                  <FormInput
                    {...register("dueDate", {
                      required: true,
                      validate: {
                        isDateFormat: (v) =>
                          /^\d{4}-\d{2}-\d{2}$/.test(v) ||
                          "yyyy-mm-dd 형태의 날짜 포멧이어야 합니다.",
                      },
                    })}
                    label="Due Date"
                    errorMessage={String(errors?.dueDate?.message ?? "")}
                    onBlur={() => trigger("dueDate")} // 블러 시 검증
                    placeholder="YYYY-MM-DD"
                  />
                </div>
              )}
              {taskType === "delivery" && (
                <div className={GAP}>
                  <fieldset className="Fieldset">
                    <label className="Label" htmlFor="receiverName">
                      수신자 명
                    </label>
                    <input
                      {...register("receiverName", { required: true })}
                      type="text"
                      className="Input"
                      placeholder="수신자 명을 입력해 주세요."
                    />
                  </fieldset>
                  <FormInput
                    {...register("receiverPhone", {
                      required: true,
                      pattern: {
                        value: /^\+82\s010-\d{4}-\d{4}$/,
                        message:
                          "전화번호 형식이 올바르지 않습니다. (+82 010-2222-3333)",
                      },
                    })}
                    label=" 수신자 전화번호"
                    errorMessage={String(errors?.receiverPhone?.message ?? "")}
                    onBlur={() => trigger("receiverPhone")} // 블러 시 검증
                    placeholder="+82 010-2222-3333"
                  />
                  <FormInput
                    {...register("receiverAddress", {
                      required: true,
                      validate: (value) =>
                        /^(?=.*[가-힣0-9])[^a-zA-Z]*$/.test(value) ||
                        "주소 형태가 아닙니다. (텍스트, 숫자 포함 확인) ",
                    })}
                    label="수신자 주소"
                    errorMessage={String(
                      errors?.receiverAddress?.message ?? ""
                    )}
                    onBlur={() => trigger("receiverAddress")} // 블러 시 검증
                    placeholder="경기도 뉴욕시티 맨하탄 234-99"
                  />
                  <FormInput
                    {...register("dueDate", {
                      required: true,
                      validate: {
                        isDateFormat: (v) =>
                          /^\d{4}-\d{2}-\d{2}$/.test(v) ||
                          "yyyy-mm-dd 형태의 날짜 포멧이어야 합니다.",
                      },
                    })}
                    label="Due Date"
                    errorMessage={String(errors?.dueDate?.message ?? "")}
                    onBlur={() => trigger("dueDate")} // 블러 시 검증
                    placeholder="YYYY-MM-DD"
                  />
                </div>
              )}
              {taskType === "requestDelivery" && (
                <div className={GAP}>
                  <fieldset className="Fieldset">
                    <label className="Label" htmlFor="productName">
                      물품명
                    </label>
                    <input
                      {...register("productName", { required: true })}
                      type="text"
                      className="Input"
                      placeholder="물품 명을 입력해 주세요."
                    />
                  </fieldset>
                  <FormInput
                    {...register("receiverAddress", {
                      required: true,
                      validate: (value) =>
                        /^(?=.*[가-힣0-9])[^a-zA-Z]*$/.test(value) ||
                        "주소 형태가 아닙니다. (텍스트, 숫자 포함 확인) ",
                    })}
                    label="수신자 주소"
                    errorMessage={String(
                      errors?.receiverAddress?.message ?? ""
                    )}
                    onBlur={() => trigger("receiverAddress")} // 블러 시 검증
                    placeholder="경기도 뉴욕시티 맨하탄 234-99"
                  />
                  <FormInput
                    {...register("dueDate", {
                      required: true,
                      validate: {
                        isDateFormat: (v) =>
                          /^\d{4}-\d{2}-\d{2}$/.test(v) ||
                          "yyyy-mm-dd 형태의 날짜 포멧이어야 합니다.",
                      },
                    })}
                    label="Due Date"
                    errorMessage={String(errors?.dueDate?.message ?? "")}
                    onBlur={() => trigger("dueDate")} // 블러 시 검증
                    placeholder="YYYY-MM-DD"
                  />
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 25,
                gap: "5px",
                justifyContent: "flex-end",
              }}
            >
              <Dialog.Close asChild>
                <button className="btn-outline" aria-label="Close">
                  Cancel
                </button>
              </Dialog.Close>
              <button
                className={`${
                  isValid ? "btn" : "btn-disabled"
                } flex items-center gap-1`}
                type="submit"
              >
                <CheckIcon />
                Create
              </button>
            </div>
          </form>
        }
      />
    </div>
  );
};

export default CreateTask;

const GAP = "flex flex-col gap-2";
