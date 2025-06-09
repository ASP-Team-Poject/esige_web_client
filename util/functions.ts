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
    annuaireData.annuaire.couverture_du_recensement
  );
  const enseignement_maternel_tables = getEnseignementMaternelTables(
    annuaireData.annuaire.enseignement_maternel
  );
  const enseignement_primaire_tables = getEnseignementPrimaireTables(
    annuaireData.annuaire.enseignement_primaire
  );
  const enseignement_secondaire_tables = getEnseignementSecondaireTables(
    annuaireData.annuaire.enseignement_secondaire
  );

  return {
    couverture_du_recensement_tables,
    enseignement_maternel_tables,
    enseignement_primaire_tables,
    enseignement_secondaire_tables,
  };
};

function getCouvertureDuRecensementTables(
  couverture_du_recensement: any
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
  const formatedRows = getFormatedrows(
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

  tables.push(tableau1_taux_couverture_niveau_enseignement);
  tables.push(tableau2_coefficient_redressement_province_niveau_enseignement);
  tables.push(tableau3_tableau_synoptique_statistiques_scolaires_recoltees);

  return tables;
}

function getEnseignementMaternelTables(couverture_du_recensement: any) {
  const tables: AnnuaireTableType[] = [];
  return tables;
}

function getEnseignementPrimaireTables(couverture_du_recensement: any) {
  const tables: AnnuaireTableType[] = [];
  return tables;
}
function getEnseignementSecondaireTables(couverture_du_recensement: any) {
  const tables: AnnuaireTableType[] = [];
  return tables;
}

type ToFormatType = {
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
type FormatedRowType = {
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
function getFormatedrows(data: ToFormatType): FormatedRowType[] {
  const formatedRows: FormatedRowType[] = [];
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
      const row: FormatedRowType = {
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
