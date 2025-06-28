import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessions: {
    value: 1500,
    runningValue: 1500,
  },
  pause: {
    value: 300,
    runningValue: 300,
  },
  isPlaying: false,
  intervalID: undefined,
  cycles: 0,
  displayedValue: {
    value: 1500,
    heading: "Work",
  },
};

const chrono = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    updateChronoValues: (state, action) => {
      const chosenState = state[action.payload.type];

      if (chosenState.value + action.payload.value === 0) return;

      if (action.payload.type === "sessions") {
        if (!state.isPlaying) {
          chosenState.value = chosenState.value + action.payload.value;
          chosenState.runningValue =
            chosenState.runningValue + action.payload.value;
          state.displayedValue.value = chosenState.runningValue;
        } else {
          chosenState.value = action.payload.value;
        }
      } else if (action.payload.type === "pause") {
        chosenState.value = chosenState.value + action.payload.value;
      } else {
        state.cycles++
        state.sessions.runningValue = state.sessions.value - 1
        state.displayedValue.value = state.sessions.value - 1
        state.displayedValue.heading = "Work";
        state.pause.runningValue = state.pause.value
      }
    },
    tick: (state, action) => {
      if (state.sessions.runningValue > 0) {
        state.sessions.runningValue--;
        state.displayedValue.value = state.sessions.runningValue;
        state.displayedValue.heading = "Work";
      } else if (state.pause.runningValue > 0) {
        state.sessions.runningValue--;
        state.displayedValue.value = state.sessions.runningValue;
        state.displayedValue.heading = "Pause";
      }
    },
    setUpChrono: (state, action) => {
      state.isPlaying = true;
      state.intervalID = action.payload;
    },
    resetChrono: (state, action) => {
      window.clearInterval(state.intervalID);
      state.isPlaying = false;
      state.sessions.runningValue = state.sessions.value
      state.pause.runningValue = state.pause.value
      state.displayedValue.value = state.sessions.runningValue
      state.cycles = 0
    },
  },
});

export function startChrono(action) {
  return function (dispatch, getState) {
    const intervalID = setInterval(() => {
      dispatch(tick());
    }, 1000);
    dispatch(setUpChrono(intervalID));
    dispatch(tick());
  };
}

export const { updateChronoValues, resetChrono, setUpChrono, tick } =
  chrono.actions;
export default chrono.reducer;
