// src/data/upcomingAppointments.js
// export const upcomingAppointments = [
//   { day: 'Thursday', appointments: [{ title: 'Dentist', time: '10:00 AM' }] },
//   { day: 'Saturday', appointments: [{ title: 'Physiotherapy', time: '02:00 PM' }] },
// ];

export const upcomingAppointments = [
  {
    id: 1,
    dayLabel: "On Thursday",
    appointments: [
      { id: 1, title: "Health checkup complete", time: "08:00", icon: "CheckCircle" },
      { id: 2, title: "Ophthalmologist", time: "09:00", icon: "Eye" },
    ],
  },
  {
    id: 2,
    dayLabel: "On Saturday",
    appointments: [
      { id: 3, title: "Cardiologist", time: "11:00", icon: "Heart" },
      { id: 4, title: "Neurologist", time: "14:00", icon: "Zap" },
    ],
  },
];
