import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Les traductions pour chaque langue
const resources = {
  en: {
    translation: {
      events_title: "Upcoming Events",
      events_subtitle: "Discover exciting upcoming events on our site",
      date: "Date",
      location: "Location",
      not_found: "Event not found",
      homepage: {
        title: "Discover upcoming events",
        subtitle: "Discover the latest news and events on our site",
        explore: "Explore",
      },

      footer: {
        title: "Events",
        desc: "Discover upcoming events near you.",
        contact: "Contact us",
      },

      aboutUs: {
        title: "About us",
        presidentsTitle: "Our Presidents",
        missionTitle: "Our Mission",
        missionText:
          "Our mission is to bring joy and smiles to children through engaging events. We aim to make a positive impact on their lives.",
        valuesTitle: "Our Values",
        valuesText:
          "We believe in compassion, community, and making the world a better place through charitable actions.",
        desc: "Coeur Festifs is a charitable group led by medical students, dedicated to bringing joy and smiles to children in need in Montreal. We organize festive and fun events to create unforgettable moments, filled with fun and magic.",
      },

      contactUs: {
        title: "Contact us",
        subtitle: "For any questions, feel free to contact us here.",
        invalidEmail: "Invalid email address",
        successMessage: "Your message has been sent successfully!",
        errorMessage: "An error occurred. Please try again.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Submit",
          sending: "Sending...",
        },
      },

      notFound: {
        title: "404",
        subtitle: "Page not found",
      },

      events: {
        title: "Upcoming Events",
        subtitle: "Discover exciting upcoming events on our site",
        noEventsMessage: "No events scheduled at the moment.",
        viewDetails: "View details",
        collaboration: " In collaboration with ",
        Footer: {
          title: "Stay connected !",
          desc: "Many exciting events are in the works! Stay connected and follow us on our social media to not miss anything. We are also open to your ideas and project proposals for future partnerships. Feel free to contact us — we would be delighted to collaborate with you! 😊",
          contact: "Contact us",
        },
        events: [
          {
            id: 1,
            title: "ChocoChaud and Snowball Fight",
            date: "Saturday, January 11, 2025",
            location: "1855, rue Dézéry at Répit Providence",
            description:
              "Parents, children and people from the neighborhood, come play games and drink delicious hot chocolate.",
          },
          {
            id: 2,
            title: "Halloween Party",
            date: "October 31, 2021",
            location: "Montreal",
            description:
              "Celebrate Halloween with us at our spooky party with costumes, games, and treats for kids.",
          },
          {
            id: 3,
            title: "Easter Party",
            date: "April 4, 2022",
            location: "Montreal",
            description:
              "Join us for an Easter party with egg hunts, games, and fun activities for children in need.",
          },
        ],
      },

      navBar: {
        home: "Home",
        about: "About",
        contact: "Contact",
        events: "Events",
      },
    },
  },
  fr: {
    translation: {
      events_title: "Événements à venir",
      events_subtitle:
        "Découvrez les événements passionnants à venir sur notre site",
      date: "Date",
      location: "Lieu",
      not_found: "Événement non trouvé",
      homepage: {
        title: "Découvrez les événements à venir",
        subtitle:
          "Découvrez les dernières actualités et événements sur notre site",
        explore: "Explorer",
      },

      aboutUs: {
        title: "À propos de nous",
        presidentsTitle: "Nos Présidents",
        missionTitle: "Notre Mission",
        missionText:
          "Notre mission est d'apporter joie et sourire aux enfants à travers des événements engageants. Nous visons à avoir un impact positif sur leur vie.",
        valuesTitle: "Nos Valeurs",
        valuesText:
          "Nous croyons en la compassion, la communauté et à rendre le monde meilleur à travers des actions caritatives.",
        desc: " Cœurs Festifs est un groupe caritatif dirigé par des étudiantes en médecine, dédié à apporter joie et sourire aux enfants dans le besoin à Montréal. Nous organisons des événements festifs et ludiques pour créer des moments inoubliables, remplis d’amusement et de magie.",
      },

      footer: {
        title: "Événements",
        desc: "Découvrez les événements à venir près de chez vous.",
        contact: "Contactez-nous",
      },

      contactUs: {
        title: "Contactez-nous",
        subtitle: "Pour toute question, n'hésitez pas à nous contacter ici.",
        invalidEmail: "Adresse courriel invalide",
        successMessage: "Votre message a été envoyé avec succès !",
        errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
        form: {
          name: "Nom",
          email: "Courriel",
          message: "Message",
          submit: "Soumettre",
          sending: "Envoi en cours...",
        },
      },

      notFound: {
        title: "404",
        subtitle: "Page non trouvée",
      },

      events: {
        title: "Événements à venir",
        subtitle:
          "Découvrez les événements passionnants à venir sur notre site",
        noEventsMessage: "Aucun événement prévu pour le moment.",
        collaboration: " En collaboration avec ",
        viewDetails: "Voir les détails",
        Footer: {
          title: "Restez connectés !",
          desc: "De nombreux événements excitants sont en préparation ! Restez connectés et suivez-nous sur nos réseaux sociaux pour ne rien manquer. Nous sommes également ouverts à vos idées et propositions de projets pour de futurs partenariats. N'hésitez pas à nous contacter — nous serions ravis de collaborer avec vous ! 😊",
          contact: "Contactez-nous",
        },
        events: [
          {
            id: 1,
            title: "ChocoChaud et boules de neige ",
            date: "Samedi 11 janvier 2025",
            location: "1855, rue Dézéry chez Répit Providence",
            description:
              "Parents, enfants et gens du quartier, venez jouer à des jeux et boire un délicieux chocolat chaud. ",
          },
          {
            id: 2,
            title: "Fête d'Halloween",
            date: "31 octobre 2021",
            location: "Montréal",
            description:
              "Célébrez Halloween avec nous lors de notre fête effrayante avec des costumes, des jeux et des friandises pour les enfants.",
          },
          {
            id: 3,
            title: "Fête de Pâques",
            date: "4 avril 2022",
            location: "Montréal",
            description:
              "Rejoignez-nous pour une fête de Pâques avec des chasses aux œufs, des jeux et des activités amusantes pour les enfants dans le besoin.",
          },
        ],
      },

      navBar: {
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        events: "Événements",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // Langue par défaut
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
