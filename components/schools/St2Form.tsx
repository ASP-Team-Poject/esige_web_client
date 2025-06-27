"use client";

import { localStorageKeys } from "@/util/constants";
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
  const [formData, setFormData] = useState<Partial<SchoolStType>>({
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
      nombre_femmes_copa: 0,
      coges_operationnel: "",
      reunions_pv: 0,
      reunions_rapport: 0,
      type_point_eau: "",
      type_sources_energie: "",
      nombre_compartiments: 0,
      compartiments_filles: 0,
      etablissement_pris_en_charge_programme_refugies: "",
      nom_organisme: "",
      prevision_budgetaire: "",
      tableau_bord: "",
      intimidation_g: 0,
      intimidation_f: 0,
      chatiment_g: 0,
      chatiment_f: 0,
      harcelement_g: 0,
      harcelement_f: 0,
      discrimination_g: 0,
      discrimination_f: 0,
      abus_sexuels_g: 0,
      abus_sexuels_f: 0,
      autres_violences_g: 0,
      autres_violences_f: 0,
      nb_reunion_visite_inspection_annee_passee: 0,
      nb_reunion_avec_pv_annee_passee2: 0,
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
          [name]:
            type === "number"
              ? parseInt(value)
              : type === "checkbox"
              ? checked
              : value,
        };
      } else {
        return {
          ...prevState,
          [keys[0]]: {
            ...prevState[keys[0]],
            [keys[1]]:
              type === "number"
                ? parseInt(value)
                : type === "checkbox"
                ? checked
                : value,
          },
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log(formData);

    // redirect to encodings year selection page or to the page after this by using the CURRENT_SCHOOL_YEAR
  };

  useEffect(() => {
    const currentSchoolYear: SchoolYearType = JSON.parse(
      localStorage.getItem(localStorageKeys.CURRENT_SCHOOL_YEAR)!
    );
    let schoolName: string | undefined = "";
    const yearLabel = currentSchoolYear.libAnneeScolaire;
    const schoolSt = localStorage.getItem(localStorageKeys.CURRENT_SCHOOL_ST);
    if (schoolSt) {
      const currentSchoolSt: Partial<SchoolStType> = JSON.parse(schoolSt);
      schoolName =
        currentSchoolSt.formulaire?.nom_etablissement ||
        currentSchoolSt.nomEtab ||
        "";
      if (currentSchoolSt.formulaire?.nom_etablissement) {
        schoolName = currentSchoolSt.formulaire.nom_etablissement;
        setFormData(currentSchoolSt);
      } else {
        schoolName = currentSchoolSt.nomEtab || "";
        setFormData({
          ...currentSchoolSt,
          formulaire: {
            ...currentSchoolSt.formulaire,
            nom_etablissement: schoolName || "",
          },
        });
      }
    } else {
      const currentSchool: SchoolType = JSON.parse(
        localStorage.getItem(localStorageKeys.CURRENT_SCHOOL)!
      );
      schoolName = currentSchool.libelle || currentSchool.nom;
      setFormData({
        ...formData,
        formulaire: {
          ...formData.formulaire,
          nom_etablissement: schoolName || "",
        },
      });
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
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  useEffect(() => {
    handleDownloadPdf();
  }, [isGeneratingPdf]);

  const FormPages: ReactNode[] = [
    // Page 1
    <div key={1} className="flex flex-col gap-4">
      <section className="flex flex-col gap-2">
        <label className="font-bold">
          {"1. IDENTIFICATION DE L'ETABLISSEMENT"}
        </label>

        <Input2
          placeholder="Nom Etablissement"
          value={formData.formulaire?.nom_etablissement || ""}
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
            value={formData.formulaire?.adresse}
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
              formData.formulaire?.telephone ||
              formData.formulaire?.telephone_etablissement ||
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
            value={formData.formulaire?.annee || formTitleData.yearLabel}
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
                value={formData.formulaire?.ville}
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
                value={formData.formulaire?.territoire_commune}
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
                value={formData.formulaire?.village}
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
                    value={formData.formulaire?.latitude}
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
                    value={formData.formulaire?.longitude}
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
                    value={formData.formulaire?.altitude}
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
                value={formData.formulaire?.centreRegroupement}
                onChange={handleChange}
                placeholder="centreRegroupement"
              />
            </div>

            <InputRadio
              label={"1.15. Milieu"}
              name="formulaire.milieu"
              currentValue={formData.formulaire?.milieu}
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
            value={formData.formulaire?.code_adm_ets}
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
          currentValue={formData.formulaire?.regime_gestion}
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
            value={formData.formulaire?.reference_juridique}
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
            value={formData.formulaire?.matricule_secope}
            onChange={handleChange}
            placeholder="matricule secope"
          />
        </div>

        <InputRadio
          label={"1.19. L'établissement est"}
          name="formulaire.etat_etablissement"
          currentValue={formData.formulaire?.etat_etablissement}
          allValues={["Mécanisé et payé", "Mécanisé et non payé"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"1.20. Statut d'occupation parcellaire "}
          name="formulaire.statut_occupation"
          currentValue={formData.formulaire?.statut_occupation}
          allValues={["Propriétaire", "Co-Propriétaire", "Locataire"]}
          handleChange={handleChange}
        />
      </section>

      <section className="flex flex-col gap-2">
        <label className="font-bold">
          {"2. INFORMATIONS GENERALES SUR L'ETABLISSEMENT"}
        </label>
        <ul className="list-disc pl-4 ml-8">
          <li>
            <label>
              {"L'établissement dispose-t-il: (cocher la case correspondante)"}
            </label>
          </li>
        </ul>

        <InputRadio
          label={"2.1. Des programmes officiels de cours ?"}
          name="formulaire.statut_occupation"
          currentValue={formData.formulaire?.programmes_officiels}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.2. D'un Copa ?"}
          name="formulaire.copa"
          currentValue={formData.formulaire?.copa}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={
            "2.3. Si oui, le COPA est-il opérationnel dans votre établissement ?"
          }
          name="formulaire.copa_est_operationnel"
          currentValue={formData.formulaire?.copa}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <Input2
          type="number"
          handleChange={handleChange}
          value={formData.formulaire?.reunions_pv}
          name="formulaire?.nb_reunion_avec_pv_annee_passee"
          label={
            "2.4. Le nombre de réunions tenues avec les PV l'année passée :"
          }
        />

        <InputRadio
          label={"2.5. D'un Coges ?"}
          name="formulaire.coges"
          currentValue={formData.formulaire?.coges}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.6. Si oui, le COGES est-il opérationnel dans votre école ?"}
          name="formulaire.coges_operationnel"
          currentValue={formData.formulaire?.coges_operationnel}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <Input2
          handleChange={handleChange}
          placeholder="réunions tenues avec le rapport de gestion"
          value={formData.formulaire?.reunions_rapport}
          name="formulaire?.reunions_rapport"
          label="2.7. Donner Le nombre de réunions tenues avec le rapport de gestion l'année précédente"
        />
        <InputRadio
          label={
            "2.8. Les locaux sont-ils utilisés par un deuxièment établissement ?"
          }
          name="formulaire.coges_operationnel"
          currentValue={formData.formulaire?.projet_etablissement}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />
        <Input2
          handleChange={handleChange}
          placeholder=""
          value={formData.formulaire?.nom_second_etablissement}
          name="formulaire?.nom_second_etablissement"
          label="2.9. Si oui, préciser le nom du deuxième établissement "
        />
      </section>
    </div>,

    // Page 2
    <div key={2} className="flex flex-col gap-4">
      <section className="flex flex-col gap-2">
        <InputRadio
          label={"2.10. D'un point d'eau ?"}
          name="formulaire.point_eau"
          currentValue={formData.formulaire?.point_eau}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />
        <InputRadio
          label={"2.11. Si oui préciser le type en cochant la case appropié ?"}
          name="formulaire.type_point_eau"
          currentValue={formData.formulaire?.type_point_eau}
          allValues={["Robinet", "Forage/Puit", "Sources"]}
          handleChange={handleChange}
        />
        <InputRadio
          label={"2.12. De sources d'energie ?"}
          name="formulaire.sources_energie"
          currentValue={formData.formulaire?.sources_energie}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />
        <InputRadio
          label={"2.13. Si oui préciser le type sources d'energie ?"}
          name="formulaire.type_sources_energie"
          currentValue={formData.formulaire?.type_sources_energie}
          allValues={["Electrique", "Solaire", "Groupe électrogene"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.14. Des Latrines ?"}
          name="formulaire.latrines"
          currentValue={formData.formulaire?.latrines}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <div className="flex justify-between">
          <Input2
            type="number"
            handleChange={handleChange}
            value={formData.formulaire?.nombre_compartiments}
            name="formulaire?.nb_compartiment_latrines"
            label="2.15. Si oui préciser le nombre de compartiment ?"
          />

          <Input2
            type="number"
            handleChange={handleChange}
            value={formData.formulaire?.compartiments_filles}
            name="formulaire?.nb_compartiment_latrines_pour_filles"
            label="2.16. Nombre de compartiment pour filles ?"
          />
        </div>

        <InputRadio
          label={"2.17. Une cours de récréation ?"}
          name="formulaire.cour_recreation"
          currentValue={formData.formulaire?.cour_recreation}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.18. Un terrain de jeux ?"}
          name="formulaire.terrain_jeux"
          currentValue={formData.formulaire?.terrain_jeux}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.19. Une cloture ?"}
          name="formulaire.cloture"
          currentValue={formData.formulaire?.cloture}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={"2.20. Si oui, préciser la nature de la cloture ?"}
          name="formulaire.nature_cloture"
          currentValue={formData.formulaire?.nature_cloture}
          allValues={["En dur", "En semi dur", "En haie", "Autres"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={
            "2.21. Votre établissement est-il pris en charge par le programme de refugiés ?"
          }
          name="formulaire.etablissement_pris_en_charge_programme_refugies"
          currentValue={
            formData.formulaire?.etablissement_pris_en_charge_programme_refugies
          }
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />
        <Input2
          handleChange={handleChange}
          value={formData.formulaire?.nom_organisme}
          name="formulaire?.nom_organisme"
          label="2.22. Si oui, par quel organisme ?"
        />

        <InputRadio
          label={
            "2.23. Votre établissement a t'il developé un projet d'établissement avec toutes les parties prenantes ?"
          }
          name="formulaire.projet_etablissement"
          currentValue={formData.formulaire?.projet_etablissement}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={
            "2.24. Votre établissement dispose t'il des prévisions budgetaires et des documents comptables ?"
          }
          name="formulaire.prevision_budgetaire"
          currentValue={formData.formulaire?.prevision_budgetaire}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={
            "2.25. Votre établissement dispose t'il d'un plan d'action opérationnel ?"
          }
          name="formulaire.plan_action"
          currentValue={formData.formulaire?.plan_action}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={
            "2.26. Votre établissement a t'il elaborer un Tableau de Bord ?"
          }
          name="formulaire.tableau_bord"
          currentValue={formData.formulaire?.tableau_bord}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label={
            "2.27. Votre établissement a t'il organise une Revue Annuelle de Performance (RAP) ?"
          }
          name="formulaire.rap_organisee"
          currentValue={formData.formulaire?.rap_organisee}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <Input2
          type="number"
          handleChange={handleChange}
          value={formData.formulaire?.educateurs_formes}
          name="formulaire?.educateurs_formes"
          label="2.28. Nombre d'éducateurs de l'établissement qui ont reçu une formation durant les derniers 12 mois "
        />

        <Input2
          type="number"
          handleChange={handleChange}
          value={formData.formulaire?.educateurs_cotes_positifs}
          name="formulaire?.educateurs_cotes_positifs"
          label="2.29. Nombre d'éducateurs cotés positivement(E, TB, B) "
        />

        <Input2
          type="number"
          handleChange={handleChange}
          value={formData.formulaire?.educateurs_inspectes}
          name="formulaire?.educateurs_inspectes"
          label="2.30. Nombre d'éducateurs ayant reçu une inspection pedagogique C3"
        />

        <InputRadio
          label="2.31. Chef d'Etablissement a t'il reçu une formation continue durant 12 derniers mois ?"
          name="formulaire.chef_formation"
          currentValue={formData.formulaire?.chef_formation}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <InputRadio
          label="2.32. Chef d'Etablissement a t'il été coté positivement(Reserve au S/PROVED) ?"
          name="formulaire?.chef_cote_positif"
          currentValue={formData.formulaire?.chef_cote_positif}
          allValues={["Oui", "Non"]}
          handleChange={handleChange}
        />

        <table className="text-left">
          <thead>
            <tr>
              <th colSpan={4} className="text-left">
                {"2.33. Enfants victimes de violences"}
              </th>
            </tr>
            <tr>
              <th>Forme de violence</th>
              <th>G</th>
              <th>F</th>
              <th>G + F</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Intimidation</th>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.intimidation_g"
                  value={formData.formulaire?.intimidation_g}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.intimidation_f"
                  value={formData.formulaire?.intimidation_f}
                />
              </td>
              <td>
                {(formData.formulaire?.intimidation_g || 0) +
                  (formData.formulaire?.intimidation_f || 0)}
              </td>
            </tr>

            <tr>
              <th>Chatiment corporel</th>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.chatiment_g"
                  value={formData.formulaire?.chatiment_g}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.chatiment_f"
                  value={formData.formulaire?.chatiment_f}
                />
              </td>
              <td>
                {(formData.formulaire?.chatiment_g || 0) +
                  (formData.formulaire?.chatiment_f || 0)}
              </td>
            </tr>

            <tr>
              <th>Harcelement</th>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.harcelement_g"
                  value={formData.formulaire?.harcelement_g}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.harcelement_f"
                  value={formData.formulaire?.harcelement_f}
                />
              </td>
              <td>
                {(formData.formulaire?.harcelement_g || 0) +
                  (formData.formulaire?.harcelement_f || 0)}
              </td>
            </tr>

            <tr>
              <th>Discrimination</th>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.discrimination_g"
                  value={formData.formulaire?.discrimination_g}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.discrimination_f"
                  value={formData.formulaire?.discrimination_f}
                />
              </td>
              <td>
                {(formData.formulaire?.discrimination_g || 0) +
                  (formData.formulaire?.discrimination_f || 0)}
              </td>
            </tr>

            <tr>
              <th>Abus sexuel</th>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.abus_sexuels_g"
                  value={formData.formulaire?.abus_sexuels_g}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.abus_sexuels_f"
                  value={formData.formulaire?.abus_sexuels_f}
                />
              </td>
              <td>
                {(formData.formulaire?.abus_sexuels_g || 0) +
                  (formData.formulaire?.abus_sexuels_f || 0)}
              </td>
            </tr>

            <tr>
              <th>Autres</th>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.autres_violences_g"
                  value={formData.formulaire?.autres_violences_g}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.autres_violences_f"
                  value={formData.formulaire?.autres_violences_f}
                />
              </td>
              <td>
                {(formData.formulaire?.autres_violences_g || 0) +
                  (formData.formulaire?.autres_violences_f || 0)}
              </td>
            </tr>
          </tbody>
        </table>

        <label>
          {
            "Note: pour le 2ème Etablissement (sous logé à la question 2.13) ne remplira pas le tableau 8-9-10, sur les"
          }
          <br />
          <Input2
            type="number"
            handleChange={handleChange}
            value={
              formData.formulaire?.nb_reunion_visite_inspection_annee_passee
            }
            name="formulaire?.nb_reunion_visite_inspection_annee_passee"
            label="locaux Nombre de visites d'inspection de l'année passée "
          />
        </label>

        <Input2
          type="number"
          handleChange={handleChange}
          value={formData.formulaire?.nb_reunion_avec_pv_annee_passee2}
          name="formulaire?.nb_reunion_avec_pv_annee_passee2"
          label="Nombre de reunion avec PV tenues l'année passée "
        />
      </section>
    </div>,

    // Page 3
    <div key={3} className="flex flex-col gap-4">
      <label className="font-bold">
        {"III. DONNES SUR LES DIFFERENTS PARAMETRES SCOLAIRES"}
      </label>

      <section className="flex flex-col gap-2">
        <label>
          {"Tableau 1 : Nombre de salles d'activitées autorises et organisées"}
        </label>

        <table className="text-left">
          <thead>
            <tr>
              <th>{"Année d'études"}</th>
              <th>{"Nombre de salles autorisées"}</th>
              <th>{"Nombre de salles"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{"1ère année"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.nb_salles_autorisees_1ere"
                  value={formData.formulaire?.nb_salles_autorisees_1ere}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.nb_salles_organisees_1ere"
                  value={formData.formulaire?.nb_salles_organisees_1ere}
                />
              </td>
            </tr>

            <tr>
              <th>{"2ème année"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.nb_salles_autorisees_2eme"
                  value={formData.formulaire?.nb_salles_autorisees_2eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.nb_salles_organisees_2eme"
                  value={formData.formulaire?.nb_salles_organisees_2eme}
                />
              </td>
            </tr>

            <tr>
              <th>{"3ème année"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.nb_salles_autorisees_3eme"
                  value={formData.formulaire?.nb_salles_autorisees_3eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.nb_salles_organisees_3eme"
                  value={formData.formulaire?.nb_salles_organisees_3eme}
                />
              </td>
            </tr>

            <tr>
              <th className="font-bold text-center">Total</th>
              <td className="text-center">
                {(formData.formulaire?.nb_salles_autorisees_1ere || 0) +
                  (formData.formulaire?.nb_salles_autorisees_2eme || 0) +
                  (formData.formulaire?.nb_salles_autorisees_3eme || 0)}
              </td>
              <td className="text-center">
                {(formData.formulaire?.nb_salles_organisees_1ere || 0) +
                  (formData.formulaire?.nb_salles_organisees_2eme || 0) +
                  (formData.formulaire?.nb_salles_organisees_3eme || 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="flex flex-col gap-2">
        <label>
          {
            "Tableau 2 : effectif des enfants incrits par sexe et année d'études selon l'age révolu"
          }
        </label>

        <table className="text-center">
          <thead>
            <tr>
              <th rowSpan={2}>{"Niveau d'études/Sexe/Age"}</th>
              <th colSpan={3}>{"1ère"}</th>
              <th colSpan={3}>{"2ème"}</th>
              <th colSpan={3}>{"3ème"}</th>
              <th colSpan={3}>{"Total"}</th>
            </tr>
            <tr>
              <th>G</th>
              <th>F</th>
              <th>{"G + F"}</th>

              <th>G</th>
              <th>F</th>
              <th>{"G + F"}</th>

              <th>G</th>
              <th>F</th>
              <th>{"G + F"}</th>

              <th>G</th>
              <th>F</th>
              <th>{"G + F"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{"- 3 "}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_-3ans_1ere"
                  value={formData.formulaire?.["effectif_garcons_-3ans_1ere"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_-3ans_1ere"
                  value={formData.formulaire?.["effectif_filles_-3ans_1ere"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_1ere"] || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_-3ans_2eme"
                  value={formData.formulaire?.["effectif_garcons_-3ans_2eme"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_-3ans_2eme"
                  value={formData.formulaire?.["effectif_filles_-3ans_2eme"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_2eme"] || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_-3ans_3eme"
                  value={formData.formulaire?.["effectif_garcons_-3ans_3eme"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_-3ans_3eme"
                  value={formData.formulaire?.["effectif_filles_-3ans_3eme"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_3eme"] || 0)}
              </td>

              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_-3ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_filles_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_-3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_3eme"] || 0)}
              </td>
            </tr>

            <tr>
              <th>{"3 "}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_3ans_1ere"
                  value={formData.formulaire?.["effectif_garcons_3ans_1ere"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_3ans_1ere"
                  value={formData.formulaire?.["effectif_filles_3ans_1ere"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_1ere"] || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_3ans_2eme"
                  value={formData.formulaire?.["effectif_garcons_3ans_2eme"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_3ans_2eme"
                  value={formData.formulaire?.["effectif_filles_3ans_2eme"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_2eme"] || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_3ans_3eme"
                  value={formData.formulaire?.["effectif_garcons_3ans_3eme"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_3ans_3eme"
                  value={formData.formulaire?.["effectif_filles_3ans_3eme"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_3eme"] || 0)}
              </td>

              <td>
                {(formData.formulaire?.["effectif_garcons_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_filles_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_3eme"] || 0)}
              </td>
            </tr>

            <tr>
              <th>{"4"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_4ans_1ere"
                  value={formData.formulaire?.["effectif_garcons_4ans_1ere"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_4ans_1ere"
                  value={formData.formulaire?.["effectif_filles_4ans_1ere"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_1ere"] || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_4ans_2eme"
                  value={formData.formulaire?.["effectif_garcons_4ans_2eme"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_4ans_2eme"
                  value={formData.formulaire?.["effectif_filles_4ans_2eme"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_2eme"] || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_4ans_3eme"
                  value={formData.formulaire?.["effectif_garcons_4ans_3eme"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_4ans_3eme"
                  value={formData.formulaire?.["effectif_filles_4ans_3eme"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_4ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_3eme"] || 0)}
              </td>

              <td>
                {(formData.formulaire?.["effectif_garcons_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_filles_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_3eme"] || 0)}
              </td>
            </tr>

            <tr>
              <th>{"5"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_5ans_1ere"
                  value={formData.formulaire?.["effectif_garcons_5ans_1ere"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_5ans_1ere"
                  value={formData.formulaire?.["effectif_filles_5ans_1ere"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_5ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_1ere"] || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_5ans_2eme"
                  value={formData.formulaire?.["effectif_garcons_5ans_2eme"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_5ans_2eme"
                  value={formData.formulaire?.["effectif_filles_5ans_2eme"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_5ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_2eme"] || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_garcons_5ans_3eme"
                  value={formData.formulaire?.["effectif_garcons_5ans_3eme"]}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.effectif_filles_5ans_3eme"
                  value={formData.formulaire?.["effectif_filles_5ans_3eme"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_5ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_3eme"] || 0)}
              </td>

              <td>
                {(formData.formulaire?.["effectif_garcons_5ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_filles_5ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_5ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_3eme"] || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Total"}</th>

              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_1ere"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_filles_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_1ere"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_1ere"] || 0)}
              </td>

              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_2eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_filles_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_2eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_2eme"] || 0)}
              </td>

              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_filles_-3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_3eme"] || 0)}
              </td>

              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_-3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_filles_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_3eme"] || 0)}
              </td>
              <td>
                {(formData.formulaire?.["effectif_garcons_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_garcons_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_-3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_4ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_garcons_5ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_1ere"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_2eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_-3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_3ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_4ans_3eme"] || 0) +
                  (formData.formulaire?.["effectif_filles_5ans_3eme"] || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Dont autochtone"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.autochtones_garcons_1ere"
                  value={formData.formulaire?.autochtones_garcons_1ere}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.autochtones_filles_1ere"
                  value={formData.formulaire?.autochtones_filles_1ere}
                />
              </td>
              <td>
                {(formData.formulaire?.autochtones_garcons_1ere || 0) +
                  (formData.formulaire?.autochtones_filles_1ere || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.autochtones_garcons_2eme"
                  value={formData.formulaire?.autochtones_garcons_2eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.autochtones_filles_2eme"
                  value={formData.formulaire?.autochtones_filles_2eme}
                />
              </td>
              <td>
                {(formData.formulaire?.autochtones_garcons_2eme || 0) +
                  (formData.formulaire?.autochtones_filles_2eme || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.autochtones_garcons_3eme"
                  value={formData.formulaire?.autochtones_garcons_3eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.autochtones_filles_3eme"
                  value={formData.formulaire?.autochtones_filles_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.autochtones_garcons_3eme || 0) +
                  (formData.formulaire?.autochtones_filles_3eme || 0)}
              </td>

              <td>
                {(formData.formulaire?.autochtones_garcons_1ere || 0) +
                  (formData.formulaire?.autochtones_garcons_2eme || 0) +
                  (formData.formulaire?.autochtones_garcons_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.autochtones_filles_1ere || 0) +
                  (formData.formulaire?.autochtones_filles_2eme || 0) +
                  (formData.formulaire?.autochtones_filles_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.autochtones_garcons_1ere || 0) +
                  (formData.formulaire?.autochtones_garcons_2eme || 0) +
                  (formData.formulaire?.autochtones_garcons_3eme || 0) +
                  (formData.formulaire?.autochtones_filles_1ere || 0) +
                  (formData.formulaire?.autochtones_filles_2eme || 0) +
                  (formData.formulaire?.autochtones_filles_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Dont étrangers"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.etrangers_garcons_1ere"
                  value={formData.formulaire?.etrangers_garcons_1ere}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.etrangers_filles_1ere"
                  value={formData.formulaire?.etrangers_filles_1ere}
                />
              </td>
              <td>
                {(formData.formulaire?.etrangers_garcons_1ere || 0) +
                  (formData.formulaire?.etrangers_filles_1ere || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.etrangers_garcons_2eme"
                  value={formData.formulaire?.etrangers_garcons_2eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.etrangers_filles_2eme"
                  value={formData.formulaire?.etrangers_filles_2eme}
                />
              </td>
              <td>
                {(formData.formulaire?.etrangers_garcons_2eme || 0) +
                  (formData.formulaire?.etrangers_filles_2eme || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.etrangers_garcons_3eme"
                  value={formData.formulaire?.etrangers_garcons_3eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.etrangers_filles_3eme"
                  value={formData.formulaire?.etrangers_filles_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.etrangers_garcons_3eme || 0) +
                  (formData.formulaire?.etrangers_filles_3eme || 0)}
              </td>

              <td>
                {(formData.formulaire?.etrangers_garcons_1ere || 0) +
                  (formData.formulaire?.etrangers_garcons_2eme || 0) +
                  (formData.formulaire?.etrangers_garcons_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.etrangers_filles_1ere || 0) +
                  (formData.formulaire?.etrangers_filles_2eme || 0) +
                  (formData.formulaire?.etrangers_filles_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.etrangers_garcons_1ere || 0) +
                  (formData.formulaire?.etrangers_garcons_2eme || 0) +
                  (formData.formulaire?.etrangers_garcons_3eme || 0) +
                  (formData.formulaire?.etrangers_filles_1ere || 0) +
                  (formData.formulaire?.etrangers_filles_2eme || 0) +
                  (formData.formulaire?.etrangers_filles_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Dont Orphelins"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.orphelins_garcons_1ere"
                  value={formData.formulaire?.orphelins_garcons_1ere}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.orphelins_filles_1ere"
                  value={formData.formulaire?.orphelins_filles_1ere}
                />
              </td>
              <td>
                {(formData.formulaire?.orphelins_garcons_1ere || 0) +
                  (formData.formulaire?.orphelins_filles_1ere || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.orphelins_garcons_2eme"
                  value={formData.formulaire?.orphelins_garcons_2eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.orphelins_filles_2eme"
                  value={formData.formulaire?.orphelins_filles_2eme}
                />
              </td>
              <td>
                {(formData.formulaire?.orphelins_garcons_2eme || 0) +
                  (formData.formulaire?.orphelins_filles_2eme || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.orphelins_garcons_3eme"
                  value={formData.formulaire?.orphelins_garcons_3eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.orphelins_filles_3eme"
                  value={formData.formulaire?.orphelins_filles_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.orphelins_garcons_3eme || 0) +
                  (formData.formulaire?.orphelins_filles_3eme || 0)}
              </td>

              <td>
                {(formData.formulaire?.orphelins_garcons_1ere || 0) +
                  (formData.formulaire?.orphelins_garcons_2eme || 0) +
                  (formData.formulaire?.orphelins_garcons_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.orphelins_filles_1ere || 0) +
                  (formData.formulaire?.orphelins_filles_2eme || 0) +
                  (formData.formulaire?.orphelins_filles_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.orphelins_garcons_1ere || 0) +
                  (formData.formulaire?.orphelins_garcons_2eme || 0) +
                  (formData.formulaire?.orphelins_garcons_3eme || 0) +
                  (formData.formulaire?.orphelins_filles_1ere || 0) +
                  (formData.formulaire?.orphelins_filles_2eme || 0) +
                  (formData.formulaire?.orphelins_filles_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Dont réfugiés"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.refugies_garcons_1ere"
                  value={formData.formulaire?.refugies_garcons_1ere}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.refugies_filles_1ere"
                  value={formData.formulaire?.refugies_filles_1ere}
                />
              </td>
              <td>
                {(formData.formulaire?.refugies_garcons_1ere || 0) +
                  (formData.formulaire?.refugies_filles_1ere || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.refugies_garcons_2eme"
                  value={formData.formulaire?.refugies_garcons_2eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.refugies_filles_2eme"
                  value={formData.formulaire?.refugies_filles_2eme}
                />
              </td>
              <td>
                {(formData.formulaire?.refugies_garcons_2eme || 0) +
                  (formData.formulaire?.refugies_filles_2eme || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.refugies_garcons_3eme"
                  value={formData.formulaire?.refugies_garcons_3eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.refugies_filles_3eme"
                  value={formData.formulaire?.refugies_filles_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.refugies_garcons_3eme || 0) +
                  (formData.formulaire?.refugies_filles_3eme || 0)}
              </td>

              <td>
                {(formData.formulaire?.refugies_garcons_1ere || 0) +
                  (formData.formulaire?.refugies_garcons_2eme || 0) +
                  (formData.formulaire?.refugies_garcons_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.refugies_filles_1ere || 0) +
                  (formData.formulaire?.refugies_filles_2eme || 0) +
                  (formData.formulaire?.refugies_filles_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.refugies_garcons_1ere || 0) +
                  (formData.formulaire?.refugies_garcons_2eme || 0) +
                  (formData.formulaire?.refugies_garcons_3eme || 0) +
                  (formData.formulaire?.refugies_filles_1ere || 0) +
                  (formData.formulaire?.refugies_filles_2eme || 0) +
                  (formData.formulaire?.refugies_filles_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Dont déplacés internes"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_internes_garcons_1ere"
                  value={formData.formulaire?.deplaces_internes_garcons_1ere}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_internes_filles_1ere"
                  value={formData.formulaire?.deplaces_internes_filles_1ere}
                />
              </td>
              <td>
                {(formData.formulaire?.deplaces_internes_garcons_1ere || 0) +
                  (formData.formulaire?.deplaces_internes_filles_1ere || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_internes_garcons_2eme"
                  value={formData.formulaire?.deplaces_internes_garcons_2eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_internes_filles_2eme"
                  value={formData.formulaire?.deplaces_internes_filles_2eme}
                />
              </td>
              <td>
                {(formData.formulaire?.deplaces_internes_garcons_2eme || 0) +
                  (formData.formulaire?.deplaces_internes_filles_2eme || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_internes_garcons_3eme"
                  value={formData.formulaire?.deplaces_internes_garcons_3eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_internes_filles_3eme"
                  value={formData.formulaire?.deplaces_internes_filles_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.deplaces_internes_garcons_3eme || 0) +
                  (formData.formulaire?.deplaces_internes_filles_3eme || 0)}
              </td>

              <td>
                {(formData.formulaire?.deplaces_internes_garcons_1ere || 0) +
                  (formData.formulaire?.deplaces_internes_garcons_2eme || 0) +
                  (formData.formulaire?.deplaces_internes_garcons_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.deplaces_internes_filles_1ere || 0) +
                  (formData.formulaire?.deplaces_internes_filles_2eme || 0) +
                  (formData.formulaire?.deplaces_internes_filles_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.deplaces_internes_garcons_1ere || 0) +
                  (formData.formulaire?.deplaces_internes_garcons_2eme || 0) +
                  (formData.formulaire?.deplaces_internes_garcons_3eme || 0) +
                  (formData.formulaire?.deplaces_internes_filles_1ere || 0) +
                  (formData.formulaire?.deplaces_internes_filles_2eme || 0) +
                  (formData.formulaire?.deplaces_internes_filles_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Dont déplacés externes"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_externes_garcons_1ere"
                  value={formData.formulaire?.deplaces_externes_garcons_1ere}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_externes_filles_1ere"
                  value={formData.formulaire?.deplaces_externes_filles_1ere}
                />
              </td>
              <td>
                {(formData.formulaire?.deplaces_externes_garcons_1ere || 0) +
                  (formData.formulaire?.deplaces_externes_filles_1ere || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_externes_garcons_2eme"
                  value={formData.formulaire?.deplaces_externes_garcons_2eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_externes_filles_2eme"
                  value={formData.formulaire?.deplaces_externes_filles_2eme}
                />
              </td>
              <td>
                {(formData.formulaire?.deplaces_externes_garcons_2eme || 0) +
                  (formData.formulaire?.deplaces_externes_filles_2eme || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_externes_garcons_3eme"
                  value={formData.formulaire?.deplaces_externes_garcons_3eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.deplaces_externes_filles_3eme"
                  value={formData.formulaire?.deplaces_externes_filles_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.deplaces_externes_garcons_3eme || 0) +
                  (formData.formulaire?.deplaces_externes_filles_3eme || 0)}
              </td>

              <td>
                {(formData.formulaire?.deplaces_externes_garcons_1ere || 0) +
                  (formData.formulaire?.deplaces_externes_garcons_2eme || 0) +
                  (formData.formulaire?.deplaces_externes_garcons_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.deplaces_externes_filles_1ere || 0) +
                  (formData.formulaire?.deplaces_externes_filles_2eme || 0) +
                  (formData.formulaire?.deplaces_externes_filles_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.deplaces_externes_garcons_1ere || 0) +
                  (formData.formulaire?.deplaces_externes_garcons_2eme || 0) +
                  (formData.formulaire?.deplaces_externes_garcons_3eme || 0) +
                  (formData.formulaire?.deplaces_externes_filles_1ere || 0) +
                  (formData.formulaire?.deplaces_externes_filles_2eme || 0) +
                  (formData.formulaire?.deplaces_externes_filles_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Dont re-intégrants"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.reintegrants_garcons_1ere"
                  value={formData.formulaire?.reintegrants_garcons_1ere}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.reintegrants_filles_1ere"
                  value={formData.formulaire?.reintegrants_filles_1ere}
                />
              </td>
              <td>
                {(formData.formulaire?.reintegrants_garcons_1ere || 0) +
                  (formData.formulaire?.reintegrants_filles_1ere || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.reintegrants_garcons_2eme"
                  value={formData.formulaire?.reintegrants_garcons_2eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.reintegrants_filles_2eme"
                  value={formData.formulaire?.reintegrants_filles_2eme}
                />
              </td>
              <td>
                {(formData.formulaire?.reintegrants_garcons_2eme || 0) +
                  (formData.formulaire?.reintegrants_filles_2eme || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.reintegrants_garcons_3eme"
                  value={formData.formulaire?.reintegrants_garcons_3eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.reintegrants_filles_3eme"
                  value={formData.formulaire?.reintegrants_filles_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.reintegrants_garcons_3eme || 0) +
                  (formData.formulaire?.reintegrants_filles_3eme || 0)}
              </td>

              <td>
                {(formData.formulaire?.reintegrants_garcons_1ere || 0) +
                  (formData.formulaire?.reintegrants_garcons_2eme || 0) +
                  (formData.formulaire?.reintegrants_garcons_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.reintegrants_filles_1ere || 0) +
                  (formData.formulaire?.reintegrants_filles_2eme || 0) +
                  (formData.formulaire?.reintegrants_filles_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.reintegrants_garcons_1ere || 0) +
                  (formData.formulaire?.reintegrants_garcons_2eme || 0) +
                  (formData.formulaire?.reintegrants_garcons_3eme || 0) +
                  (formData.formulaire?.reintegrants_filles_1ere || 0) +
                  (formData.formulaire?.reintegrants_filles_2eme || 0) +
                  (formData.formulaire?.reintegrants_filles_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Dont handicaps"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.handicaps_garcons_1ere"
                  value={formData.formulaire?.handicaps_garcons_1ere}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.handicaps_filles_1ere"
                  value={formData.formulaire?.handicaps_filles_1ere}
                />
              </td>
              <td>
                {(formData.formulaire?.handicaps_garcons_1ere || 0) +
                  (formData.formulaire?.handicaps_filles_1ere || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.handicaps_garcons_2eme"
                  value={formData.formulaire?.handicaps_garcons_2eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.handicaps_filles_2eme"
                  value={formData.formulaire?.handicaps_filles_2eme}
                />
              </td>
              <td>
                {(formData.formulaire?.handicaps_garcons_2eme || 0) +
                  (formData.formulaire?.handicaps_filles_2eme || 0)}
              </td>

              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.handicaps_garcons_3eme"
                  value={formData.formulaire?.handicaps_garcons_3eme}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.handicaps_filles_3eme"
                  value={formData.formulaire?.handicaps_filles_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.handicaps_garcons_3eme || 0) +
                  (formData.formulaire?.handicaps_filles_3eme || 0)}
              </td>

              <td>
                {(formData.formulaire?.handicaps_garcons_1ere || 0) +
                  (formData.formulaire?.handicaps_garcons_2eme || 0) +
                  (formData.formulaire?.handicaps_garcons_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.handicaps_filles_1ere || 0) +
                  (formData.formulaire?.handicaps_filles_2eme || 0) +
                  (formData.formulaire?.handicaps_filles_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.handicaps_garcons_1ere || 0) +
                  (formData.formulaire?.handicaps_garcons_2eme || 0) +
                  (formData.formulaire?.handicaps_garcons_3eme || 0) +
                  (formData.formulaire?.handicaps_filles_1ere || 0) +
                  (formData.formulaire?.handicaps_filles_2eme || 0) +
                  (formData.formulaire?.handicaps_filles_3eme || 0)}
              </td>
            </tr>
          </tbody>
        </table>

        <label>
          {
            "Tableau 3 : Repartition du personnel enseignant par qualification, sexe et classe d'affectation"
          }
        </label>

        <table className="text-center">
          <thead>
            <tr>
              <th rowSpan={3}>Qualification</th>
              <th colSpan={7}>{"Classe d'affectation"}</th>
            </tr>
            <tr>
              <th colSpan={2}>{"1ère"}</th>
              <th colSpan={2}>{"2ème"}</th>
              <th colSpan={2}>{"3ème"}</th>
              <th rowSpan={2}>Total</th>
            </tr>
            <tr>
              <th>H</th>
              <th>F</th>
              <th>H</th>
              <th>F</th>
              <th>H</th>
              <th>F</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{"-D4"}</th>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_-d4_hommes_1ere"
                  value={formData.formulaire?.["enseignants_-d4_hommes_1ere"]}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_-d4_femmes_1ere"
                  value={formData.formulaire?.["enseignants_-d4_femmes_1ere"]}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_-d4_hommes_2eme"
                  value={formData.formulaire?.["enseignants_-d4_hommes_2eme"]}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_-d4_femmes_2eme"
                  value={formData.formulaire?.["enseignants_-d4_femmes_2eme"]}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_-d4_hommes_3eme"
                  value={formData.formulaire?.["enseignants_-d4_hommes_3eme"]}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_-d4_femmes_3eme"
                  value={formData.formulaire?.["enseignants_-d4_femmes_3eme"]}
                />
              </td>
              <td>
                {(formData.formulaire?.["enseignants_-d4_hommes_1ere"] || 0) +
                  (formData.formulaire?.["enseignants_-d4_femmes_1ere"] || 0) +
                  (formData.formulaire?.["enseignants_-d4_hommes_2eme"] || 0) +
                  (formData.formulaire?.["enseignants_-d4_femmes_2eme"] || 0) +
                  (formData.formulaire?.["enseignants_-d4_hommes_3eme"] || 0) +
                  (formData.formulaire?.["enseignants_-d4_femmes_3eme"] || 0)}
              </td>
            </tr>

            <tr>
              <th>{"EM"}</th>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_em_hommes_1ere"
                  value={formData.formulaire?.enseignants_em_hommes_1ere}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_em_femmes_1ere"
                  value={formData.formulaire?.enseignants_em_femmes_1ere}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_em_hommes_2eme"
                  value={formData.formulaire?.enseignants_em_hommes_2eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_em_femmes_2eme"
                  value={formData.formulaire?.enseignants_em_femmes_2eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_em_hommes_3eme"
                  value={formData.formulaire?.enseignants_em_hommes_3eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_em_femmes_3eme"
                  value={formData.formulaire?.enseignants_em_femmes_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.enseignants_em_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_em_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_em_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_em_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_em_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_em_femmes_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"D4"}</th>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d4_hommes_1ere"
                  value={formData.formulaire?.enseignants_d4_hommes_1ere}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d4_femmes_1ere"
                  value={formData.formulaire?.enseignants_d4_femmes_1ere}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d4_hommes_2eme"
                  value={formData.formulaire?.enseignants_d4_hommes_2eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d4_femmes_2eme"
                  value={formData.formulaire?.enseignants_d4_femmes_2eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d4_hommes_3eme"
                  value={formData.formulaire?.enseignants_d4_hommes_3eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d4_femmes_3eme"
                  value={formData.formulaire?.enseignants_d4_femmes_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.enseignants_d4_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_d4_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_d4_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_d4_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_d4_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_d4_femmes_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"P6"}</th>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_p6_hommes_1ere"
                  value={formData.formulaire?.enseignants_p6_hommes_1ere}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_p6_femmes_1ere"
                  value={formData.formulaire?.enseignants_p6_femmes_1ere}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_p6_hommes_2eme"
                  value={formData.formulaire?.enseignants_p6_hommes_2eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_p6_femmes_2eme"
                  value={formData.formulaire?.enseignants_p6_femmes_2eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_p6_hommes_3eme"
                  value={formData.formulaire?.enseignants_p6_hommes_3eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_p6_femmes_3eme"
                  value={formData.formulaire?.enseignants_p6_femmes_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.enseignants_p6_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_p6_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_p6_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_p6_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_p6_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_p6_femmes_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"D6"}</th>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d6_hommes_1ere"
                  value={formData.formulaire?.enseignants_d6_hommes_1ere}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d6_femmes_1ere"
                  value={formData.formulaire?.enseignants_d6_femmes_1ere}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d6_hommes_2eme"
                  value={formData.formulaire?.enseignants_d6_hommes_2eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d6_femmes_2eme"
                  value={formData.formulaire?.enseignants_d6_femmes_2eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d6_hommes_3eme"
                  value={formData.formulaire?.enseignants_d6_hommes_3eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_d6_femmes_3eme"
                  value={formData.formulaire?.enseignants_d6_femmes_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.enseignants_d6_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_d6_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_d6_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_d6_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_d6_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_d6_femmes_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Autres"}</th>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_autres_hommes_1ere"
                  value={formData.formulaire?.enseignants_autres_hommes_1ere}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_autres_femmes_1ere"
                  value={formData.formulaire?.enseignants_autres_femmes_1ere}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_autres_hommes_2eme"
                  value={formData.formulaire?.enseignants_autres_hommes_2eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_autres_femmes_2eme"
                  value={formData.formulaire?.enseignants_autres_femmes_2eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_autres_hommes_3eme"
                  value={formData.formulaire?.enseignants_autres_hommes_3eme}
                />
              </td>
              <td>
                <Input2
                  type="number"
                  className="text-center"
                  handleChange={handleChange}
                  name="formulaire.enseignants_autres_femmes_3eme"
                  value={formData.formulaire?.enseignants_autres_femmes_3eme}
                />
              </td>
              <td>
                {(formData.formulaire?.enseignants_autres_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_autres_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_autres_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_autres_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_autres_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_autres_femmes_3eme || 0)}
              </td>
            </tr>

            <tr>
              <th>{"Total"}</th>
              <td>
                {(formData.formulaire?.["enseignants_-d4_hommes_1ere"] || 0) +
                  (formData.formulaire?.enseignants_em_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_d4_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_p6_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_d6_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_autres_hommes_1ere || 0)}
              </td>
              <td>
                {(formData.formulaire?.["enseignants_-d4_femmes_1ere"] || 0) +
                  (formData.formulaire?.enseignants_em_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_d4_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_p6_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_d6_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_autres_femmes_1ere || 0)}
              </td>

              <td>
                {(formData.formulaire?.["enseignants_-d4_hommes_2eme"] || 0) +
                  (formData.formulaire?.enseignants_em_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_d4_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_p6_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_d6_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_autres_hommes_2eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.["enseignants_-d4_femmes_2eme"] || 0) +
                  (formData.formulaire?.enseignants_em_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_d4_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_p6_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_d6_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_autres_femmes_2eme || 0)}
              </td>

              <td>
                {(formData.formulaire?.["enseignants_-d4_hommes_3eme"] || 0) +
                  (formData.formulaire?.enseignants_em_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_d4_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_p6_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_d6_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_autres_hommes_3eme || 0)}
              </td>
              <td>
                {(formData.formulaire?.["enseignants_-d4_femmes_3eme"] || 0) +
                  (formData.formulaire?.enseignants_em_femmes_3eme || 0) +
                  (formData.formulaire?.enseignants_d4_femmes_3eme || 0) +
                  (formData.formulaire?.enseignants_p6_femmes_3eme || 0) +
                  (formData.formulaire?.enseignants_d6_femmes_3eme || 0) +
                  (formData.formulaire?.enseignants_autres_femmes_3eme || 0)}
              </td>

              <td>
                {(formData.formulaire?.["enseignants_-d4_hommes_1ere"] || 0) +
                  (formData.formulaire?.enseignants_em_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_d4_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_p6_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_d6_hommes_1ere || 0) +
                  (formData.formulaire?.enseignants_autres_hommes_1ere || 0) +
                  (formData.formulaire?.["enseignants_-d4_femmes_1ere"] || 0) +
                  (formData.formulaire?.enseignants_em_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_d4_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_p6_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_d6_femmes_1ere || 0) +
                  (formData.formulaire?.enseignants_autres_femmes_1ere || 0) +
                  (formData.formulaire?.["enseignants_-d4_hommes_2eme"] || 0) +
                  (formData.formulaire?.enseignants_em_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_d4_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_p6_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_d6_hommes_2eme || 0) +
                  (formData.formulaire?.enseignants_autres_hommes_2eme || 0) +
                  (formData.formulaire?.["enseignants_-d4_femmes_2eme"] || 0) +
                  (formData.formulaire?.enseignants_em_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_d4_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_p6_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_d6_femmes_2eme || 0) +
                  (formData.formulaire?.enseignants_autres_femmes_2eme || 0) +
                  (formData.formulaire?.["enseignants_-d4_hommes_3eme"] || 0) +
                  (formData.formulaire?.enseignants_em_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_d4_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_p6_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_d6_hommes_3eme || 0) +
                  (formData.formulaire?.enseignants_autres_hommes_3eme || 0) +
                  (formData.formulaire?.["enseignants_-d4_femmes_3eme"] || 0) +
                  (formData.formulaire?.enseignants_em_femmes_3eme || 0) +
                  (formData.formulaire?.enseignants_d4_femmes_3eme || 0) +
                  (formData.formulaire?.enseignants_p6_femmes_3eme || 0) +
                  (formData.formulaire?.enseignants_d6_femmes_3eme || 0) +
                  (formData.formulaire?.enseignants_autres_femmes_3eme || 0)}
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc ml-8">
          <li>
            {
              "Parmi le personnel enseignant de votre établissement, combien sont éligibles à la retraite"
            }
          </li>
        </ul>
        <label className="ml-24">
          <Input2
            label="(65 ans et plus et 35 ans de services)"
            className="text-center"
            type="number"
            handleChange={handleChange}
            name="formulaire.personnel_eligible_retraite"
            value={formData.formulaire?.personnel_eligible_retraite}
          />
        </label>
      </section>
    </div>,

    // Page 4
    <div key={4} className="flex flex-col gap-4">
      <section className="flex flex-col gap-2">
        <label>
          {
            "3. Prise en compte des thèmes transversaux dans le programme d'éducation"
          }
        </label>
        <label>{"3.1 Thèmes transversaux"}</label>

        <table className="text-center">
          <thead>
            <tr>
              <th rowSpan={2}>{"Thèmes"}</th>
              <th>{"Le thème est-il enseigné par l'établissement ?"}</th>
              <th colSpan={3}>{"Si << oui >> indiquez sous quelle forme"}</th>
            </tr>
            <tr>
              <th>{"Oui/Non"}</th>
              <th>Dans le programme officiel</th>
              <th>{"En tant que discipline à part"}</th>
              <th>{"Lors des activités parascolaires"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="whitespace-nowrap text-left">{"Le VIH/Sida"}</th>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.vih_sida_enseigne"
                    checked={formData.formulaire?.vih_sida_enseigne}
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.vih_sida_programme"
                    checked={formData.formulaire?.vih_sida_programme}
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.vih_sida_discipline"
                    checked={formData.formulaire?.vih_sida_discipline}
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.vih_sida_active_parascolaire"
                    checked={formData.formulaire?.vih_sida_active_parascolaire}
                  />
                </span>
              </td>
            </tr>

            <tr>
              <th className="whitespace-nowrap text-left">
                {"La santé sexuelle et reproductive"}
              </th>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.sante_reproductive_enseigne"
                    checked={formData.formulaire?.sante_reproductive_enseigne}
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.sante_reproductive_programme"
                    checked={formData.formulaire?.sante_reproductive_programme}
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.sante_reproductive_discipline"
                    checked={formData.formulaire?.sante_reproductive_discipline}
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.sante_reproductive_parascolaire"
                    checked={
                      formData.formulaire?.sante_reproductive_parascolaire
                    }
                  />
                </span>
              </td>
            </tr>

            <tr>
              <th className=" text-left">
                {"La sensibilisation contre les abus et violences"}
              </th>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.sensibilisation_abus_enseigne"
                    checked={formData.formulaire?.sensibilisation_abus_enseigne}
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.sensibilisation_abus_programme"
                    checked={
                      formData.formulaire?.sensibilisation_abus_programme
                    }
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.sensibilisation_abus_discipline"
                    checked={
                      formData.formulaire?.sensibilisation_abus_discipline
                    }
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.sensibilisation_abus_parascolaire"
                    checked={
                      formData.formulaire?.sensibilisation_abus_parascolaire
                    }
                  />
                </span>
              </td>
            </tr>

            <tr>
              <th className="whitespace-nowrap text-left">
                {"L'éducation environnementale"}
              </th>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.education_environnementale_enseigne"
                    checked={
                      formData.formulaire?.education_environnementale_enseigne
                    }
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.education_environnementale_programme"
                    checked={
                      formData.formulaire?.education_environnementale_programme
                    }
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.education_environnementale_discipline"
                    checked={
                      formData.formulaire?.education_environnementale_discipline
                    }
                  />
                </span>
              </td>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.education_environnementale_parascolaire"
                    checked={
                      formData.formulaire
                        ?.education_environnementale_parascolaire
                    }
                  />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="flex flex-col gap-2">
        <label>
          {
            "3.2 L'établissement a t'il établi et communiqué des règlements et directives à l'attention du"
          }
          <br />
          {"personnel et des éleves"}
        </label>

        <table className="text-center">
          <thead>
            <tr>
              <th rowSpan={2}>{"Relatifs"}</th>
              <th>{"Oui/Non"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="whitespace-nowrap text-left">
                {"à la securité physique"}
              </th>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.reglement_securite_physique"
                    checked={formData.formulaire?.reglement_securite_physique}
                  />
                </span>
              </td>
            </tr>

            <tr>
              <th className="whitespace-nowrap text-left">
                {"à la stigmatisation et la discrimination"}
              </th>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.reglement_discrimination"
                    checked={formData.formulaire?.reglement_discrimination}
                  />
                </span>
              </td>
            </tr>

            <tr>
              <th className="whitespace-nowrap text-left">
                {"aux harcèlements et abus sexuels"}
              </th>
              <td>
                <span className="flex justify-center">
                  <Input2
                    className="text-center h-4 w-4"
                    type="checkbox"
                    handleChange={handleChange}
                    name="formulaire.reglement_harcelement"
                    checked={formData.formulaire?.reglement_harcelement}
                  />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="flex flex-col gap-2">
        <label>
          {
            "3.3 Existe-il au sein de votre établissement, une cellule d'orientation qui intègre dans sa mission,"
          }
          <br />
          <Input2
            label=" les questions concernant l'Education à la Vie Familiale (EVF) : Oui/Non"
            className="text-center h-4 w-4"
            type="checkbox"
            handleChange={handleChange}
            name="formulaire.cellule_orientation_evf"
            checked={formData.formulaire?.cellule_orientation_evf}
          />
        </label>

        <label>
          {
            "3.4 Votre établissemeny dispose-t-il d'enseignants formés sur le programme national d'education"
          }
          <br />
          <Input2
            label="à la Vie Familiale (EVF) : Oui/Non"
            className="text-center h-4 w-4"
            type="checkbox"
            handleChange={handleChange}
            name="formulaire.enseignants_evf_formes"
            checked={formData.formulaire?.enseignants_evf_formes}
          />
        </label>

        <Input2
          label="3.5 Si << oui >> Indiquez le nombre d'enseignant-e-s formé-e-s : "
          className="text-center"
          type="number"
          handleChange={handleChange}
          name="formulaire.nb_enseignants_evf"
          value={formData.formulaire?.nb_enseignants_evf}
        />
      </section>

      <section className="flex flex-col gap-2">
        <label>
          {"3.6 Parmi les enseignants formé-e-s, combien dispensent ce cours :"}
        </label>

        <table className="text-center">
          <thead>
            <tr>
              <th rowSpan={2}>{"ENSEIGNANTS"}</th>
              <th>H</th>
              <th>F</th>
              <th>H + F</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="whitespace-nowrap text-left">{"Formés"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.nb_enseignants_forme_h"
                  value={formData.formulaire?.nb_enseignants_forme_h}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.nb_enseignants_forme_f"
                  value={formData.formulaire?.nb_enseignants_forme_f}
                />
              </td>
              <td>
                {(formData.formulaire?.nb_enseignants_forme_h || 0) +
                  (formData.formulaire?.nb_enseignants_forme_f || 0)}
              </td>
            </tr>

            <tr>
              <th className="whitespace-nowrap text-left">{"Formés"}</th>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.nb_enseignants_evf_dispense_h"
                  value={formData.formulaire?.nb_enseignants_evf_dispense_h}
                />
              </td>
              <td>
                <Input2
                  className="text-center"
                  type="number"
                  handleChange={handleChange}
                  name="formulaire.nb_enseignants_evf_dispense_f"
                  value={formData.formulaire?.nb_enseignants_evf_dispense_f}
                />
              </td>
              <td>
                {(formData.formulaire?.nb_enseignants_evf_dispense_h || 0) +
                  (formData.formulaire?.nb_enseignants_evf_dispense_f || 0)}
              </td>
            </tr>
          </tbody>
        </table>
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
        className="[box-shadow:0px_0px_4px_gray] p-8"
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
