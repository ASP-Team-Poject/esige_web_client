"use client";

import { localStoragekeys } from "@/util/constants";
import React, { ReactNode, useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import { SchoolStType, SchoolType, SchoolYearType } from "@/util/types";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Button from "../basic/Button";
import { Download, Save } from "lucide-react";
import Loader from "../basic/Loader";
import Input2 from "../basic/Input2";
import Pagination from "../basic/Pagination";
import InputRadio from "../basic/InputRadio";

const St2Form = () => {
  const [formData, setFormData] = useState<SchoolStType>({
    id: 0,
    type: "",
    date: "",
    ids: "",
    nomEtab: "",
    idetablissement: 0,
    idUtilisateur: null,
    idannee: 0,
    sousProvedId: 0,
    provedId: 0,
    provinceId: 0,
    formulaire: {
      province: "",
      proved: null,
      sousProved: null,
      centreRegroupement: "",
      nomChefEtablissement: "",
      typeEtablissement: "",
      niveauxEnseignement: [],
      capaciteAccueil: "",
      nombreEleves: "",
      nombreEnseignants: "",
      adresse: "",
      telephone: null,
      email: "",
      anneeCreation: "",
      infrastructures: [],
      validation: false,
      created_at: "",
      adresse_etablissement: "",
      telephone_etablissement: "",
      annee: "",
      ville: "",
      territoire_commune: "",
      village: "",
      province_educationnelle: "",
      code_adm_ets: "",
      code_adm_ets_auto: "",
      regime_gestion: "",
      latitude: "",
      longitude: "",
      altitude: "",
      centre_regroupement: "",
      milieu: "",
      reference_juridique: "",
      matricule_secope: "",
      etat_etablissement: "",
      statut_occupation: "",
      programmes_officiels: "",
      copa: "",
      coges: "",
      locaux_utilises: "",
      point_eau: "",
      sources_energie: "",
      latrines: "",
      cour_recreation: "",
      terrain_jeux: "",
      cloture: "",
      projet_etablissement: "",
      plan_action: "",
      revue_performance: "",
      educateurs_formes: "",
      educateurs_cotes_positifs: "",
      educateurs_inspectes: "",
      chef_formation: "",
      chef_cote_positif: "",
      effectif_garcons_3ans_1ere: 0,
      effectif_filles_3ans_1ere: 0,
      effectif_garcons_4ans_1ere: 0,
      effectif_filles_4ans_1ere: 0,
      effectif_garcons_5ans_1ere: 0,
      effectif_filles_5ans_1ere: 0,
      effectif_garcons_3ans_2eme: 0,
      effectif_filles_3ans_2eme: 0,
      effectif_garcons_4ans_2eme: 0,
      effectif_filles_4ans_2eme: 0,
      effectif_garcons_5ans_2eme: 0,
      effectif_filles_5ans_2eme: 0,
      effectif_garcons_3ans_3eme: 0,
      effectif_filles_3ans_3eme: 0,
      effectif_garcons_4ans_3eme: 0,
      effectif_filles_4ans_3eme: 0,
      effectif_garcons_5ans_3eme: 0,
      effectif_filles_5ans_3eme: 0,
      autochtones_garcons_1ere: 0,
      autochtones_filles_1ere: 0,
      autochtones_garcons_2eme: 0,
      autochtones_filles_2eme: 0,
      autochtones_garcons_3eme: 0,
      autochtones_filles_3eme: 0,
      etrangers_garcons_1ere: 0,
      etrangers_filles_1ere: 0,
      etrangers_garcons_2eme: 0,
      etrangers_filles_2eme: 0,
      etrangers_garcons_3eme: 0,
      etrangers_filles_3eme: 0,
      orphelins_garcons_1ere: 0,
      orphelins_filles_1ere: 0,
      orphelins_garcons_2eme: 0,
      orphelins_filles_2eme: 0,
      orphelins_garcons_3eme: 0,
      orphelins_filles_3eme: 0,
      refugies_garcons_1ere: 0,
      refugies_filles_1ere: 0,
      refugies_garcons_2eme: 0,
      refugies_filles_2eme: 0,
      refugies_garcons_3eme: 0,
      refugies_filles_3eme: 0,
      deplaces_externes_garcons_1ere: 0,
      deplaces_externes_filles_1ere: 0,
      deplaces_externes_garcons_2eme: 0,
      deplaces_externes_filles_2eme: 0,
      deplaces_externes_garcons_3eme: 0,
      deplaces_externes_filles_3eme: 0,
      deplaces_internes_garcons_1ere: 0,
      deplaces_internes_filles_1ere: 0,
      deplaces_internes_garcons_2eme: 0,
      deplaces_internes_filles_2eme: 0,
      deplaces_internes_garcons_3eme: 0,
      deplaces_internes_filles_3eme: 0,
      reintegrants_garcons_1ere: 0,
      reintegrants_filles_1ere: 0,
      reintegrants_garcons_2eme: 0,
      reintegrants_filles_2eme: 0,
      reintegrants_garcons_3eme: 0,
      reintegrants_filles_3eme: 0,
      handicaps_garcons_1ere: 0,
      handicaps_filles_1ere: 0,
      handicaps_garcons_2eme: 0,
      handicaps_filles_2eme: 0,
      handicaps_garcons_3eme: 0,
      handicaps_filles_3eme: 0,
      enseignants_d4_hommes_1ere: 0,
      enseignants_d4_femmes_1ere: 0,
      enseignants_d4_hommes_2eme: 0,
      enseignants_d4_femmes_2eme: 0,
      enseignants_d4_hommes_3eme: 0,
      enseignants_d4_femmes_3eme: 0,
      enseignants_em_hommes_1ere: 0,
      enseignants_em_femmes_1ere: 0,
      enseignants_em_hommes_2eme: 0,
      enseignants_em_femmes_2eme: 0,
      enseignants_em_hommes_3eme: 0,
      enseignants_em_femmes_3eme: 0,
      enseignants_d4p_hommes_1ere: 0,
      enseignants_d4p_femmes_1ere: 0,
      enseignants_d4p_hommes_2eme: 0,
      enseignants_d4p_femmes_2eme: 0,
      enseignants_d4p_hommes_3eme: 0,
      enseignants_d4p_femmes_3eme: 0,
      enseignants_p6_hommes_1ere: 0,
      enseignants_p6_femmes_1ere: 0,
      enseignants_p6_hommes_2eme: 0,
      enseignants_p6_femmes_2eme: 0,
      enseignants_p6_hommes_3eme: 0,
      enseignants_p6_femmes_3eme: 0,
      enseignants_d6_hommes_1ere: 0,
      enseignants_d6_femmes_1ere: 0,
      enseignants_d6_hommes_2eme: 0,
      enseignants_d6_femmes_2eme: 0,
      enseignants_d6_hommes_3eme: 0,
      enseignants_d6_femmes_3eme: 0,
      enseignants_autres_hommes_1ere: 0,
      enseignants_autres_femmes_1ere: 0,
      enseignants_autres_hommes_2eme: 0,
      enseignants_autres_femmes_2eme: 0,
      enseignants_autres_hommes_3eme: 0,
      enseignants_autres_femmes_3eme: 0,
      personnel_eligible_retraite: 0,
      vih_sida_enseigne: false,
      vih_sida_programme: false,
      vih_sida_discipline: false,
      vih_sida_active_parascolaire: false,
      sante_reproductive_enseigne: false,
      sante_reproductive_programme: false,
      sante_reproductive_parascolaire: false,
      sante_reproductive_discipline: false,
      sensibilisation_abus_enseigne: false,
      sensibilisation_abus_programme: false,
      sensibilisation_abus_discipline: false,
      sensibilisation_abus_parascolaire: false,
      education_environnementale_enseigne: false,
      education_environnementale_programme: false,
      education_environnementale_discipline: false,
      education_environnementale_parascolaire: false,
      reglement_securite_physique: false,
      reglement_discrimination: false,
      reglement_harcelement: false,
      cellule_orientation_evf: false,
      enseignants_evf_formes: false,
      nb_enseignants_evf: 0,
      nb_enseignants_forme_h: 0,
      nb_enseignants_forme_f: 0,
      nb_enseignants_evf_dispense_h: 0,
      nb_enseignants_evf_dispense_f: 0,
      d4_directeur_h: 0,
      d4_directeur_f: 0,
      d4_directeur_adjoint_h: 0,
      d4_directeur_adjoint_f: 0,
      d4_surveillant_h: 0,
      d4_surveillant_f: 0,
      d4_ouvrier_h: 0,
      d4_ouvrier_f: 0,
      em_directeur_h: 0,
      em_directeur_f: 0,
      em_directeur_adjoint_h: 0,
      em_directeur_adjoint_f: 0,
      em_surveillant_h: 0,
      em_surveillant_f: 0,
      em_ouvrier_h: 0,
      em_ouvrier_f: 0,
      d4p_directeur_h: 0,
      d4p_directeur_f: 0,
      d4p_directeur_adjoint_h: 0,
      d4p_directeur_adjoint_f: 0,
      d4p_surveillant_h: 0,
      d4p_surveillant_f: 0,
      d4p_ouvrier_h: 0,
      d4p_ouvrier_f: 0,
      p6_directeur_h: 0,
      p6_directeur_f: 0,
      p6_directeur_adjoint_h: 0,
      p6_directeur_adjoint_f: 0,
      p6_surveillant_h: 0,
      p6_surveillant_f: 0,
      p6_ouvrier_h: 0,
      p6_ouvrier_f: 0,
      d6_directeur_h: 0,
      d6_directeur_f: 0,
      d6_directeur_adjoint_h: 0,
      d6_directeur_adjoint_f: 0,
      d6_surveillant_h: 0,
      d6_surveillant_f: 0,
      d6_ouvrier_h: 0,
      d6_ouvrier_f: 0,
      autres_directeur_h: 0,
      autres_directeur_f: 0,
      autres_directeur_adjoint_h: 0,
      autres_directeur_adjoint_f: 0,
      autres_surveillant_h: 0,
      autres_surveillant_f: 0,
      autres_ouvrier_h: 0,
      autres_ouvrier_f: 0,
      manuels_français_1ere: 0,
      manuels_français_2eme: 0,
      manuels_français_3eme: 0,
      manuels_comptage_1ere: 0,
      manuels_comptage_2eme: 0,
      manuels_comptage_3eme: 0,
      guides_français_1ere: 0,
      guides_français_2eme: 0,
      guides_français_3eme: 0,
      salle_activites_dur_bon: 0,
      salle_activites_dur_mauvais: 0,
      salle_repos_dur_bon: 0,
      salle_repos_dur_mauvais: 0,
      salle_jeux_dur_bon: 0,
      salle_jeux_dur_mauvais: 0,
      salle_attente_dur_bon: 0,
      salle_attente_dur_mauvais: 0,
      bureau_dur_bon: 0,
      bureau_dur_mauvais: 0,
      magasin_dur_bon: 0,
      magasin_dur_mauvais: 0,
      nb_salles_autorisees_1ere: 0,
      nb_salles_organisees_1ere: 0,
      nb_salles_autorisees_2eme: 0,
      nb_salles_organisees_2eme: 0,
      nb_salles_autorisees_3eme: 0,
      nb_salles_organisees_3eme: 0,

      copa_est_operationnel: "",
      nb_femme_copa: 0,
      coges_est_operationnel: "",
      nb_reunion_avec_pv_annee_passee: 0,
      nb_reunion_rapport_g_annee_passee: 0,
      type_point_eau: "",
      type_sources_energie: "",
      nb_compartiment_latrines: 0,
      nb_compartiment_latrines_pour_filles: 0,
      prise_encharge_programme_refugie: "",
      organisment_programme_refugie: "",
    },
  });
  // end model

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  const [formTitleData, setFormTitleData] = useState<{
    schoolName: string;
    yearLabel: string;
  }>({ schoolName: "", yearLabel: "" });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const keys = name.split(".");

    setFormData((prevState: any) => {
      if (keys.length === 1) {
        return {
          ...prevState,
          [name]: value,
        };
      } else {
        return {
          ...prevState,
          [keys[0]]: {
            ...prevState[keys[0]],
            [keys[1]]: value,
          },
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log(formData);
  };

  useEffect(() => {
    const currentSchoolYear: SchoolYearType = JSON.parse(
      localStorage.getItem(localStoragekeys.CURRENT_SCHOOL_YEAR)!
    );
    let schoolName = "";
    const yearLabel = currentSchoolYear.libAnneeScolaire;
    const schoolSt = localStorage.getItem(localStoragekeys.CURRENT_SCHOOL_ST);
    if (schoolSt) {
      const currentSchoolSt: SchoolStType = JSON.parse(schoolSt);
      schoolName = currentSchoolSt.nomEtab;
      setFormData(currentSchoolSt);
    } else {
      const currentSchool: SchoolType = JSON.parse(
        localStorage.getItem(localStoragekeys.CURRENT_SCHOOL)!
      );
      schoolName = currentSchool.libelle || currentSchool.nom;
    }

    setFormTitleData({ schoolName, yearLabel });
  }, []);

  const handleDownloadPdf = async () => {
    if (isGeneratingPdf) {
      const element = document.getElementById("pdf-content");
      if (!element) return;

      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(
        `st2_${formTitleData.schoolName}_${formTitleData.yearLabel}.pdf`
      );
      setIsGeneratingPdf(false);
    }
  };

  const handleGoPreviousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const totalPages = 6; // update this according to the number of page in the current ST Form
  const handleGoNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  useEffect(() => {
    handleDownloadPdf();
  }, [isGeneratingPdf]);

  const FormPages: ReactNode[] = [
    <div key={1} className="flex flex-col gap-4">
      <section className="flex flex-col gap-2">
        <label className="font-bold">
          {"1. IDENTIFICATION DE L'ETABLISSEMENT"}
        </label>

        <Input2
          placeholder="Nom Etablissement"
          value={formData.nomEtab}
          handleChange={handleChange}
          label="1.1. Nom de l'établissement "
          name="nomEtab"
        />
        <div className="flex gap-2 items-center">
          <label htmlFor="adresse" className="whitespace-nowrap">
            {"1.2. Adresse de l'établissement"}
          </label>
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            id="adresse"
            name="formulaire.adresse"
            value={formData.formulaire.adresse}
            onChange={handleChange}
            placeholder="Adresse"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="phone" className="whitespace-nowrap">
            {"1.4. Téléphone de chef Ets"}
          </label>
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            id="phone"
            name="formulaire.telephone"
            value={
              formData.formulaire.telephone ||
              formData.formulaire.telephone_etablissement ||
              ""
            }
            onChange={handleChange}
            placeholder="Téléphone"
          />
          <label htmlFor="annee" className="whitespace-nowrap">
            {"1.12 Année"}
          </label>
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            id="annee"
            name="formulaire.annee"
            value={formData.formulaire.annee || formTitleData.yearLabel}
            onChange={handleChange}
            placeholder="Année"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label className="self-center underline">
              {"Localisation administrative"}
            </label>

            <div className="flex gap-2 items-center">
              <label htmlFor="provinceId" className="whitespace-nowrap">
                {"1.5. Province"}
              </label>
              <input
                className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                type="number"
                name="provinceId"
                id="provinceId"
                value={formData.provinceId}
                onChange={handleChange}
                placeholder="Province ID"
              />
            </div>

            <div className="flex gap-2 items-center">
              <label htmlFor="formulaire.ville" className="whitespace-nowrap">
                {"1.6. Ville"}
              </label>
              <input
                className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                type="text"
                name="formulaire.ville"
                id="formulaire.ville"
                value={formData.formulaire.ville}
                onChange={handleChange}
                placeholder="Ville"
              />
            </div>

            <div className="flex gap-2 items-center">
              <label
                htmlFor="formulaire.territoire_commune"
                className="whitespace-nowrap"
              >
                {"1.7. Territoire ou commune"}
              </label>
              <input
                className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                type="text"
                name="formulaire.territoire_commune"
                id="formulaire.territoire_commune"
                value={formData.formulaire.territoire_commune}
                onChange={handleChange}
                placeholder="Territoire Commune"
              />
            </div>

            <div className="flex gap-2 items-center">
              <label htmlFor="formulaire.village" className="whitespace-nowrap">
                {"1.8. Village"}
              </label>
              <input
                className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                type="text"
                name="formulaire.village"
                id="formulaire.village"
                value={formData.formulaire.village}
                onChange={handleChange}
                placeholder="Village"
              />
            </div>

            <div className="flex gap-2 items-center">
              <label htmlFor="provedId" className="whitespace-nowrap">
                {"1.9. Province éducationnelle"}
              </label>
              <input
                className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                type="number"
                name="provedId"
                id="provedId"
                value={formData.provedId}
                onChange={handleChange}
                placeholder="Proved ID"
              />
            </div>

            <div className="flex gap-2 items-center">
              <label htmlFor="sousProvedId" className="whitespace-nowrap">
                {"1.10. Sous-division"}
              </label>
              <input
                className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                type="number"
                name="sousProvedId"
                id="sousProvedId"
                value={formData.sousProvedId}
                onChange={handleChange}
                placeholder="Sous Proved ID"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 border-[2px] border-[#555] p-2">
            <label className="self-center underline">
              {"Localisation scolaire"}
            </label>

            <div className="flex flex-col gap-2">
              <label className="whitespace-nowrap">
                {"1.13. Coordonnées géographiques :"}
              </label>
              <ul className="self-end">
                <li className="flex gap-2">
                  <label
                    htmlFor="formulaire.latitude"
                    className="whitespace-nowrap"
                  >
                    Latitude :{" "}
                  </label>
                  <input
                    className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                    type="text"
                    name="formulaire.latitude"
                    id="formulaire.latitude"
                    value={formData.formulaire.latitude}
                    onChange={handleChange}
                    placeholder="latitude"
                  />
                </li>
                <li className="flex gap-2">
                  <label
                    htmlFor="formulaire.longitude"
                    className="whitespace-nowrap"
                  >
                    Longitude :{" "}
                  </label>
                  <input
                    className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                    type="text"
                    name="formulaire.longitude"
                    id="formulaire.longitude"
                    value={formData.formulaire.longitude}
                    onChange={handleChange}
                    placeholder="longitude"
                  />
                </li>
                <li className="flex gap-2">
                  <label
                    htmlFor="formulaire.altitude"
                    className="whitespace-nowrap"
                  >
                    Altitude :{" "}
                  </label>
                  <input
                    className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                    type="text"
                    name="formulaire.altitude"
                    id="formulaire.altitude"
                    value={formData.formulaire.altitude}
                    onChange={handleChange}
                    placeholder="altitude"
                  />
                </li>
              </ul>
            </div>

            <div className="flex gap-2 items-center">
              <label
                htmlFor="formulaire.centreRegroupement"
                className="whitespace-nowrap"
              >
                {"1.14. Centre de regroupement"}
              </label>
              <input
                className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                type="text"
                name="formulaire.centreRegroupement"
                id="formulaire.centreRegroupement"
                value={formData.formulaire.centreRegroupement}
                onChange={handleChange}
                placeholder="centreRegroupement"
              />
            </div>

            <InputRadio
              label={"1.15. Milieu"}
              name="formulaire.milieu"
              currentValue={formData.formulaire.milieu}
              allValues={["Rural", "Urbain"]}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <label
            htmlFor="formulaire.code_adm_ets"
            className="whitespace-nowrap"
          >
            {"1.11. Code Adm. Ets. "}
          </label>
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.code_adm_ets"
            id="formulaire.code_adm_ets"
            value={formData.formulaire.code_adm_ets}
            onChange={handleChange}
            placeholder="Code ADM ETS"
            disabled={true}
          />
          <label className="lg:whitespace-nowrap">
            {"(ce code se génère automatiquement dans esigerdc)"}
          </label>
        </div>

        <InputRadio
          label={"1.16. Régime de gestion"}
          name="formulaire.regime_gestion"
          currentValue={formData.formulaire.regime_gestion}
          allValues={[
            "Non conventionne (ENC)",
            "Catholique",
            "Protestant",
            "Kimbanguiste",
            "Kimbanguiste (ECK)",
            "Islamique (ECI)",
            "Salutiste (ECS)",
            "Fraternité (ECF)",
            "Privée (EPR)",
            "Autres",
          ]}
          handleChange={handleChange}
        />

        <div className="flex gap-2 items-center">
          <label
            htmlFor="formulaire.reference_juridique"
            className="whitespace-nowrap"
          >
            {"1.17. Référence juridique (arrêté d'agrément/d'autorisation):"}
          </label>
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.reference_juridique"
            id="formulaire.reference_juridique"
            value={formData.formulaire.reference_juridique}
            onChange={handleChange}
            placeholder="reference juridique"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label
            htmlFor="formulaire.reference_juridique"
            className="whitespace-nowrap"
          >
            {"1.18 N° Matricule SECOPE"}
          </label>
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.matricule_secope"
            id="formulaire.matricule_secope"
            value={formData.formulaire.matricule_secope}
            onChange={handleChange}
            placeholder="matricule secope"
          />
        </div>

        <InputRadio
          label={"1.19. L'établissement est"}
          name="formulaire.etat_etablissement"
          currentValue={formData.formulaire.etat_etablissement}
          allValues={["Mécanisé et payé", "Mécanisé et non payé"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"1.20. Statut d'occupation parcellaire "}
          name="formulaire.statut_occupation"
          currentValue={formData.formulaire.statut_occupation}
          allValues={["Propriétaire", "Co-Propriétaire", "Locataire"]}
          handleChange={handleChange}
        />
      </section>

      <section className="flex flex-col gap-2">
        <label className="font-bold">
          {"2. INFORMATIONS GENERALES SUR L'ETABLISSEMENT"}
        </label>
        <label>
          {"L'établissement dispose-t-il: (cocher la case correspondante)"}
        </label>

        <InputRadio
          label={"2.1. Des programmes officiels de cours ?"}
          name="formulaire.statut_occupation"
          currentValue={formData.formulaire.programmes_officiels}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.2. D'un Copa ?"}
          name="formulaire.copa"
          currentValue={formData.formulaire.copa}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={
            "2.3. Si oui, le COPA est-il opérationnel dans votre établissement ?"
          }
          name="formulaire.copa_est_operationnel"
          currentValue={formData.formulaire.copa_est_operationnel}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <Input2
          type="number"
          handleChange={handleChange}
          value={formData.formulaire.nb_reunion_avec_pv_annee_passee}
          name="formData.formulaire.nb_reunion_avec_pv_annee_passee"
          label={
            "2.4. Le nombre de réunions tenues avec les PV l'année passée :"
          }
        />

        <Input2
          handleChange={handleChange}
          value={formData.formulaire.nb_femme_copa}
          name="formData.formulaire.nb_femme_copa"
          label="2.5. Nombre de femmes dans le COPA?"
        />
        <InputRadio
          label={"2.6. D'un Coges ?"}
          name="formulaire.coges"
          currentValue={formData.formulaire.coges}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.7. Si oui, le COGES est-il opérationnel dans votre école ?"}
          name="formulaire.coges_operationnel"
          currentValue={formData.formulaire.coges} // TOCHANGE
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <Input2
          handleChange={handleChange}
          placeholder="réunions tenues avec le rapport de gestion"
          value={formData.formulaire.nombreEleves} // TOCHANGE
          name="formData.formulaire.nb_reunion_rapport_g_annee_passee"
          label="2.8. Donner Le nombre de réunions tenues avec le rapport de gestion l'année précédente"
        />
        <Input2
          handleChange={handleChange}
          placeholder=""
          value={formData.formulaire.nombreEleves} // TOCHANGE
          name="formData.formulaire.nb_femme_coges"
          label="2.9. Nombre de femmes dans le COGES ?"
        />
      </section>
    </div>,

    <div key={2} className="flex flex-col gap-4">
      <section className="flex flex-col gap-2">
        <InputRadio
          label={"2.10. D'un point d'eau ?"}
          name="formulaire.point_eau"
          currentValue={formData.formulaire.point_eau}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />
        <InputRadio
          label={"2.11. Si oui préciser le type en cochant la case appropié ?"}
          name="formulaire.type_point_eau"
          currentValue={formData.formulaire.type_point_eau}
          allValues={["Robinet", "Forage/Puit", "Sources"]}
          handleChange={handleChange}
        />
        <InputRadio
          label={"2.12. De sources d'energie ?"}
          name="formulaire.sources_energie"
          currentValue={formData.formulaire.sources_energie}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />
        <InputRadio
          label={"2.13. Si oui préciser le type sources d'energie ?"}
          name="formulaire.type_sources_energie"
          currentValue={formData.formulaire.type_sources_energie}
          allValues={["Electrique", "Solaire", "Groupe électrogene"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.14. Des Latrines ?"}
          name="formulaire.latrines"
          currentValue={formData.formulaire.latrines}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <div className="flex justify-between">
          <Input2
            handleChange={handleChange}
            value={formData.formulaire.nb_compartiment_latrines}
            name="formData.formulaire.nb_compartiment_latrines"
            label="2.15. Si oui préciser le nombre de compartiment ?"
          />

          <Input2
            handleChange={handleChange}
            value={formData.formulaire.nb_compartiment_latrines_pour_filles}
            name="formData.formulaire.nb_compartiment_latrines_pour_filles"
            label="2.16. Nombre de compartiment pour filles ?"
          />
        </div>

        <InputRadio
          label={"2.17. Une cours de récréation ?"}
          name="formulaire.cour_recreation"
          currentValue={formData.formulaire.cour_recreation}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.18. Un terrain de jeux ?"}
          name="formulaire.terrain_jeux"
          currentValue={formData.formulaire.terrain_jeux}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.19. Une cloture ?"}
          name="formulaire.cloture"
          currentValue={formData.formulaire.cloture}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.20. Si oui, préciser la nature de la cloture ?"}
          name="formulaire.cloture"
          currentValue={formData.formulaire.cloture}
          allValues={["En dur", "En semi dur", "En haie", "Autres"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={
            "2.21. Votre établissement est-il pris en charge par le programme de refugiés ?"
          }
          name="formulaire.prise_encharge_programme_refugie"
          currentValue={formData.formulaire.prise_encharge_programme_refugie}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />
        <Input2
          handleChange={handleChange}
          value={formData.formulaire.organisment_programme_refugie}
          name="formData.formulaire.organisment_programme_refugie"
          label="2.22. Si oui, par quel organisment ?"
        />
      </section>
    </div>,
  ];

  return (
    <div className="flex flex-col">
      {isGeneratingPdf ? (
        <Loader colorClass="text-primary_color" />
      ) : (
        <Button
          onClick={() => setIsGeneratingPdf(true)}
          title="Télécharger le pdf"
          icon={<Download />}
          type="button"
          className="bg-red-500 self-end"
        />
      )}
      <PageContentWrapper
        className="[box-shadow:0px_0px_4px_gray]"
        id="pdf-content"
        pageTitle={``}
      >
        {currentPage === 0 ? <FormHeader /> : ""}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="hidden"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="ID"
          />

          {FormPages[currentPage]}

          {isGeneratingPdf ? (
            ""
          ) : (
            <div className="flex justify-between">
              <Pagination
                totalPages={totalPages}
                page={currentPage}
                handleGoNextPage={handleGoNextPage}
                handleGoPreviousPage={handleGoPreviousPage}
              />
              <Button
                className="bg-primary_color self-end"
                type="submit"
                title="Enregistrer"
                icon={<Save />}
              />
            </div>
          )}
        </form>
      </PageContentWrapper>
      ,
    </div>
  );
};

const FormHeader = () => {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex flex-col items-center border-[2px] border-[#555] p-2">
        <label>{"République Démocratique du Congo"}</label>
        <label className="font-bold">
          {"Ministère de l'Enseignement Primaire,"}
        </label>
        <label className="font-bold">{"Secondaire et Technique"}</label>
        <label className="font-bold">{"Secrétariat Général de l'EPST"}</label>
        <label className="font-bold">
          {"Direction de l'Information pour la Gestion"}
        </label>
        <label className="font-bold">{"de l'Education (DIGE)"}</label>
        <label>{"Avenue de la Science n°7 BP 32 Kinshasa-Gombe"}</label>
      </div>
      <div className="flex flex-col border-[2px] border-[#555] h-fit items-center">
        <div className="flex flex-col items-center border-b-[2px] border-[#555] w-full p-2">
          <label>{"Enseignement"}</label>
          <label className="font-bold">{"Préscolaire"}</label>
        </div>

        <div className="flex flex-col items-center w-full p-2">
          <label className="font-bold">{"ST2"}</label>
          <label className="font-bold">{"SIGE - RDC"}</label>
          <label>{"Pour la Gestion et le Pilotage du Système éducatif"}</label>
        </div>
      </div>
    </div>
  );
};

export default St2Form;
