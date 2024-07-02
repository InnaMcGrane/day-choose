import DayChoose from "../DayChoose/DayChoose";

function App() {
    return (
      <div className="days">
        <DayChoose title="Mon" price="120 $" number="25" />
        <DayChoose title="Tues" price="130 $" number="26" />
        <DayChoose title="Wen" price="110 $" number="27" />
      </div>
    );
}
export default App;