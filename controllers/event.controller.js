import {
  createEvent,
  getAllEvents,
  deleteOneEvent,
} from "../services/event.services.js";

export async function getEvent(req, res) {
  const dbEvents = await getAllEvents();
  res.send(JSON.stringify(dbEvents));
}

export async function addNewEvent(req, res) {
  //LUAREA DATELOR
  const { dateNum, dateMonth, eventTitle, eventDate, eventPeriod } = req.body;
  //VERIFICARI
  // if (!dateNum) {
  //   throw new Error("Date number is required");
  // }
  // if (!dateMonth) {
  //   throw new Error("Month is required");
  // }
  // if (!eventTitle) {
  //   throw new Error("Title is required");
  // }
  // if (!eventDate) {
  //   throw new Error("Date is required");
  // }
  // if (! eventPeriod) {
  //   throw new Error("Period is required");
  // }
  //LOGICA - SERVICE + REPOSITORY
  const eventId = await createEvent(
    dateNum,
    dateMonth,
    eventTitle,
    eventDate,
    eventPeriod
  );
  //RASPUNS
  res.send(JSON.stringify({ id: eventId }));
}

export async function deleteEvent(req, res) {
  const { eventId } = req.body;

  if (!eventId) {
    throw new Error("Product id is required");
  }

  await deleteOneEvent(eventId);

  res.send("Deleted");
}
