import BikeTracker from "./messy/BikeTracker";
import CarTracker from "./messy/CarTracker";
import MouseTrackerWithChildren from "./patternAndChildren/MouseTrackerWithChildren";
import Toggle from "./task/Toggle";
import MouseTracker from "./with-pattern/MouseTracker";

function App() {
  return (
    <div className="flex flex-col items-center">
      <CarTracker></CarTracker>
      <BikeTracker></BikeTracker>
      <MouseTracker
        render={(pos) => (
          <p>
            Super Car is at: ({pos.x},{pos.y})
          </p>
        )}
      ></MouseTracker>
      <MouseTracker
        render={({ x, y }) => (
          <p>
            Super Bike is at: ({x},{y})
          </p>
        )}
      ></MouseTracker>
      <MouseTrackerWithChildren>
        {({ x, y }) => (
          <p>
            Super Chilren Bike is at: ({x},{y})
          </p>
        )}
      </MouseTrackerWithChildren>
      {/* TASK STARTS */}
      <Toggle
        render={({ isOpen, toggle }) => {
          return (
            <div>
              <button
                className="border-2 border-amber-500 p-1"
                onClick={toggle}
              >
                {isOpen ? "Close" : "Open"}
              </button>
              {isOpen && (
                <div className="text-2xl text-blue-400 font-bold">
                  Hello this is Render Prop Pattern
                </div>
              )}
            </div>
          );
        }}
      ></Toggle>
    </div>
  );
}

export default App;
