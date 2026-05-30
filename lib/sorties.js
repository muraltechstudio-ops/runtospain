export const sorties = [
  {
    id: "s1",
    date: "2026-06-07",
    label: "Dimanche 7 juin 2026",
    destinations: ["Gran Jonquera", "La Tramontana"],
    departs: [
      { ville: "Montpellier", lieu: "Parking Burger King Montpellier Sud", heure: "08h00" },
      { ville: "Sète",        lieu: "Sortie autoroute A9", heure: "08h30" },
      { ville: "Béziers",     lieu: "Sortie autoroute A9", heure: "09h00" },
    ],
    retourEstime: "20h00 – 20h30",
    prix: 49,
    placesTotal: 8,
    placesRestantes: 8,
  },
  {
    id: "s2",
    date: "2026-06-21",
    label: "Dimanche 21 juin 2026",
    destinations: ["Gran Jonquera", "La Tramontana"],
    departs: [
      { ville: "Montpellier", lieu: "Parking Burger King Montpellier Sud", heure: "08h00" },
      { ville: "Sète",        lieu: "Sortie autoroute A9", heure: "08h30" },
      { ville: "Béziers",     lieu: "Sortie autoroute A9", heure: "09h00" },
    ],
    retourEstime: "20h00 – 20h30",
    prix: 49,
    placesTotal: 8,
    placesRestantes: 8,
  },
  {
    id: "s3",
    date: "2026-07-05",
    label: "Dimanche 5 juillet 2026",
    destinations: ["Gran Jonquera", "La Tramontana"],
    departs: [
      { ville: "Montpellier", lieu: "Parking Burger King Montpellier Sud", heure: "08h00" },
      { ville: "Sète",        lieu: "Sortie autoroute A9", heure: "08h30" },
      { ville: "Béziers",     lieu: "Sortie autoroute A9", heure: "09h00" },
    ],
    retourEstime: "20h00 – 20h30",
    prix: 49,
    placesTotal: 8,
    placesRestantes: 8,
  },
  {
    id: "s4",
    date: "2026-07-19",
    label: "Dimanche 19 juillet 2026",
    destinations: ["Gran Jonquera", "La Tramontana"],
    departs: [
      { ville: "Montpellier", lieu: "Parking Burger King Montpellier Sud", heure: "08h00" },
      { ville: "Sète",        lieu: "Sortie autoroute A9", heure: "08h30" },
      { ville: "Béziers",     lieu: "Sortie autoroute A9", heure: "09h00" },
    ],
    retourEstime: "20h00 – 20h30",
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
