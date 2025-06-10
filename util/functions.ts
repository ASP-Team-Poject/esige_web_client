import { AnnuaireTableType, AnnuaireType } from "./types";

export const getFormatedDate = (
  date: Date,
  displayHour = false,
  displayMinute = false,
  displaySecond = false
) => {
  date = new Date(date);

  function padTo2Digits(num: any) {
    return num.toString().padStart(2, "0");
  }

  const mainDate = [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");

  const time = [];

  if (displayHour) {
    time.push(padTo2Digits(date.getHours()));
  }

  if (displayMinute) {
    time.push(padTo2Digits(date.getMinutes()));
  }

  if (displaySecond) {
    time.push(padTo2Digits(date.getSeconds()));
  }

  const timeString = time.join(":");

  return `${mainDate} ${timeString}`;
};

export const getAnnuaireTables = (annuaireData: AnnuaireType) => {
  const couverture_du_recensement_tables = getCouvertureDuRecensementTables(
    annuaireData.annuaire.couverture_du_recensement,
    annuaireData.taux_couverture_resume
  );
  const salles_activites_tables = getSallesActiviteTables(
    annuaireData.annuaire.enseignement_maternel,
    annuaireData.annuaire.enseignement_primaire,
    annuaireData.annuaire.enseignement_secondaire
  );

  return {
    couverture_du_recensement_tables,
    salles_activites_tables,
  };
};

function getCouvertureDuRecensementTables(
  couverture_du_recensement: any,
  taux_couverture_resume: any
): AnnuaireTableType[] {
  const tables: AnnuaireTableType[] = [];
  const tableau1_taux_couverture_niveau_enseignement: AnnuaireTableType = {
    title: "Taux de couverture par niveau d'enseignement",
    columns: [
      "Niveau",
      "Ecole existante",
      "Ecole ayant repondu",
      "Taux de reponse %",
    ],
    fields: [
      "niveau",
      "ecole_existante",
      "ecole_ayant_repondu",
      "taux_de_reponse",
    ],
    rows: couverture_du_recensement
      .tableau1_taux_couverture_niveau_enseignement_selon_province[0].niveaux,
  };
  const tableau2_coefficient_redressement_province_niveau_enseignement: AnnuaireTableType =
    {
      title: "Coefficient de redressement par niveau d'enseignement",
      columns: ["Pre primaire", "Primaire", "Secondaire"],
      fields: ["pre_primaire", "primaire", "secondaire"],
      rows: [
        couverture_du_recensement
          .tableau2_coefficient_redressement_province_niveau_enseignement
          .sousProved.coefficients,
      ],
    };
  const formatedRows = getSynoptiqueFormatedrows(
    couverture_du_recensement.tableau3_tableau_synoptique_statistiques_scolaires_recoltees
  );
  const tableau3_tableau_synoptique_statistiques_scolaires_recoltees: AnnuaireTableType =
    {
      title: "Tableau synoptique des statistiques scolaires recoltées",
      columns: [
        "Libellé",
        "ENC",
        "ECC",
        "ECP",
        "ECK",
        "ECI",
        "ECS",
        "ECF",
        "Autres",
        "EPR",
        "Total",
      ],
      fields: [
        "libelle",
        "ENC",
        "ECC",
        "ECP",
        "ECK",
        "ECI",
        "ECS",
        "ECF",
        "Autres",
        "EPR",
        "Total",
      ],
      rows: formatedRows,
    };

  const tableau4_taux_couverture_resume: AnnuaireTableType = {
    title: "Taux de couverture global",
    columns: [
      "Taux de couverture globale de la republique",
      "Taux couverture globalede la province",
      "Taux couverture globale du proved",
      "Taux couverture globale sousProved",
    ],
    fields: [
      "taux_couverture_globale_republic",
      "taux_couverture_globale_province",
      "taux_couverture_globale_proved",
      "taux_couverture_globale_sousProved",
    ],
    rows: [
      {
        taux_couverture_globale_republic:
          taux_couverture_resume.taux_couverture_globale_republic,
        taux_couverture_globale_province:
          taux_couverture_resume.taux_couverture_globale_province,
        taux_couverture_globale_proved:
          taux_couverture_resume.taux_couverture_globale_proved,
        taux_couverture_globale_sousProved:
          taux_couverture_resume.taux_couverture_globale_sousProved,
      },
    ],
  };

  tables.push(tableau4_taux_couverture_resume);
  tables.push(tableau1_taux_couverture_niveau_enseignement);
  tables.push(tableau2_coefficient_redressement_province_niveau_enseignement);
  tables.push(tableau3_tableau_synoptique_statistiques_scolaires_recoltees);

  return tables;
}

function getSallesActiviteTables(
  enseignement_maternel: any,
  enseignement_primaire: any,
  enseignement_secondaire: any
) {
  const tables: AnnuaireTableType[] = [];
  const marternelFormatedRows = getSallesActivitesFormatedRows(
    enseignement_maternel.proportion_salles_activites
  );

  const primaireFormatedRows = getSallesActivitesFormatedRows(
    enseignement_primaire.proportion_salles_activites
  );

  const secondaireFormatedRows = getSallesActivitesFormatedRows(
    enseignement_secondaire.proportion_salles_activites
  );

  const salles_activites_maternel: AnnuaireTableType = {
    title: "Enseignement maternel",
    columns: [
      "Type salle",
      "Nombre salles",
      "Nombre salles type",
      "Pourcentage %",
    ],
    fields: [
      "type_salle",
      "nombre_salles",
      "nombre_salles_type",
      "pourcentage",
    ],
    rows: marternelFormatedRows,
  };

  const salles_activites_primaire: AnnuaireTableType = {
    title: "Enseignement primaire",
    columns: [
      "Type salle",
      "Nombre salles",
      "Nombre salles type",
      "Pourcentage %",
    ],
    fields: [
      "type_salle",
      "nombre_salles",
      "nombre_salles_type",
      "pourcentage",
    ],
    rows: primaireFormatedRows,
  };

  const salles_activites_secondaire: AnnuaireTableType = {
    title: "Enseignement secondaire",
    columns: [
      "Type salle",
      "Nombre salles",
      "Nombre salles type",
      "Pourcentage %",
    ],
    fields: [
      "type_salle",
      "nombre_salles",
      "nombre_salles_type",
      "pourcentage",
    ],
    rows: secondaireFormatedRows,
  };

  tables.push(salles_activites_maternel);
  tables.push(salles_activites_primaire);
  tables.push(salles_activites_secondaire);

  return tables;
}

type ToFormatSynoptiqueType = {
  ecoles: {
    maternelle: {
      ENC: number;
      ECC: number;
      ECP: number;
      ECK: number;
      ECI: number;
      ECS: number;
      ECF: number;
      Autres: number;
      EPR: number;
      Total: number;
    };
    primaire: {
      ENC: number;
      ECC: number;
      ECP: number;
      ECK: number;
      ECI: number;
      ECS: number;
      ECF: number;
      Autres: number;
      EPR: number;
      Total: number;
    };
    secondaire: {
      ENC: number;
      ECC: number;
      ECP: number;
      ECK: number;
      ECI: number;
      ECS: number;
      ECF: number;
      Autres: number;
      EPR: number;
      Total: number;
    };
  };
  eleves: {
    maternelle: {
      ENC: number;
      ECC: number;
      ECP: number;
      ECK: number;
      ECI: number;
      ECS: number;
      ECF: number;
      Autres: number;
      EPR: number;
      Total: number;
    };
    primaire: {
      ENC: number;
      ECC: number;
      ECP: number;
      ECK: number;
      ECI: number;
      ECS: number;
      ECF: number;
      Autres: number;
      EPR: number;
      Total: number;
    };
    secondaire: {
      ENC: number;
      ECC: number;
      ECP: number;
      ECK: number;
      ECI: number;
      ECS: number;
      ECF: number;
      Autres: number;
      EPR: number;
      Total: number;
    };
  };
  enseignants: {
    maternelle: {
      ENC: number;
      ECC: number;
      ECP: number;
      ECK: number;
      ECI: number;
      ECS: number;
      ECF: number;
      Autres: number;
      EPR: number;
      Total: number;
    };
    primaire: {
      ENC: number;
      ECC: number;
      ECP: number;
      ECK: number;
      ECI: number;
      ECS: number;
      ECF: number;
      Autres: number;
      EPR: number;
      Total: number;
    };
    secondaire: {
      ENC: number;
      ECC: number;
      ECP: number;
      ECK: number;
      ECI: number;
      ECS: number;
      ECF: number;
      Autres: number;
      EPR: number;
      Total: number;
    };
  };
};

type FormatedRowSynoptiqueType = {
  libelle: string;
  ENC: number;
  ECC: number;
  ECP: number;
  ECK: number;
  ECI: number;
  ECS: number;
  ECF: number;
  Autres: number;
  EPR: number;
  Total: number;
};

function getSynoptiqueFormatedrows(
  data: ToFormatSynoptiqueType
): FormatedRowSynoptiqueType[] {
  const formatedRows: FormatedRowSynoptiqueType[] = [];
  const { ecoles, eleves, enseignants } = data;

  const dataCategory = {
    ECOLES: "Ecoles",
    ELEVES: "Eleves",
    ENSEIGNANTS: "Enseignants",
  };
  const libelles: string[] = [
    dataCategory.ECOLES,
    dataCategory.ELEVES,
    dataCategory.ENSEIGNANTS,
  ];
  type TypeKey = "maternelle" | "primaire" | "secondaire";
  const types: TypeKey[] = ["maternelle", "primaire", "secondaire"];

  for (const libelle of libelles) {
    for (const type of types) {
      const row: FormatedRowSynoptiqueType = {
        libelle: `${libelle} ${type}`,
        ENC:
          libelle === dataCategory.ECOLES
            ? ecoles[type].ENC
            : libelle === dataCategory.ELEVES
            ? eleves[type].ENC
            : enseignants[type].ENC,
        ECC:
          libelle === dataCategory.ECOLES
            ? ecoles[type].ECC
            : libelle === dataCategory.ELEVES
            ? eleves[type].ECC
            : enseignants[type].ECC,
        ECP:
          libelle === dataCategory.ECOLES
            ? ecoles[type].ECP
            : libelle === dataCategory.ELEVES
            ? eleves[type].ECP
            : enseignants[type].ECP,
        ECK:
          libelle === dataCategory.ECOLES
            ? ecoles[type].ECK
            : libelle === dataCategory.ELEVES
            ? eleves[type].ECK
            : enseignants[type].ECK,
        ECI:
          libelle === dataCategory.ECOLES
            ? ecoles[type].ECI
            : libelle === dataCategory.ELEVES
            ? eleves[type].ECI
            : enseignants[type].ECI,
        ECS:
          libelle === dataCategory.ECOLES
            ? ecoles[type].ECS
            : libelle === dataCategory.ELEVES
            ? eleves[type].ECS
            : enseignants[type].ECS,
        ECF:
          libelle === dataCategory.ECOLES
            ? ecoles[type].ECF
            : libelle === dataCategory.ELEVES
            ? eleves[type].ECF
            : enseignants[type].ECF,
        Autres:
          libelle === dataCategory.ECOLES
            ? ecoles[type].Autres
            : libelle === dataCategory.ELEVES
            ? eleves[type].Autres
            : enseignants[type].Autres,
        EPR:
          libelle === dataCategory.ECOLES
            ? ecoles[type].EPR
            : libelle === dataCategory.ELEVES
            ? eleves[type].EPR
            : enseignants[type].EPR,
        Total:
          libelle === dataCategory.ECOLES
            ? ecoles[type].Total
            : libelle === dataCategory.ELEVES
            ? eleves[type].Total
            : enseignants[type].Total,
      };
      formatedRows.push(row);
    }
  }

  return formatedRows;
}

type ToFormatSallesActivitesType = {
  bon_etat: {
    nombre_salles: number;
    nombre_salles_type: number;
    pourcentage: number;
  };
  en_dur: {
    nombre_salles: number;
    nombre_salles_type: number;
    pourcentage: number;
  };
  en_paille: {
    nombre_salles: number;
    nombre_salles_type: number;
    pourcentage: number;
  };
  en_semi_dur: {
    nombre_salles: number;
    nombre_salles_type: number;
    pourcentage: number;
  };
  en_terre_battue: {
    nombre_salles: number;
    nombre_salles_type: number;
    pourcentage: number;
  };
};
type FormatedRowSallesActivitesType = {
  type_salle: string;
  nombre_salles: number;
  nombre_salles_type: number;
  pourcentage: number;
};

function getSallesActivitesFormatedRows(
  salles_activites: ToFormatSallesActivitesType
): FormatedRowSallesActivitesType[] {
  const formatedRows: FormatedRowSallesActivitesType[] = [];
  for (const key in salles_activites) {
    if (salles_activites.hasOwnProperty(key)) {
      const salle = salles_activites[key as keyof ToFormatSallesActivitesType];
      formatedRows.push({
        type_salle: key.replace(/_/g, " "),
        nombre_salles: salle.nombre_salles,
        nombre_salles_type: salle.nombre_salles_type,
        pourcentage: salle.pourcentage,
      });
    }
  }
  return formatedRows;
}
