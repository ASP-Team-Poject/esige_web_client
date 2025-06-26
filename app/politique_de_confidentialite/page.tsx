import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | E-Sige Rdc",
  description: "E-Sige Rdc, DIGE",
};

const page = () => {
  return (
    <div className="bodyPC">
      <div className="containerPC">
        <div className="flex justify-center">
          <h1 className="h1PC">{"Politique de Confidentialité"}</h1>
        </div>

        <h2 className="h2PC">1. Objet</h2>
        <p className="pPC">
          {
            "La présente politique de confidentialité vise à informer les utilisateurs de l’application sur la manière dont les données collectées sont traitées, utilisées et protégées dans le cadre du programme national de collecte de données statistiques sur l’éducation."
          }
        </p>

        <h2 className="h2PC">{"2. Nature des données collectées"}</h2>
        <p className="pPC">
          {
            "L’application recueille des données statistiques scolaires, notamment :"
          }
        </p>
        <ul className="ulPC">
          <li className="liPC">
            {
              "Informations sur les établissements scolaires (noms, localisations, types, effectifs, etc.)"
            }
          </li>
          <li className="liPC">
            {
              "Données de fréquentation, infrastructure, équipements, personnel, etc."
            }
          </li>
        </ul>
        <p className="pPC">
          {
            "Aucune donnée personnelle sensible (comme les noms des élèves ou données biométriques) n’est collectée."
          }
        </p>

        <h2 className="h2PC">{"3. Utilisation des données"}</h2>
        <p className="pPC">
          {"Les données collectées ont pour unique objectif de :"}
        </p>
        <ul className="ulPC">
          <li className="liPC">
            {
              "Permettre aux autorités éducatives de disposer de statistiques fiables"
            }
          </li>
          <li className="liPC">
            {
              "Informer les politiques publiques et les décisions en matière d’éducation"
            }
          </li>
          <li className="liPC">
            {
              " Améliorer la planification, le suivi et l’évaluation du système éducatif national"
            }
          </li>
        </ul>
        <p className="pPC">
          {
            "Aucune donnée n’est utilisée à des fins commerciales ou publicitaires."
          }
        </p>

        <h2 className="h2PC">{"4. Accès aux données"}</h2>
        <p className="pPC">
          {`
          Seules les personnes explicitement autorisées par le Ministère de l’Éducation ou par les autorités mandatées ont accès à l’application
          et aux données qu’elle contient. Tout accès non autorisé, tentative de
          modification ou d’exploitation des données constitue une violation des
          présentes dispositions et pourra faire l’objet de poursuites.
          `}
        </p>

        <h2 className="h2PC">{"5. Sécurité et conservation"}</h2>
        <p className="pPC">
          {
            "Des mesures de sécurité techniques et organisationnelles sont mises en place pour garantir :"
          }
        </p>
        <ul className="ulPC">
          <li className="liPC">
            {"La confidentialité et l’intégrité des données"}
          </li>
          <li className="liPC">
            {"La protection contre tout accès non autorisé ou usage frauduleux"}
          </li>
          <li className="liPC">{"La traçabilité des opérations"}</li>
        </ul>
        <p className="pPC">
          {
            "Les données sont stockées sur des serveurs sécurisés, et conservées uniquement pour la durée nécessaire à l’atteinte des objectifs de la collecte."
          }
        </p>

        <h2 className="h2PC">{"6. Engagement de l’utilisateur"}</h2>
        <p className="pPC">
          {"En utilisant l’application, tout utilisateur s’engage à :"}
        </p>
        <ul className="ulPC">
          <li className="liPC">{"Respecter les règles d’usage prévues"}</li>
          <li className="liPC">
            {"Ne transmettre aucune donnée non conforme à la réalité"}
          </li>
          <li className="liPC">
            {
              "Ne pas divulguer les informations obtenues dans le cadre de la collecte à des tiers non autorisés"
            }
          </li>
        </ul>

        <h2 className="h2PC">7. Contact</h2>
        <p className="pPC">
          {
            "Pour toute question relative à cette politique ou à la gestion des données, vous pouvez contacter l’équipe technique à l’adresse suivante :"
          }
          <br />
          <strong>📧 jonlandu78@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};

export default page;
