import React, { Component } from "react";
import "@progress/kendo-theme-material";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
} from "@progress/kendo-react-scheduler";

class Calendar extends Component {
  state = {
    scheduleSampleData: [
      {
        id: 0,
        title: "Bowling",
        description: "",
        start: new Date("2021-01-25T08:30:00.000Z"),
        end: new Date("2021-01-25T09:00:00.000Z"),
      },
      {
        id: 1,
        title: "izlet",
        description: "",
        start: new Date("2021-01-30T08:00:00.000Z"),
        end: new Date("2021-01-30T20:00:00.000Z"),
      },
      {
        id: 2,
        title: "zobozdravnik",
        description: "",
        start: new Date("2021-01-27T08:00:00.000Z"),
        end: new Date("2021-01-27T09:00:00.000Z"),
      },
    ],
  };
  render() {
    const displayDate = new Date(Date.UTC(2021, 0, 25));
    return (
      <Scheduler
        data={this.state.scheduleSampleData}
        defaultDate={displayDate}
        defaultView="week"
        timezone="Etc/UTC"
      >
        <DayView />
        <WeekView />
        <MonthView />
      </Scheduler>
    );
  }
}

export default Calendar;
<h1> Calendar</h1>;
