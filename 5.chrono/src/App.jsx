import UpdateTimeButton from "./components/UpdateTimeButton";
import { useSelector } from "react-redux";
import ToggleButton from "./components/ToggleButton";
import getFormattedValue from "./utils/getFormattedValue";

function App() {
  const chronoValues = useSelector((state) => state.chrono);

  return (
    <div className="bg-slate-700 text-slate-100 pt-20 min-h-screen">
      <div className="max-w-xl mx-auto border border-s-slate-500 rounded p-10">
        <h1 className="text-center text-3xl mb-8"> Pomodoro App </h1>

        <div className="flex justify-center mb-8">
          {/* SessionBlock  */}
          <div className="mr-10">
            <p className="text-center mb-1">Sessions</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"sessions"}></UpdateTimeButton>
              <p className="mx-4 text-xl">
                {" "}
                {chronoValues.sessions.value / 60}{" "}
              </p>
              <UpdateTimeButton sign={"+"} type={"sessions"}></UpdateTimeButton>
            </div>
          </div>

          {/* Pause Block  */}
          <div className="mr-10">
            <p className="text-center mb-1">Pause</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"pause"}></UpdateTimeButton>
              <p className="mx-4 text-xl">{chronoValues.pause.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"pause"}></UpdateTimeButton>
            </div>
          </div>
        </div>
        <p className="text-center mb-2 text-xl font-semibold">
          {" "}
          {chronoValues.displayedValue.heading}{" "}
        </p>
        <p className="text-center justify-center mb-1">
          <span className="text-4xl rounded bg-slate-300 text-slate-900">
            {getFormattedValue(chronoValues.displayedValue.value)}
          </span>
        </p>

        <p className="mb-10 text-center">
          Passed cycles : {chronoValues.cycles}
        </p>
        <ToggleButton />
      </div>
    </div>
  );
}

export default App;
