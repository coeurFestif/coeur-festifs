import carrefour from "../assets/CJE.jpg";
import repit from "../assets/repitProvidence.png";
import promis from "../assets/promis.png";
import maisonCulture from "../assets/maisonCulture.png";
import fondationDrJulien from "../assets/fondationDrJulien.png";
import mountainSights from "../assets/mountainSights.png";
import garageMusique from "../assets/garageMusique.png";
import minimolars from "../assets/minimolars.png";
import scholastic from "../assets/Scholastic.png";
import gallimard from "../assets/Gallimard.jpg";
import debrouillard from "../assets/debrouillard.png";
import renojouets from "../assets/renojouets.jpeg";

export interface Org {
  name: string;
  img: string;
}

/** Community partners: active collaborators on events. */
export const PARTNERS: Org[] = [
  { img: fondationDrJulien, name: "Fondation du Dr Julien" },
  { img: repit, name: "Répit Providence" },
  { img: mountainSights, name: "Centre communautaire Mountain Sights" },
  { img: promis, name: "PROMIS" },
  { img: maisonCulture, name: "Maison de la culture CDN" },
  { img: carrefour, name: "Carrefour Jeunesse Emploi CDN–Outremont–VMR" },
  { img: garageMusique, name: "Garage à Musique" },
  { img: minimolars, name: "Mini Molars Club" },
];

/** Sponsors: donated goods or funds for specific events. */
export const SPONSORS: Org[] = [
  { img: scholastic, name: "Scholastic" },
  { img: gallimard, name: "Librairie Gallimard" },
  { img: debrouillard, name: "Les Débrouillards" },
  { img: renojouets, name: "Fondation Réno-Jouets" },
];

/** From aboutUs.benevoleText. Update both if the team grows. */
export const VOLUNTEER_COUNT = 36;
