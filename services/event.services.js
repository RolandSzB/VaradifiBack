import { Description } from "../models/description.model.js";

import { Event } from "../models/event.model.js";
import { sequelize } from "../db.js";

export async function getAllEvents() {
  return await Event.findAll({
    attributes: [
      "id",
      "dateNum",
      "dateMonth",
      "eventTitle",
      "eventDate",
      "eventPeriod",
    ],
  });
}

export async function createEvent(
  dateNum,
  dateMonth,
  eventTitle,
  eventDate,
  eventPeriod
) {
  const transaction = await sequelize.transaction();

  try {
    const eventRow = await Event.create(
      { dateNum, dateMonth, eventTitle, eventDate, eventPeriod },
      { transaction }
    );

    await transaction.commit();
    return eventRow.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}

export async function deleteOneEvent(id) {
  const transaction = await sequelize.transaction();
  try {
    await Event.destroy(
      {
        where: {
          id: id,
        },
      },
      { transaction }
    );
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}

export async function editOneEvent(id, value) {
  const eventRow = await Event.findByPk(id);
  eventRow.dateNum = value;
  await eventRow.save();
}
