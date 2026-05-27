export const sorties = [
  {
    id: "s1",
    date: "2026-06-07",
    label: "Dimanche 7 juin 2026",
    destinations: ["La Jonquera", "Mercado El Pertús"],
    departs: [
      { ville: "Montpellier", lieu: "Parking Odysseum", heure: "06h00" },
      { ville: "Sète",        lieu: "Parking Théâtre Molière", heure: "06h30" },
      { ville: "Béziers",     lieu: "Parking Palais des Congrès", heure: "07h00" },
    ],
    retourEstime: "19h00 – 20h00",
    prix: 49,
    placesTotal: 8,
    placesRestantes: 8,
  },
  {
    id: "s2",
    date: "2026-06-21",
    label: "Dimanche 21 juin 2026",
    destinations: ["La Jonquera", "Mercado El Pertús", "Empuriabrava"],
    departs: [
      { ville: "Montpellier", lieu: "Parking Odysseum", heure: "06h00" },
      { ville: "Sète",        lieu: "Parking Théâtre Molière", heure: "06h30" },
      { ville: "Béziers",     lieu: "Parking Palais des Congrès", heure: "07h00" },
    ],
    retourEstime: "19h30 – 20h30",
    prix: 49,
    placesTotal: 8,
    placesRestantes: 8,
  },
  {
    id: "s3",
    date: "2026-07-05",
    label: "Dimanche 5 juillet 2026",
    destinations: ["La Jonquera", "Mercado El Pertús"],
    departs: [
      { ville: "Montpellier", lieu: "Parking Odysseum", heure: "06h00" },
      { ville: "Sète",        lieu: "Parking Théâtre Molière", heure: "06h30" },
      { ville: "Béziers",     lieu: "Parking Palais des Congrès", heure: "07h00" },
    ],
    retourEstime: "19h00 – 20h00",
    prix: 49,
    placesTotal: 8,
    placesRestantes: 8,
  },
  {
    id: "s4",
    date: "2026-07-19",
    label: "Dimanche 19 juillet 2026",
    destinations: ["La Jonquera", "Mercado El Pertús", "Empuriabrava"],
    departs: [
      { ville: "Montpellier", lieu: "Parking Odysseum", heure: "06h00" },
      { ville: "Sète",        lieu: "Parking Théâtre Molière", heure: "06h30" },
      { ville: "Béziers",     lieu: "Parking Palais des Congrès", heure: "07h00" },
    ],
    retourEstime: "19h30 – 20h30",
    prix: 49,
    placesTotal: 8,
    placesRestantes: 8,
  },
]

export function getSortie(id) {
  return sorties.find(s => s.id === id)
}

export function getSortiesDisponibles() {
  return sorties.filter(s => s.placesRestantes > 0)
}
