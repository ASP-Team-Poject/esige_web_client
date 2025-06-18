export type MenuRoute = {
  name: string;
  path: string;
  icon: any;
  sub_routes?: MenuRoute[];
};

export type SchoolType = {
  // Fields coming with data
  id: number;
  libelle: string;
  province: string;
  proved: string;
  sousproved: string;
  createdAt: string;

  // Fields Coming without data
  arreteMinisteriel: string;
  matriculeCecope: string;

  // Fields Not coming
  codeEtablissement: string;
  isActive: boolean;
  centreRegId: string;
  villeId: string;
  center: string;
  userId: number;
  slug: string;
  isDeleted: boolean;
  codeAdmin: string;
  prefix: string;
  typeEnseignement: string;
  refEtabMongodb: string;
  refIdenMongodb: string;
  nom: string;
  citeChefferieVillage: string;
  territoireCommuneVille: string;
};

export type LoginCredentials = {
  username: string;
  password: string;
};

export type UserType = {
  // Coming fields with data
  id: number;
  name: string;
  email: string;
  username: string;
  roles: string; // ex.: "[\"ROLE_SOUSPROVED\"]",
  password: string;
  mdp: string;
  sousProvedId: number;
  provedId: number;
  provinceId: number;
  userId: number;
  slug: string;
  isDeleted: boolean;
  active: boolean;
  createdAt: string;

  // Not coming fields
  updatedAt: string;
  about: string;
  firstName: string;
  phone: string;
  territoireId: number;
  pictureId: any;

  // FrontEnd field
  displayName: string;
};

export type SchoolYearType = {
  id: number;
  valid: boolean;
  active: boolean;
  generate: boolean;
  open: boolean;
  libAnneeScolaire: string; // "2022-2023"
};

