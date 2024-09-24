import Schedules from "../models/Schedules.js";

export const getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedules.findAll();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createSchedule = async (req, res) => {
  try {
    const schedule = await Schedules.create(req.body);
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedules.findByPk(id);
    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }
    await schedule.update(req.body);
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteSchedule = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedules.findByPk(id);
    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }
    await schedule.destroy();
    res.json({ message: "Schedule deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
