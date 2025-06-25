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
  provinceId: number;
  provedId: number;
  sousProvedId: number;
  anneeId: number;
  codeCentreReg: string;
  nomCentreReg: string;
  center: string;
  userId: number;
  isDeleted: boolean;
  codeAdmin: string;
  typeEnseignement: string;
  refEtabMongodb: string;
  createdAt: string;

  // Fields Coming without data
  arreteMinisteriel: string;
  matriculeCecope: string;

  // Fields Not coming
  codeEtablissement: string;
  isActive: boolean;
  centreRegId: string;
  villeId: string;
  refIdenMongodb: string;
  slug: string;
  prefix: string;
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
  libAnneeScolaire: string;
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

  formulaire: Partial<AllStFormType>;
};

type AllStFormType = {
  // st1 fields
  rap_organisee: string;
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
  copa: string;
  coges_operationnel: string;
  reunions_pv: number;
  reunions_rapport: number;
  type_point_eau: string;
  type_sources_energie: string;
  nombre_compartiments: number;
  compartiments_filles: number;
  etablissement_pris_en_charge_programme_refugies: string;
  prevision_budgetaire: string;
  intimidation_g: number;
  intimidation_f: number;
  chatiment_g: number;
  chatiment_f: number;
  harcelement_g: number;
  harcelement_f: number;
  discrimination_g: number;
  discrimination_f: number;
  abus_sexuels_g: number;
  abus_sexuels_f: number;
  autres_violences_g: number;
  autres_violences_f: number;
  nombre_femmes_copa: number;
  nom_organisme: string;
  tableau_bord: string;
  nb_reunion_visite_inspection_annee_passee: number;
  nom_chef_etablissement: string;
  sous_division: string;
  nature_cloture: string;
  manuels_eveil_1ere: number;
  manuels_eveil_3eme: number;
  guides_comptage_1ere: number;
  guides_comptage_2eme: number;
  guides_comptage_3eme: number;
  guides_eveil_1ere: number;
  guides_eveil_2eme: number;
  guides_eveil_3eme: number;
  salle_activites_semidur_bon: number;
  salle_activites_terre_mauvais: number;
  "effectif_garcons_-3ans_1ere": number;
  "effectif_filles_-3ans_1ere": number;
  "effectif_garcons_-3ans_2eme": number;
  "effectif_filles_-3ans_2eme": number;
  "effectif_garcons_-3ans_3eme": number;
  "effectif_filles_-3ans_3eme": number;

  // st1 Missing fileds
  nb_reunion_avec_pv_annee_passee2: number; // in conflict with 2.4
  "enseignants_-d4_hommes_1ere": number;
  "enseignants_-d4_femmes_1ere": number;
  "enseignants_-d4_hommes_2eme": number;
  "enseignants_-d4_femmes_2eme": number;
  "enseignants_-d4_hommes_3eme": number;
  "enseignants_-d4_femmes_3eme": number;

  // st2 fields
  nom_etablissement: string;
  copa_operationnel: string;
  nom_second_etablissement: string;
  st2_internat: true;
  st2_unite_pedagogique: true;
  st2_plan_communication: true;
  st2_pv_reunions: string;
  st2_reseaux_locaux_directeurs: true;
  st2_chef_participe_rld: true;
  st2_coins_dechets: true;
  st2_dispose_arbres: true;
  st2_nombre_arbres_plantés: number;
  st2_enseignants_formes_premiers_soins: number;
  st2_tableaux_bon: number;
  st2_tables_bon: number;
  st2_tables_mauvais: number;
  st2_tableaux_mauvais: number;
  st2_ordinateur_pedagogiques_mauvais: number;
  st2_ordinateur_pedagogiques_bon: number;
  st2_chaises_bon: number;
  st2_photocopieuses_bon: number;
  st2_kits_scientifiques_mauvais: number;
  latrines_endur_bon_etat: number;
  latrines_semi_dur_mauvais_etat: number;
  latrines_terre_battue_bon_etat: number;
  st2_activites_parascolaires: true;
  st2_gouvernement_eleves: true;
  st2_manuel_procedure: true;
  st2_participation_rep: true;
  st2_nombre_arbres_plantes: number;
  st2_femmes_enseignantes_recrutees: number;
  st2_enseignants_formes_genre: number;

  // st3 fields
  nombre_femmes_coges: number;
  st3_pv_reunions: number;
  EffectifEleves7G_Moins12: number;
  EffectifEleves7F_Moins12: number;
  EffectifEleves7G_12: number;
  EffectifEleves7F_12: number;
  EffectifEleves7G_13: number;
  EffectifEleves7F_13: number;
  EffectifEleves7G_14: number;
  EffectifEleves7F_14: number;
  EffectifEleves7G_15: number;
  EffectifEleves7F_15: number;
  EffectifEleves7G_16: number;
  EffectifEleves7F_16: number;
  EffectifEleves7G_17: number;
  EffectifEleves7F_17: number;
  EffectifEleves7G_Plus17: number;
  EffectifEleves7F_Plus17: number;
  EffectifEleves7G_Redoublons: number;
  EffectifEleves7F_Redoublons: number;
  EffectifEleves7G_Autochtone: number;
  EffectifEleves7F_Autochtone: number;
  EffectifEleves7G_Orphelins: number;
  EffectifEleves7F_Orphelins: number;
  EffectifEleves7G_Internat: number;
  EffectifEleves7F_Internat: number;
  EffectifEleves7G_Etrangers: number;
  EffectifEleves7F_Etrangers: number;
  EffectifEleves7G_Refugies: number;
  EffectifEleves7F_Refugies: number;
  EffectifEleves7G_DeplacesInternes: number;
  EffectifEleves7F_DeplacesInternes: number;
  EffectifEleves7G_DeplacesExternes: number;
  EffectifEleves7F_DeplacesExternes: number;
  EffectifEleves7G_ReIntegrant: number;
  EffectifEleves7F_ReIntegrant: number;
  EffectifEleves7G_AvecHandicap: number;
  EffectifEleves7F_AvecHandicap: number;
  EffectifEleves4HG_Moins12: number;
  EffectifEleves4HF_Moins12: number;
  EffectifEleves4HG_12: number;
  EffectifEleves4HF_12: number;
  EffectifEleves4HG_13: number;
  EffectifEleves4HF_13: number;
  EffectifEleves4HG_14: number;
  EffectifEleves4HF_14: number;
  EffectifEleves4HG_15: number;
  EffectifEleves4HF_15: number;
  EffectifEleves4HG_16: number;
  EffectifEleves4HF_16: number;
  EffectifEleves4HG_17: number;
  EffectifEleves4HF_17: number;
  EffectifEleves4HG_Plus17: number;
  EffectifEleves4HF_Plus17: number;
  EffectifEleves4HG_Redoublons: number;
  EffectifEleves4HF_Redoublons: number;
  EffectifEleves4HG_Autochtone: number;
  EffectifEleves4HF_Autochtone: number;
  EffectifEleves4HG_Orphelins: number;
  EffectifEleves4HF_Orphelins: number;
  EffectifEleves4HG_Internat: number;
  EffectifEleves4HF_Internat: number;
  EffectifEleves4HG_Etrangers: number;
  EffectifEleves4HF_Etrangers: number;
  EffectifEleves4HG_Refugies: number;
  EffectifEleves4HF_Refugies: number;
  EffectifEleves4HG_DeplacesInternes: number;
  EffectifEleves4HF_DeplacesInternes: number;
  EffectifEleves4HG_DeplacesExternes: number;
  EffectifEleves4HF_DeplacesExternes: number;
  EffectifEleves4HG_ReIntegrant: number;
  EffectifEleves4HF_ReIntegrant: number;
  EffectifEleves4HG_AvecHandicap: number;
  EffectifEleves4HF_AvecHandicap: number;
  EffectifEleves8G_Moins12: number;
  EffectifEleves8F_Moins12: number;
  EffectifEleves8G_12: number;
  EffectifEleves8F_12: number;
  EffectifEleves8G_13: number;
  EffectifEleves8F_13: number;
  EffectifEleves8G_14: number;
  EffectifEleves8F_14: number;
  EffectifEleves8G_15: number;
  EffectifEleves8F_15: number;
  EffectifEleves8G_16: number;
  EffectifEleves8F_16: number;
  EffectifEleves8G_17: number;
  EffectifEleves8F_17: number;
  EffectifEleves8G_Plus17: number;
  EffectifEleves8F_Plus17: number;
  EffectifEleves8G_Redoublons: number;
  EffectifEleves8F_Redoublons: number;
  EffectifEleves8G_Autochtone: number;
  EffectifEleves8F_Autochtone: number;
  EffectifEleves8G_Orphelins: number;
  EffectifEleves8F_Orphelins: number;
  EffectifEleves8G_Internat: number;
  EffectifEleves8F_Internat: number;
  EffectifEleves8G_Etrangers: number;
  EffectifEleves8F_Etrangers: number;
  EffectifEleves8G_Refugies: number;
  EffectifEleves8F_Refugies: number;
  EffectifEleves8G_DeplacesInternes: number;
  EffectifEleves8F_DeplacesInternes: number;
  EffectifEleves8G_DeplacesExternes: number;
  EffectifEleves8F_DeplacesExternes: number;
  EffectifEleves8G_ReIntegrant: number;
  EffectifEleves8F_ReIntegrant: number;
  EffectifEleves8G_AvecHandicap: number;
  EffectifEleves8F_AvecHandicap: number;
  EffectifEleves1HG_Moins12: number;
  EffectifEleves1HF_Moins12: number;
  EffectifEleves1HG_12: number;
  EffectifEleves1HF_12: number;
  EffectifEleves1HG_13: number;
  EffectifEleves1HF_13: number;
  EffectifEleves1HG_14: number;
  EffectifEleves1HF_14: number;
  EffectifEleves1HG_15: number;
  EffectifEleves1HF_15: number;
  EffectifEleves1HG_16: number;
  EffectifEleves1HF_16: number;
  EffectifEleves1HG_17: number;
  EffectifEleves1HF_17: number;
  EffectifEleves1HG_Plus17: number;
  EffectifEleves1HF_Plus17: number;
  EffectifEleves1HG_Redoublons: number;
  EffectifEleves1HF_Redoublons: number;
  EffectifEleves1HG_Autochtone: number;
  EffectifEleves1HF_Autochtone: number;
  EffectifEleves1HG_Orphelins: number;
  EffectifEleves1HF_Orphelins: number;
  EffectifEleves1HG_Internat: number;
  EffectifEleves1HF_Internat: number;
  EffectifEleves1HG_Etrangers: number;
  EffectifEleves1HF_Etrangers: number;
  EffectifEleves1HG_Refugies: number;
  EffectifEleves1HF_Refugies: number;
  EffectifEleves1HG_DeplacesInternes: number;
  EffectifEleves1HF_DeplacesInternes: number;
  EffectifEleves1HG_DeplacesExternes: number;
  EffectifEleves1HF_DeplacesExternes: number;
  EffectifEleves1HG_ReIntegrant: number;
  EffectifEleves1HF_ReIntegrant: number;
  EffectifEleves1HG_AvecHandicap: number;
  EffectifEleves1HF_AvecHandicap: number;
  st_3_EnseignementTechnique7NombreClass: number;
  st_3_EnseignementTechnique7G: number;
  st_3_EnseignementTechnique7F: number;
  st_3_EnseignementTechnique7G_Redoublant: number;
  st_3_EnseignementTechnique7F_Redoublant: number;
  st_3_EnseignementTechnique8NombreClass: number;
  st_3_EnseignementTechnique8G: number;
  st_3_EnseignementTechnique8F: number;
  st_3_EnseignementTechnique8G_Redoublant: number;
  st_3_EnseignementTechnique8F_Redoublant: number;
  st_3_EnseignementTechnique1HNombreClass: number;
  st_3_EnseignementTechnique1HG: number;
  st_3_EnseignementTechnique1HF: number;
  st_3_EnseignementTechnique1HG_Redoublant: number;
  st_3_EnseignementTechnique1HF_Redoublant: number;
  st_3_EnseignementTechnique2HNombreClass: number;
  st_3_EnseignementTechnique2HG: number;
  st_3_EnseignementTechnique2HF: number;
  st_3_EnseignementTechnique2HG_Redoublant: number;
  st_3_EnseignementTechnique2HF_Redoublant: number;
  st_3_EnseignementTechnique3HNombreClass: number;
  st_3_EnseignementTechnique3HG: number;
  st_3_EnseignementTechnique3HF: number;
  st_3_EnseignementTechnique3HG_Redoublant: number;
  st_3_EnseignementTechnique3HF_Redoublant: number;
  st_3_EnseignementTechnique4HNombreClass: number;
  st_3_EnseignementTechnique4HG: number;
  st_3_EnseignementTechnique4HF: number;
  st_3_EnseignementTechnique4HG_Redoublant: number;
  st_3_EnseignementTechnique4HF_Redoublant: number;
  st_3_manuel_francais_4eme_H_annee: number;
  st_3_manuel_Mathematique_4eme_H_annee: number;
  st_3_manuel_Sciences_4eme_H_annee: number;
  st_3_manuel_ThemesTransversaux_4eme_H_annee: number;
  st_3_manuel_PourFieliere_4eme_H_annee: number;
  st_3_manuel_PourLapaix_4eme_H_annee: number;
  st_3_manuel_EducationCiviqueMorale_4eme_H_annee: number;
  st_3_manuel_Autre_4eme_H_annee: number;
  st_3_manuel_francais_3eme_H_annee: number;
  st_3_manuel_Mathematique_3eme_H_annee: number;
  st_3_manuel_Sciences_3eme_H_annee: number;
  st_3_manuel_ThemesTransversaux_3eme_H_annee: number;
  st_3_manuel_PourFieliere_3eme_H_annee: number;
  st_3_manuel_PourLapaix_3eme_H_annee: number;
  st_3_manuel_EducationCiviqueMorale_3eme_H_annee: number;
  st_3_manuel_Autre_3eme_H_annee: number;
  st_3_manuel_francais_2eme_H_annee: number;
  st_3_manuel_Mathematique_2eme_H_annee: number;
  st_3_manuel_Sciences_2eme_H_annee: number;
  st_3_manuel_ThemesTransversaux_2eme_H_annee: number;
  st_3_manuel_PourFieliere_2eme_H_annee: number;
  st_3_manuel_PourLapaix_2eme_H_annee: number;
  st_3_manuel_EducationCiviqueMorale_2eme_H_annee: number;
  st_3_manuel_Autre_2eme_H_annee: number;
  filiereList: [];
  resultatsJuryNational: [];
  resultatsList: [
    {
      NomDuFiliere: string;
      ElevesInscritsG: number;
      ElevesInscritsF: number;
      ElevesPresentesG: number;
      ElevesPresentesF: number;
    }
  ];
  equipement: number;
  equipementsExistantList: [
    {
      NomEquipement: string;
      NombreEquipementsBon: number;
      NombreEquipemenstMauvais: number;
    },
    {
      NomEquipement: string;
      NombreEquipementsBon: number;
      NombreEquipemenstMauvais: number;
    },
    {
      NomEquipement: string;
      NombreEquipementsBon: number;
      NombreEquipemenstMauvais: number;
    },
    {
      NomEquipement: string;
      NombreEquipementsBon: number;
      NombreEquipemenstMauvais: number;
    },
    {
      NomEquipement: string;
      NombreEquipementsBon: number;
      NombreEquipemenstMauvais: number;
    },
    {
      NomEquipement: string;
      NombreEquipementsBon: number;
      NombreEquipemenstMauvais: number;
    }
  ];
  st_3_manuel_francais_7eme_annee: number;
  st_3_manuel_Mathematique_7eme_annee: number;
  st_3_manuel_Sciences_7eme_annee: number;
  st_3_manuel_ThemesTransversaux_7eme_annee: number;
  st_3_manuel_PourFieliere_7eme_annee: number;
  st_3_manuel_PourLapaix_7eme_annee: number;
  st_3_manuel_EducationCiviqueMorale_7eme_annee: number;
  st_3_manuel_Autre_7eme_annee: number;
  st_3_manuel_francais_8eme_annee: number;
  st_3_manuel_Mathematique_8eme_annee: number;
  st_3_manuel_Sciences_8eme_annee: number;
  st_3_manuel_ThemesTransversaux_8eme_annee: number;
  st_3_manuel_PourFieliere_8eme_annee: number;
  st_3_manuel_PourLapaix_8eme_annee: number;
  st_3_manuel_EducationCiviqueMorale_8eme_annee: number;
  st_3_manuel_Autre_8eme_annee: number;
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
