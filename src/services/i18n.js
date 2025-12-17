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
        partnershipTitle: "Our Partners",
      },

      footer: {
        title: "Events",
        desc: "Discover upcoming events near you.",
        contact: "Contact us",
      },

      aboutUs: {
        title: "About us",
        presidentsTitle: "Meet our team",
        presidentsText: "Co-president",
        benevoleText:
          "We are proud to have 36 dedicated volunteers who share their time, energy, and passion to brighten the lives of children.",
        missionTitle: "Our Mission",
        missionText:
          "Our mission is simple yet profound: to offer moments of happiness to children living in vulnerable situations by organizing festive, fun, and accessible events. We firmly believe that every child deserves to smile and experience joy, at least for one day.",
        valuesTitle: "Our Values",
        valuesText:
          "We believe in compassion, community, and making the world a better place through charitable actions.",
        desc: "We are Coeurs Festifs, a community project founded by two medical students. Our mission is simple: to bring joy, laughter, and unforgettable memories to children in vulnerable situations, for one festive, fun-filled, magical day. We believe that every child deserves to smile and be fully included. That’s why we organize accessible and engaging activities, guided by values that are deeply important to us: compassion, community, and inclusion. By creating these moments of happiness, we hope to make a small positive difference in their lives… one smile at a time 🌟!",
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
        title: "Events",
        subtitle: "Discover exciting upcoming events on our site",
        noEventsMessage: "No events scheduled at the moment.",
        viewDetails: "View details",
        partner: "Partners",
        sponsor: "Sponsors",
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
            title: "Big Hearts, Little Teachers",
            date: "Thursday, April 10, 2025",
            location:
              "Jean-Brillant Pavilion & Humanities and Social Sciences Library, Université de Montréal",
            description:
              "A special event, in collaboration with the Fondation du Dr Julien, will highlight young people who presented a law course at the Université de Montréal. The day will include an exclusive visit to the Humanities and Social Sciences Library, fun activities, and surprises to celebrate their commitment.",
          },
          {
            id: 3,
            title:
              "Annual Picnic of Répit Providence (30th Anniversary of the Organization)",
            date: "Saturday, August 23, 2025",
            location: "Sarah-Maxwell Park",
            description: "Coeurs Festifs participated as a volunteer",
          },
          {
            id: 4,
            title: "PRISMART",
            date: "Saturday, September 6 from 2:00 PM to 7:00 PM",
            location: "Martin Luther King Park",
            description:
              "Coeurs Festifs will have a booth. Come visit us in large numbers!",
          },
          {
            id: 5,
            title: "Levée de Fonds",
            date: "",
            location: "",
            description:
              "💖✨ Thank you all for your incredible generosity! ✨💖\n\n" +
              "Thanks to you, the fundraiser “CCSIG x Festive Hearts for Sainte-Justine au Cœur du Monde” has reached our goal of $1,000! 🎉\n\n" +
              "🎁 Over 25 toys have been purchased and will be distributed to patients during the next mission in Côte d’Ivoire. The remaining funds will be donated directly to the Sainte-Justine au Cœur du Monde foundation to support their work with children.\n\n" +
              "🙏 This achievement would not have been possible without your kindness and support. You’ve truly made a difference!\n\n" +
              "💖 Together, we’ve created smiles and brought a touch of magic to children who need it most. Thank you from the bottom of our hearts!\n\n" +
              "— The CCSIG & Coeur Festifs Team",
          },
          {
            id: 6,
            title: "Halloween Party",
            date: "Friday, October 31, 2025",
            location: "5111 Rue Paré, Montréal, QC H4P 2B1",
            description:
              "Join us for a spooktacular Halloween celebration filled with fun activities!",
          },
          {
            id: 7,
            title: "Career Fair",
            date: "Saturday, November 22, 2025",
            location:
              "3333 chemin de la Côte Sainte-Catherine, Montréal, QC H3T 1C8",
            description: "Come and discover various fields of study with us!",
          },
          {
            id: 8,
            title: "Christmas Party with Promis",
            date: "Saturday, December 13, 2025",
            location:
              "3333 chemin de la Côte Sainte-Catherine, Montréal, QC H3T 1C8",
            description: "Come celebrate Christmas with us!",
          },
          {
            id: 9,
            title: "Dr. Julien's Guignolée with the Garage à Musique",
            date: "Saturday, December 13, 2025",
            location: "2080, avenue Bennett, Montréal, QC H1V 3S6",
            description:
              "Enjoy a warm atmosphere and fun activities while supporting a great cause!",
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
      events_title: "Événements",
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
        partnershipTitle: "Nos Partenaires",
      },

      aboutUs: {
        title: "À propos de nous",
        presidentsTitle: "Découvrez notre équipe",
        presidentsText: "Co-présidente",
        benevoleText:
          "Nous sommes fiers de pouvoir compter sur 36 bénévoles engagés qui partagent leur temps, leur énergie et leur passion pour illuminer la vie des enfants.",
        missionTitle: "Notre Mission",
        missionText:
          "Notre mission est simple et profonde : offrir des moments de bonheur aux enfants vivant en situation de vulnérabilité, en organisant des événements festifs, amusants et accessibles. Nous croyons fermement que chaque enfant mérite de sourire et de vivre des moments de bonheur, au moins l’espace d’une journée.",
        valuesTitle: "Nos Valeurs",
        valuesText:
          "Nous croyons en la compassion, la communauté et à rendre le monde meilleur à travers des actions caritatives.",
        desc: " Nous sommes Cœurs Festifs, un projet communautaire fondé par deux étudiantes en médecine. Notre mission est simple : apporter de la joie, des rires et des souvenirs inoubliables aux enfants en situation de vulnérabilité, le temps d’une journée festive, amusante et remplie de magie. Nous croyons que chaque enfant mérite de sourire et d’être pleinement inclus. C’est pourquoi nous organisons des activités accessibles et engageantes, en mettant au cœur de nos actions des valeurs qui nous tiennent profondément à cœur : la compassion, la communauté et l’inclusion. En créant ces moments de bonheur, nous espérons avoir un petit impact positif dans leur vie...un sourire à la fois🌟!",
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
        title: "Événements",
        subtitle:
          "Découvrez les événements passionnants à venir sur notre site",
        noEventsMessage: "Aucun événement prévu pour le moment.",
        collaboration: " En collaboration avec ",
        partner: "Partenaires",
        sponsor: "Commanditaires",
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
            title: "Grands cœurs, petits professeurs",
            date: "Jeudi 10 avril 2025",
            location:
              "Pavillon Jean-Brillant & Bibliothèque des lettres et sciences humaines, Université de Montréal",
            description:
              "Un événement spécial, en collaboration avec la Fondation du Dr. Julien, mettra à l’honneur des jeunes ayant présenté un cours en droit à l’Université de Montréal. Au programme : visite exclusive de la Bibliothèque des Sciences et Lettres Humaines, activités ludiques et surprises pour célébrer leur engagement.",
          },
          {
            id: 3,
            title:
              "Pique-nique annuel de Répit Providence (30 ans de l’organisme)",
            date: "Samedi 23 août 2025",
            location: "Sarah-Maxwell Park",
            description: "Coeurs Festifs a participé comme bénévole",
          },
          {
            id: 4,
            title: "PRISMART",
            date: "Samedi 6 septembre de 14h00 à 19h00",
            location: "Parc Martin Luther King",
            description:
              "Coeurs Festifs aura un kiosque. Venez nous voir en grand nombre!",
          },
          {
            id: 5,
            title: "Levée de Fonds",
            date: "",
            location: "",
            description:
              "💖✨ Merci à tous pour votre générosité! ✨💖\n\n" +
              "Grâce à vous, la collecte de fonds « CCSIG x Cœurs Festifs pour Sainte-Justine au Cœur du Monde » a atteint notre objectif de 1 000 $! 🎉\n\n" +
              "🎁 Plus de 25 jouets ont été achetés et seront distribués aux patients lors de la prochaine mission en Côte d’Ivoire. Le reste des fonds sera remis directement à la fondation Sainte-Justine au Cœur du Monde afin de soutenir leurs actions auprès des enfants.\n\n" +
              "🙏 Cette réussite n’aurait pas été possible sans votre soutien et votre gentillesse. Vous avez fait une vraie différence!\n\n" +
              "💖 Ensemble, nous avons créé des sourires et offert un peu de magie aux enfants qui en ont le plus besoin. Merci de tout cœur!\n\n" +
              "— L’équipe CCSIG & Cœurs Festifs",
          },

          {
            id: 6,
            title: "Fête d'Halloween",
            date: "Vendredi 31 octobre 2025",
            location: "5111 Rue Paré, Montréal, QC H4P 2B1",
            description:
              "Venez passez l’halloween avec nous tout en profitant d’activités divertissantes!",
          },
          {
            id: 7,
            title: "Foire aux métiers",
            date: "Samedi 22 novembre 2025",
            location:
              "3333 chemin de la Côte Sainte-Catherine, Montréal, QC H3T 1C8",
            description:
              "Venez découvrir plusieurs domaines d’études avec nous!",
          },
          {
            id: 8,
            title: "Fête de Noel avec Promis",
            date: "Samedi 13 décembre 2025",
            location:
              "3333 chemin de la Côte Sainte-Catherine, Montréal, QC H3T 1C8",
            description: "Venez fêter Noel à nos côtés!",
          },
          {
            id: 9,
            title: "Guignolée du Dr Julien avec le Garage à Musique",
            date: "Samedi 13 décembre 2025",
            location: "2080, avenue Bennett, Montréal, QC H1V 3S6",
            description:
              "Venez profitez d’une ambiance chaleureuse et des activités ludiques tout en soutenant une belle cause!",
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