export type SchoolStType = {
  id: number;
  type: string;
  date: string;
  ids: string;
  nomEtab: string;
  idetablissement: number;
  idUtilisateur: number | null;
  idannee: number;
  sousProvedId: number;
  provedId: number;
  provinceId: number;
  formulaire: {
    province: string;
    proved: string | null;
    sousProved: string | null;
    centreRegroupement: string;
    nomChefEtablissement: string;
    typeEtablissement: string;
    niveauxEnseignement: [];
    capaciteAccueil: string;
    nombreEleves: string;
    nombreEnseignants: string;
    adresse: string;
    telephone: string | null;
    email: string;
    anneeCreation: string;
    infrastructures: [];
    validation: boolean;
    created_at: string;
    adresse_etablissement: string;
    telephone_etablissement: string;
    annee: string;
    ville: string;
    territoire_commune: string;
    village: string;
    province_educationnelle: string;
    code_adm_ets: string;
    code_adm_ets_auto: string;
    regime_gestion: string;
    latitude: string;
    longitude: string;
    altitude: string;
    centre_regroupement: string;
    milieu: string;
    reference_juridique: string;
    matricule_secope: string;
    etat_etablissement: string;
    statut_occupation: string;
    programmes_officiels: string;
    copa: string;
    coges: string;
    locaux_utilises: string;
    point_eau: string;
    sources_energie: string;
    latrines: string;
    cour_recreation: string;
    terrain_jeux: string;
    cloture: string;
    projet_etablissement: string;
    plan_action: string;
    revue_performance: string;
    educateurs_formes: string;
    educateurs_cotes_positifs: string;
    educateurs_inspectes: string;
    chef_formation: string;
    chef_cote_positif: string;
    effectif_garcons_3ans_1ere: number;
    effectif_filles_3ans_1ere: number;
    effectif_garcons_4ans_1ere: number;
    effectif_filles_4ans_1ere: number;
    effectif_garcons_5ans_1ere: number;
    effectif_filles_5ans_1ere: number;
    effectif_garcons_3ans_2eme: number;
    effectif_filles_3ans_2eme: number;
    effectif_garcons_4ans_2eme: number;
    effectif_filles_4ans_2eme: number;
    effectif_garcons_5ans_2eme: number;
    effectif_filles_5ans_2eme: number;
    effectif_garcons_3ans_3eme: number;
    effectif_filles_3ans_3eme: number;
    effectif_garcons_4ans_3eme: number;
    effectif_filles_4ans_3eme: number;
    effectif_garcons_5ans_3eme: number;
    effectif_filles_5ans_3eme: number;
    autochtones_garcons_1ere: number;
    autochtones_filles_1ere: number;
    autochtones_garcons_2eme: number;
    autochtones_filles_2eme: number;
    autochtones_garcons_3eme: number;
    autochtones_filles_3eme: number;
    etrangers_garcons_1ere: number;
    etrangers_filles_1ere: number;
    etrangers_garcons_2eme: number;
    etrangers_filles_2eme: number;
    etrangers_garcons_3eme: number;
    etrangers_filles_3eme: number;
    orphelins_garcons_1ere: number;
    orphelins_filles_1ere: number;
    orphelins_garcons_2eme: number;
    orphelins_filles_2eme: number;
    orphelins_garcons_3eme: number;
    orphelins_filles_3eme: number;
    refugies_garcons_1ere: number;
    refugies_filles_1ere: number;
    refugies_garcons_2eme: number;
    refugies_filles_2eme: number;
    refugies_garcons_3eme: number;
    refugies_filles_3eme: number;
    deplaces_externes_garcons_1ere: number;
    deplaces_externes_filles_1ere: number;
    deplaces_externes_garcons_2eme: number;
    deplaces_externes_filles_2eme: number;
    deplaces_externes_garcons_3eme: number;
    deplaces_externes_filles_3eme: number;
    deplaces_internes_garcons_1ere: number;
    deplaces_internes_filles_1ere: number;
    deplaces_internes_garcons_2eme: number;
    deplaces_internes_filles_2eme: number;
    deplaces_internes_garcons_3eme: number;
    deplaces_internes_filles_3eme: number;
    reintegrants_garcons_1ere: number;
    reintegrants_filles_1ere: number;
    reintegrants_garcons_2eme: number;
    reintegrants_filles_2eme: number;
    reintegrants_garcons_3eme: number;
    reintegrants_filles_3eme: number;
    handicaps_garcons_1ere: number;
    handicaps_filles_1ere: number;
    handicaps_garcons_2eme: number;
    handicaps_filles_2eme: number;
    handicaps_garcons_3eme: number;
    handicaps_filles_3eme: number;
    enseignants_d4_hommes_1ere: number;
    enseignants_d4_femmes_1ere: number;
    enseignants_d4_hommes_2eme: number;
    enseignants_d4_femmes_2eme: number;
    enseignants_d4_hommes_3eme: number;
    enseignants_d4_femmes_3eme: number;
    enseignants_em_hommes_1ere: number;
    enseignants_em_femmes_1ere: number;
    enseignants_em_hommes_2eme: number;
    enseignants_em_femmes_2eme: number;
    enseignants_em_hommes_3eme: number;
    enseignants_em_femmes_3eme: number;
    enseignants_d4p_hommes_1ere: number;
    enseignants_d4p_femmes_1ere: number;
    enseignants_d4p_hommes_2eme: number;
    enseignants_d4p_femmes_2eme: number;
    enseignants_d4p_hommes_3eme: number;
    enseignants_d4p_femmes_3eme: number;
    enseignants_p6_hommes_1ere: number;
    enseignants_p6_femmes_1ere: number;
    enseignants_p6_hommes_2eme: number;
    enseignants_p6_femmes_2eme: number;
    enseignants_p6_hommes_3eme: number;
    enseignants_p6_femmes_3eme: number;
    enseignants_d6_hommes_1ere: number;
    enseignants_d6_femmes_1ere: number;
    enseignants_d6_hommes_2eme: number;
    enseignants_d6_femmes_2eme: number;
    enseignants_d6_hommes_3eme: number;
    enseignants_d6_femmes_3eme: number;
    enseignants_autres_hommes_1ere: number;
    enseignants_autres_femmes_1ere: number;
    enseignants_autres_hommes_2eme: number;
    enseignants_autres_femmes_2eme: number;
    enseignants_autres_hommes_3eme: number;
    enseignants_autres_femmes_3eme: number;
    personnel_eligible_retraite: number;
    vih_sida_enseigne: boolean;
    vih_sida_programme: boolean;
    vih_sida_discipline: boolean;
    vih_sida_active_parascolaire: boolean;
    sante_reproductive_enseigne: boolean;
    sante_reproductive_programme: boolean;
    sante_reproductive_parascolaire: boolean;
    sante_reproductive_discipline: boolean;
    sensibilisation_abus_enseigne: boolean;
    sensibilisation_abus_programme: boolean;
    sensibilisation_abus_discipline: boolean;
    sensibilisation_abus_parascolaire: boolean;
    education_environnementale_enseigne: boolean;
    education_environnementale_programme: boolean;
    education_environnementale_discipline: boolean;
    education_environnementale_parascolaire: boolean;
    reglement_securite_physique: boolean;
    reglement_discrimination: boolean;
    reglement_harcelement: boolean;
    cellule_orientation_evf: boolean;
    enseignants_evf_formes: boolean;
    nb_enseignants_evf: number;
    nb_enseignants_forme_h: number;
    nb_enseignants_forme_f: number;
    nb_enseignants_evf_dispense_h: number;
    nb_enseignants_evf_dispense_f: number;
    d4_directeur_h: number;
    d4_directeur_f: number;
    d4_directeur_adjoint_h: number;
    d4_directeur_adjoint_f: number;
    d4_surveillant_h: number;
    d4_surveillant_f: number;
    d4_ouvrier_h: number;
    d4_ouvrier_f: number;
    em_directeur_h: number;
    em_directeur_f: number;
    em_directeur_adjoint_h: number;
    em_directeur_adjoint_f: number;
    em_surveillant_h: number;
    em_surveillant_f: number;
    em_ouvrier_h: number;
    em_ouvrier_f: number;
    d4p_directeur_h: number;
    d4p_directeur_f: number;
    d4p_directeur_adjoint_h: number;
    d4p_directeur_adjoint_f: number;
    d4p_surveillant_h: number;
    d4p_surveillant_f: number;
    d4p_ouvrier_h: number;
    d4p_ouvrier_f: number;
    p6_directeur_h: number;
    p6_directeur_f: number;
    p6_directeur_adjoint_h: number;
    p6_directeur_adjoint_f: number;
    p6_surveillant_h: number;
    p6_surveillant_f: number;
    p6_ouvrier_h: number;
    p6_ouvrier_f: number;
    d6_directeur_h: number;
    d6_directeur_f: number;
    d6_directeur_adjoint_h: number;
    d6_directeur_adjoint_f: number;
    d6_surveillant_h: number;
    d6_surveillant_f: number;
    d6_ouvrier_h: number;
    d6_ouvrier_f: number;
    autres_directeur_h: number;
    autres_directeur_f: number;
    autres_directeur_adjoint_h: number;
    autres_directeur_adjoint_f: number;
    autres_surveillant_h: number;
    autres_surveillant_f: number;
    autres_ouvrier_h: number;
    autres_ouvrier_f: number;
    manuels_français_1ere: number;
    manuels_français_2eme: number;
    manuels_français_3eme: number;
    manuels_comptage_1ere: number;
    manuels_comptage_2eme: number;
    manuels_comptage_3eme: number;
    guides_français_1ere: number;
    guides_français_2eme: number;
    guides_français_3eme: number;
    salle_activites_dur_bon: number;
    salle_activites_dur_mauvais: number;
    salle_repos_dur_bon: number;
    salle_repos_dur_mauvais: number;
    salle_jeux_dur_bon: number;
    salle_jeux_dur_mauvais: number;
    salle_attente_dur_bon: number;
    salle_attente_dur_mauvais: number;
    bureau_dur_bon: number;
    bureau_dur_mauvais: number;
    magasin_dur_bon: number;
    magasin_dur_mauvais: number;
    nb_salles_autorisees_1ere: number;
    nb_salles_organisees_1ere: number;
    nb_salles_autorisees_2eme: number;
    nb_salles_organisees_2eme: number;
    nb_salles_autorisees_3eme: number;
    nb_salles_organisees_3eme: number;
    // Added ones
    copa_est_operationnel: string;
    nb_femme_copa: number;
    coges_est_operationnel: string;
    nb_reunion_avec_pv_annee_passee: number;
    nb_reunion_rapport_g_annee_passee: number;
    type_point_eau: string;
    type_sources_energie: string;
    nb_compartiment_latrines: number;
    nb_compartiment_latrines_pour_filles: number;
    prise_encharge_programme_refugie: string;
    organisment_programme_refugie: string;
    previsions_budgetaires: string;
    tableau_bord: string;
    nb_garcon_violence_intimidation: number;
    nb_fille_violence_intimidation: number;
    nb_garcon_violence_chatiment: number;
    nb_fille_violence_chatiment: number;
    nb_garcon_violence_harcelement: number;
    nb_fille_violence_harcelement: number;
    nb_garcon_violence_discrimination: number;
    nb_fille_violence_discrimination: number;
    nb_garcon_violence_abus_sexuel: number;
    nb_fille_violence_abus_sexuel: number;
    nb_garcon_violence_autres: number;
    nb_fille_violence_autres: number;
    nombre_visites_inspection: number;
    nb_reunion_avec_pv_annee_passee2: number;
  };
};

export type AnnuaireType = {
  annee: {
    idannee: number;
    lib_annee: string;
  };
  province: {
    provinceID: number;
    lib_province: string;
  };
  proved: {
    provedId: number;
    lib_proved: string;
  };
  sousProved: {
    sousProved: number;
    lib_sousProved: string;
  };
  annuaire: {
    couverture_du_recensement: {
      tableau1_taux_couverture_niveau_enseignement_selon_province: {
        sousProved: string;
        niveaux: {
          niveau: string;
          ecole_existante: number;
          ecole_ayant_repondu: number;
          taux_de_reponse: number;
        }[];
      }[];
      tableau2_coefficient_redressement_province_niveau_enseignement: {
        sousProved: {
          nom: string;
          coefficients: {
            pre_primaire: number;
            primaire: number;
            secondaire: number;
          };
        };
      };
      tableau3_tableau_synoptique_statistiques_scolaires_recoltees: {
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
    };
    enseignement_maternel: {
      proportion_salles_activites: {
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
    };
    enseignement_primaire: {
      proportion_salles_activites: {
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
    };
    enseignement_secondaire: {
      proportion_salles_activites: {
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
    };
  };
  taux_couverture_resume: {
    taux_couverture_globale_republic: number;
    taux_couverture_globale_province: number;
    taux_couverture_globale_proved: number;
    taux_couverture_globale_sousProved: number;
  };
};

export type SousProvedType = {
  id: number;
  fkTerritoireId: number;
  fkProvedId: number;
  libelle: string;
  lieuImplantation: string;
  slug: string;
  createdAt: string;
  territoire: {
    id: number;
    libelle: string;
    slug: string;
  };
};

export type ProvedType = {
  proved: {
    id: number;
    fkProvinceId: number;
    libelle: string;
  };
  sousProved: SousProvedType[];
};

export type ProvinceType = {
  id: number;
  libelle: string;
  chefLieu: string;
  slug: string;
  createdAt: string;
  isDeleted: false;
};

export type SchoolRegion = {
  province: ProvinceType;
  proveds: ProvedType[];
};

export type AnnuaireTableType = {
  title: string;
  columns: string[];
  fields: string[];
  rows: any[];
};
