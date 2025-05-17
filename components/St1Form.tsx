"use client";

import { localStoragekeys } from "@/util/constants";
import React, { useEffect, useState } from "react";
import PageContentWrapper from "./layout/PageContentWrapper";
import { SchoolStType, SchoolType, SchoolYearType } from "@/util/types";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Button from "./basic/Button";
import { Download } from "lucide-react";
import Loader from "./basic/Loader";

const St1Form = () => {
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
      is_synced: "",
    },
  });
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  const [formTitleData, setFormTitleData] = useState<{
    schoolName: string;
    yearLabel: string;
  }>({ schoolName: "", yearLabel: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const keys = name.split(".");

    setFormData((prevState: any) => {
      if (keys.length === 1) {
        return {
          ...prevState,
          [name]: type === "checkbox" ? checked : value,
        };
      } else {
        return {
          ...prevState,
          [keys[0]]: {
            ...prevState[keys[0]],
            [keys[1]]: type === "checkbox" ? checked : value,
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
        `st1_${formTitleData.schoolName}_${formTitleData.yearLabel}.pdf`
      );
      setIsGeneratingPdf(false);
    }
  };

  useEffect(() => {
    handleDownloadPdf();
  }, [isGeneratingPdf]);

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
        pageTitle={``} // Formulaire ST1 | ${formTitleData.schoolName} | ${formTitleData.yearLabel}
      >
        <div className="flex justify-between mb-4">
          <div className="flex flex-col items-center border-[2px] border-[#555] p-2">
            <label>{"République Démocratique du Congo"}</label>
            <label className="font-bold">
              {"Ministère de l'Enseignement Primaire,"}
            </label>
            <label className="font-bold">{"Secondaire et Technique"}</label>
            <label className="font-bold">
              {"Secrétariat Général de l'EPST"}
            </label>
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
              <label className="font-bold">{"ST1"}</label>
              <label className="font-bold">{"SIGE - RDC"}</label>
              <label>
                {"Pour la Gestion et le Pilotage du Système éducatif"}
              </label>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="hidden"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="ID"
          />

          <section className="flex flex-col gap-2">
            <label className="font-bold">
              {"1. IDENTIFICATION DE L'ETABLISSEMENT"}
            </label>
            <div className="flex gap-2 items-center">
              <label htmlFor="nomEtab" className="whitespace-nowrap">
                {"1.1. Nom de l'établissement "}
              </label>
              <input
                className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                type="text"
                id="nomEtab"
                name="nomEtab"
                value={formData.nomEtab}
                onChange={handleChange}
                placeholder="Nom Etablissement"
              />
            </div>
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
                  <label
                    htmlFor="formulaire.ville"
                    className="whitespace-nowrap"
                  >
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
                  <label
                    htmlFor="formulaire.village"
                    className="whitespace-nowrap"
                  >
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

                <div className="flex gap-4 items-center">
                  <label className="whitespace-nowrap">
                    {"1.15. Milieu :"}
                  </label>

                  <label
                    className="flex gap-1 items-center cursor-pointer"
                    htmlFor="formulaire.milieuRural"
                  >
                    <input
                      className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                      type="radio"
                      name="formulaire.milieu"
                      id="formulaire.milieuRural"
                      value={formData.formulaire.milieu}
                      onChange={handleChange}
                    />
                    Rural
                  </label>
                  <label
                    className="flex gap-1 items-center cursor-pointer"
                    htmlFor="formulaire.milieuUrbain"
                  >
                    <input
                      className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                      type="radio"
                      name="formulaire.milieu"
                      id="formulaire.milieuUrbain"
                      value={formData.formulaire.milieu}
                      onChange={handleChange}
                    />
                    Urbain
                  </label>
                </div>
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

            <div className="flex flex-wrap gap-4 items-center">
              <label
                htmlFor="formulaire.regime_gestion"
                className="whitespace-nowrap"
              >
                {"1.16. Régime de gestion"}
              </label>
              <label className="flex gap-1 items-center cursor-pointer whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.regime_gestion"
                  value={formData.formulaire.regime_gestion}
                  onChange={handleChange}
                />
                Non conventionne (ENC)
              </label>
              <label className="flex gap-1 items-center cursor-pointer whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.regime_gestion"
                  value={formData.formulaire.regime_gestion}
                  onChange={handleChange}
                />
                Catholique
              </label>
              <label className="flex gap-1 items-center cursor-pointer whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.regime_gestion"
                  value={formData.formulaire.regime_gestion}
                  onChange={handleChange}
                />
                Protestant
              </label>
              <label className="flex gap-1 items-center cursor-pointer whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.regime_gestion"
                  value={formData.formulaire.regime_gestion}
                  onChange={handleChange}
                />
                Kimbanguiste
              </label>

              <label className="flex gap-1 items-center cursor-pointer whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.regime_gestion"
                  value={formData.formulaire.regime_gestion}
                  onChange={handleChange}
                />
                Kimbanguiste (ECK)
              </label>
              <label className="flex gap-1 items-center cursor-pointer whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.regime_gestion"
                  value={formData.formulaire.regime_gestion}
                  onChange={handleChange}
                />
                Islamique (ECI)
              </label>
              <label className="flex gap-1 items-center cursor-pointer whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.regime_gestion"
                  value={formData.formulaire.regime_gestion}
                  onChange={handleChange}
                />
                Salutiste (ECS)
              </label>
              <label className="flex gap-1 items-center cursor-pointer whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.regime_gestion"
                  value={formData.formulaire.regime_gestion}
                  onChange={handleChange}
                />
                Fraternité (ECF)
              </label>
              <label className="flex gap-1 items-center cursor-pointer whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.regime_gestion"
                  value={formData.formulaire.regime_gestion}
                  onChange={handleChange}
                />
                Privée (EPR)
              </label>
            </div>
          </section>

          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Type"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="ids"
            value={formData.ids}
            onChange={handleChange}
            placeholder="IDs"
          />

          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="idetablissement"
            value={formData.idetablissement}
            onChange={handleChange}
            placeholder="ID Etablissement"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="idUtilisateur"
            value={formData.idUtilisateur || ""}
            onChange={handleChange}
            placeholder="ID Utilisateur"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="idannee"
            value={formData.idannee}
            onChange={handleChange}
            placeholder="ID Année"
          />

          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.province"
            value={formData.formulaire.province}
            onChange={handleChange}
            placeholder="Province"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.proved"
            value={formData.formulaire.proved || ""}
            onChange={handleChange}
            placeholder="Proved"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.sousProved"
            value={formData.formulaire.sousProved || ""}
            onChange={handleChange}
            placeholder="Sous Proved"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.centreRegroupement"
            value={formData.formulaire.centreRegroupement}
            onChange={handleChange}
            placeholder="Centre Regroupement"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.nomChefEtablissement"
            value={formData.formulaire.nomChefEtablissement}
            onChange={handleChange}
            placeholder="Nom Chef Etablissement"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.typeEtablissement"
            value={formData.formulaire.typeEtablissement}
            onChange={handleChange}
            placeholder="Type Etablissement"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.niveauxEnseignement"
            value={formData.formulaire.niveauxEnseignement}
            onChange={handleChange}
            placeholder="Niveaux Enseignement"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.capaciteAccueil"
            value={formData.formulaire.capaciteAccueil}
            onChange={handleChange}
            placeholder="Capacité Accueil"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.nombreEleves"
            value={formData.formulaire.nombreEleves}
            onChange={handleChange}
            placeholder="Nombre Eleves"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.nombreEnseignants"
            value={formData.formulaire.nombreEnseignants}
            onChange={handleChange}
            placeholder="Nombre Enseignants"
          />

          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.telephone"
            value={formData.formulaire.telephone || ""}
            onChange={handleChange}
            placeholder="Téléphone"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="email"
            name="formulaire.email"
            value={formData.formulaire.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.anneeCreation"
            value={formData.formulaire.anneeCreation}
            onChange={handleChange}
            placeholder="Année Création"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.infrastructures"
            value={formData.formulaire.infrastructures}
            onChange={handleChange}
            placeholder="Infrastructures"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.validation"
            checked={formData.formulaire.validation}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="datetime-local"
            name="formulaire.created_at"
            value={formData.formulaire.created_at}
            onChange={handleChange}
            placeholder="Created At"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.adresse_etablissement"
            value={formData.formulaire.adresse_etablissement}
            onChange={handleChange}
            placeholder="Adresse Etablissement"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.telephone_etablissement"
            value={formData.formulaire.telephone_etablissement}
            onChange={handleChange}
            placeholder="Téléphone Etablissement"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.annee"
            value={formData.formulaire.annee}
            onChange={handleChange}
            placeholder="Année"
          />

          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.code_adm_ets_auto"
            value={formData.formulaire.code_adm_ets_auto}
            onChange={handleChange}
            placeholder="Code ADM ETS Auto"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.regime_gestion"
            value={formData.formulaire.regime_gestion}
            onChange={handleChange}
            placeholder="Régime Gestion"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.latitude"
            value={formData.formulaire.latitude}
            onChange={handleChange}
            placeholder="Latitude"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.longitude"
            value={formData.formulaire.longitude}
            onChange={handleChange}
            placeholder="Longitude"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.altitude"
            value={formData.formulaire.altitude}
            onChange={handleChange}
            placeholder="Altitude"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.centre_regroupement"
            value={formData.formulaire.centre_regroupement}
            onChange={handleChange}
            placeholder="Centre Regroupement"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.milieu"
            value={formData.formulaire.milieu}
            onChange={handleChange}
            placeholder="Milieu"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.reference_juridique"
            value={formData.formulaire.reference_juridique}
            onChange={handleChange}
            placeholder="Référence Juridique"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.matricule_secope"
            value={formData.formulaire.matricule_secope}
            onChange={handleChange}
            placeholder="Matricule SCOPE"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.etat_etablissement"
            value={formData.formulaire.etat_etablissement}
            onChange={handleChange}
            placeholder="Etat Etablissement"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.statut_occupation"
            value={formData.formulaire.statut_occupation}
            onChange={handleChange}
            placeholder="Statut Occupation"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.programmes_officiels"
            value={formData.formulaire.programmes_officiels}
            onChange={handleChange}
            placeholder="Programmes Officiels"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.copa"
            value={formData.formulaire.copa}
            onChange={handleChange}
            placeholder="COPA"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.coges"
            value={formData.formulaire.coges}
            onChange={handleChange}
            placeholder="COGES"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.locaux_utilises"
            value={formData.formulaire.locaux_utilises}
            onChange={handleChange}
            placeholder="Locaux Utilisés"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.point_eau"
            value={formData.formulaire.point_eau}
            onChange={handleChange}
            placeholder="Point Eau"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.sources_energie"
            value={formData.formulaire.sources_energie}
            onChange={handleChange}
            placeholder="Sources Energie"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.latrines"
            value={formData.formulaire.latrines}
            onChange={handleChange}
            placeholder="Latrines"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.cour_recreation"
            value={formData.formulaire.cour_recreation}
            onChange={handleChange}
            placeholder="Cour Récréation"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.terrain_jeux"
            value={formData.formulaire.terrain_jeux}
            onChange={handleChange}
            placeholder="Terrain Jeux"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.cloture"
            value={formData.formulaire.cloture}
            onChange={handleChange}
            placeholder="Clôture"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.projet_etablissement"
            value={formData.formulaire.projet_etablissement}
            onChange={handleChange}
            placeholder="Projet Etablissement"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.plan_action"
            value={formData.formulaire.plan_action}
            onChange={handleChange}
            placeholder="Plan Action"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.revue_performance"
            value={formData.formulaire.revue_performance}
            onChange={handleChange}
            placeholder="Revue Performance"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.educateurs_formes"
            value={formData.formulaire.educateurs_formes}
            onChange={handleChange}
            placeholder="Educateurs Formés"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.educateurs_cotes_positifs"
            value={formData.formulaire.educateurs_cotes_positifs}
            onChange={handleChange}
            placeholder="Educateurs Côtes Positifs"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.educateurs_inspectes"
            value={formData.formulaire.educateurs_inspectes}
            onChange={handleChange}
            placeholder="Educateurs Inspectés"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.chef_formation"
            value={formData.formulaire.chef_formation}
            onChange={handleChange}
            placeholder="Chef Formation"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.chef_cote_positif"
            value={formData.formulaire.chef_cote_positif}
            onChange={handleChange}
            placeholder="Chef Côte Positif"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_garcons_3ans_1ere"
            value={formData.formulaire.effectif_garcons_3ans_1ere}
            onChange={handleChange}
            placeholder="Effectif Garçons 3 ans 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_filles_3ans_1ere"
            value={formData.formulaire.effectif_filles_3ans_1ere}
            onChange={handleChange}
            placeholder="Effectif Filles 3 ans 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_garcons_4ans_1ere"
            value={formData.formulaire.effectif_garcons_4ans_1ere}
            onChange={handleChange}
            placeholder="Effectif Garçons 4 ans 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_filles_4ans_1ere"
            value={formData.formulaire.effectif_filles_4ans_1ere}
            onChange={handleChange}
            placeholder="Effectif Filles 4 ans 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_garcons_5ans_1ere"
            value={formData.formulaire.effectif_garcons_5ans_1ere}
            onChange={handleChange}
            placeholder="Effectif Garçons 5 ans 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_filles_5ans_1ere"
            value={formData.formulaire.effectif_filles_5ans_1ere}
            onChange={handleChange}
            placeholder="Effectif Filles 5 ans 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_garcons_3ans_2eme"
            value={formData.formulaire.effectif_garcons_3ans_2eme}
            onChange={handleChange}
            placeholder="Effectif Garçons 3 ans 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_filles_3ans_2eme"
            value={formData.formulaire.effectif_filles_3ans_2eme}
            onChange={handleChange}
            placeholder="Effectif Filles 3 ans 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_garcons_4ans_2eme"
            value={formData.formulaire.effectif_garcons_4ans_2eme}
            onChange={handleChange}
            placeholder="Effectif Garçons 4 ans 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_filles_4ans_2eme"
            value={formData.formulaire.effectif_filles_4ans_2eme}
            onChange={handleChange}
            placeholder="Effectif Filles 4 ans 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_garcons_5ans_2eme"
            value={formData.formulaire.effectif_garcons_5ans_2eme}
            onChange={handleChange}
            placeholder="Effectif Garçons 5 ans 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_filles_5ans_2eme"
            value={formData.formulaire.effectif_filles_5ans_2eme}
            onChange={handleChange}
            placeholder="Effectif Filles 5 ans 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_garcons_3ans_3eme"
            value={formData.formulaire.effectif_garcons_3ans_3eme}
            onChange={handleChange}
            placeholder="Effectif Garçons 3 ans 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_filles_3ans_3eme"
            value={formData.formulaire.effectif_filles_3ans_3eme}
            onChange={handleChange}
            placeholder="Effectif Filles 3 ans 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_garcons_4ans_3eme"
            value={formData.formulaire.effectif_garcons_4ans_3eme}
            onChange={handleChange}
            placeholder="Effectif Garçons 4 ans 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_filles_4ans_3eme"
            value={formData.formulaire.effectif_filles_4ans_3eme}
            onChange={handleChange}
            placeholder="Effectif Filles 4 ans 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_garcons_5ans_3eme"
            value={formData.formulaire.effectif_garcons_5ans_3eme}
            onChange={handleChange}
            placeholder="Effectif Garçons 5 ans 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.effectif_filles_5ans_3eme"
            value={formData.formulaire.effectif_filles_5ans_3eme}
            onChange={handleChange}
            placeholder="Effectif Filles 5 ans 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autochtones_garcons_1ere"
            value={formData.formulaire.autochtones_garcons_1ere}
            onChange={handleChange}
            placeholder="Autochtones Garçons 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autochtones_filles_1ere"
            value={formData.formulaire.autochtones_filles_1ere}
            onChange={handleChange}
            placeholder="Autochtones Filles 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autochtones_garcons_2eme"
            value={formData.formulaire.autochtones_garcons_2eme}
            onChange={handleChange}
            placeholder="Autochtones Garçons 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autochtones_filles_2eme"
            value={formData.formulaire.autochtones_filles_2eme}
            onChange={handleChange}
            placeholder="Autochtones Filles 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autochtones_garcons_3eme"
            value={formData.formulaire.autochtones_garcons_3eme}
            onChange={handleChange}
            placeholder="Autochtones Garçons 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autochtones_filles_3eme"
            value={formData.formulaire.autochtones_filles_3eme}
            onChange={handleChange}
            placeholder="Autochtones Filles 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.etrangers_garcons_1ere"
            value={formData.formulaire.etrangers_garcons_1ere}
            onChange={handleChange}
            placeholder="Etrangers Garçons 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.etrangers_filles_1ere"
            value={formData.formulaire.etrangers_filles_1ere}
            onChange={handleChange}
            placeholder="Etrangers Filles 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.etrangers_garcons_2eme"
            value={formData.formulaire.etrangers_garcons_2eme}
            onChange={handleChange}
            placeholder="Etrangers Garçons 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.etrangers_filles_2eme"
            value={formData.formulaire.etrangers_filles_2eme}
            onChange={handleChange}
            placeholder="Etrangers Filles 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.etrangers_garcons_3eme"
            value={formData.formulaire.etrangers_garcons_3eme}
            onChange={handleChange}
            placeholder="Etrangers Garçons 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.etrangers_filles_3eme"
            value={formData.formulaire.etrangers_filles_3eme}
            onChange={handleChange}
            placeholder="Etrangers Filles 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.orphelins_garcons_1ere"
            value={formData.formulaire.orphelins_garcons_1ere}
            onChange={handleChange}
            placeholder="Orphelins Garçons 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.orphelins_filles_1ere"
            value={formData.formulaire.orphelins_filles_1ere}
            onChange={handleChange}
            placeholder="Orphelins Filles 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.orphelins_garcons_2eme"
            value={formData.formulaire.orphelins_garcons_2eme}
            onChange={handleChange}
            placeholder="Orphelins Garçons 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.orphelins_filles_2eme"
            value={formData.formulaire.orphelins_filles_2eme}
            onChange={handleChange}
            placeholder="Orphelins Filles 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.orphelins_garcons_3eme"
            value={formData.formulaire.orphelins_garcons_3eme}
            onChange={handleChange}
            placeholder="Orphelins Garçons 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.orphelins_filles_3eme"
            value={formData.formulaire.orphelins_filles_3eme}
            onChange={handleChange}
            placeholder="Orphelins Filles 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.refugies_garcons_1ere"
            value={formData.formulaire.refugies_garcons_1ere}
            onChange={handleChange}
            placeholder="Réfugiés Garçons 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.refugies_filles_1ere"
            value={formData.formulaire.refugies_filles_1ere}
            onChange={handleChange}
            placeholder="Réfugiés Filles 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.refugies_garcons_2eme"
            value={formData.formulaire.refugies_garcons_2eme}
            onChange={handleChange}
            placeholder="Réfugiés Garçons 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.refugies_filles_2eme"
            value={formData.formulaire.refugies_filles_2eme}
            onChange={handleChange}
            placeholder="Réfugiés Filles 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.refugies_garcons_3eme"
            value={formData.formulaire.refugies_garcons_3eme}
            onChange={handleChange}
            placeholder="Réfugiés Garçons 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.refugies_filles_3eme"
            value={formData.formulaire.refugies_filles_3eme}
            onChange={handleChange}
            placeholder="Réfugiés Filles 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_externes_garcons_1ere"
            value={formData.formulaire.deplaces_externes_garcons_1ere}
            onChange={handleChange}
            placeholder="Déplacés Externes Garçons 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_externes_filles_1ere"
            value={formData.formulaire.deplaces_externes_filles_1ere}
            onChange={handleChange}
            placeholder="Déplacés Externes Filles 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_externes_garcons_2eme"
            value={formData.formulaire.deplaces_externes_garcons_2eme}
            onChange={handleChange}
            placeholder="Déplacés Externes Garçons 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_externes_filles_2eme"
            value={formData.formulaire.deplaces_externes_filles_2eme}
            onChange={handleChange}
            placeholder="Déplacés Externes Filles 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_externes_garcons_3eme"
            value={formData.formulaire.deplaces_externes_garcons_3eme}
            onChange={handleChange}
            placeholder="Déplacés Externes Garçons 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_externes_filles_3eme"
            value={formData.formulaire.deplaces_externes_filles_3eme}
            onChange={handleChange}
            placeholder="Déplacés Externes Filles 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_internes_garcons_1ere"
            value={formData.formulaire.deplaces_internes_garcons_1ere}
            onChange={handleChange}
            placeholder="Déplacés Internes Garçons 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_internes_filles_1ere"
            value={formData.formulaire.deplaces_internes_filles_1ere}
            onChange={handleChange}
            placeholder="Déplacés Internes Filles 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_internes_garcons_2eme"
            value={formData.formulaire.deplaces_internes_garcons_2eme}
            onChange={handleChange}
            placeholder="Déplacés Internes Garçons 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_internes_filles_2eme"
            value={formData.formulaire.deplaces_internes_filles_2eme}
            onChange={handleChange}
            placeholder="Déplacés Internes Filles 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_internes_garcons_3eme"
            value={formData.formulaire.deplaces_internes_garcons_3eme}
            onChange={handleChange}
            placeholder="Déplacés Internes Garçons 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.deplaces_internes_filles_3eme"
            value={formData.formulaire.deplaces_internes_filles_3eme}
            onChange={handleChange}
            placeholder="Déplacés Internes Filles 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.reintegrants_garcons_1ere"
            value={formData.formulaire.reintegrants_garcons_1ere}
            onChange={handleChange}
            placeholder="Réintégrants Garçons 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.reintegrants_filles_1ere"
            value={formData.formulaire.reintegrants_filles_1ere}
            onChange={handleChange}
            placeholder="Réintégrants Filles 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.reintegrants_garcons_2eme"
            value={formData.formulaire.reintegrants_garcons_2eme}
            onChange={handleChange}
            placeholder="Réintégrants Garçons 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.reintegrants_filles_2eme"
            value={formData.formulaire.reintegrants_filles_2eme}
            onChange={handleChange}
            placeholder="Réintégrants Filles 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.reintegrants_garcons_3eme"
            value={formData.formulaire.reintegrants_garcons_3eme}
            onChange={handleChange}
            placeholder="Réintégrants Garçons 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.reintegrants_filles_3eme"
            value={formData.formulaire.reintegrants_filles_3eme}
            onChange={handleChange}
            placeholder="Réintégrants Filles 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.handicaps_garcons_1ere"
            value={formData.formulaire.handicaps_garcons_1ere}
            onChange={handleChange}
            placeholder="Handicaps Garçons 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.handicaps_filles_1ere"
            value={formData.formulaire.handicaps_filles_1ere}
            onChange={handleChange}
            placeholder="Handicaps Filles 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.handicaps_garcons_2eme"
            value={formData.formulaire.handicaps_garcons_2eme}
            onChange={handleChange}
            placeholder="Handicaps Garçons 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.handicaps_filles_2eme"
            value={formData.formulaire.handicaps_filles_2eme}
            onChange={handleChange}
            placeholder="Handicaps Filles 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.handicaps_garcons_3eme"
            value={formData.formulaire.handicaps_garcons_3eme}
            onChange={handleChange}
            placeholder="Handicaps Garçons 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.handicaps_filles_3eme"
            value={formData.formulaire.handicaps_filles_3eme}
            onChange={handleChange}
            placeholder="Handicaps Filles 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4_hommes_1ere"
            value={formData.formulaire.enseignants_d4_hommes_1ere}
            onChange={handleChange}
            placeholder="Enseignants D4 Hommes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4_femmes_1ere"
            value={formData.formulaire.enseignants_d4_femmes_1ere}
            onChange={handleChange}
            placeholder="Enseignants D4 Femmes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4_hommes_2eme"
            value={formData.formulaire.enseignants_d4_hommes_2eme}
            onChange={handleChange}
            placeholder="Enseignants D4 Hommes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4_femmes_2eme"
            value={formData.formulaire.enseignants_d4_femmes_2eme}
            onChange={handleChange}
            placeholder="Enseignants D4 Femmes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4_hommes_3eme"
            value={formData.formulaire.enseignants_d4_hommes_3eme}
            onChange={handleChange}
            placeholder="Enseignants D4 Hommes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4_femmes_3eme"
            value={formData.formulaire.enseignants_d4_femmes_3eme}
            onChange={handleChange}
            placeholder="Enseignants D4 Femmes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_em_hommes_1ere"
            value={formData.formulaire.enseignants_em_hommes_1ere}
            onChange={handleChange}
            placeholder="Enseignants EM Hommes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_em_femmes_1ere"
            value={formData.formulaire.enseignants_em_femmes_1ere}
            onChange={handleChange}
            placeholder="Enseignants EM Femmes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_em_hommes_2eme"
            value={formData.formulaire.enseignants_em_hommes_2eme}
            onChange={handleChange}
            placeholder="Enseignants EM Hommes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_em_femmes_2eme"
            value={formData.formulaire.enseignants_em_femmes_2eme}
            onChange={handleChange}
            placeholder="Enseignants EM Femmes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_em_hommes_3eme"
            value={formData.formulaire.enseignants_em_hommes_3eme}
            onChange={handleChange}
            placeholder="Enseignants EM Hommes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_em_femmes_3eme"
            value={formData.formulaire.enseignants_em_femmes_3eme}
            onChange={handleChange}
            placeholder="Enseignants EM Femmes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4p_hommes_1ere"
            value={formData.formulaire.enseignants_d4p_hommes_1ere}
            onChange={handleChange}
            placeholder="Enseignants D4P Hommes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4p_femmes_1ere"
            value={formData.formulaire.enseignants_d4p_femmes_1ere}
            onChange={handleChange}
            placeholder="Enseignants D4P Femmes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4p_hommes_2eme"
            value={formData.formulaire.enseignants_d4p_hommes_2eme}
            onChange={handleChange}
            placeholder="Enseignants D4P Hommes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4p_femmes_2eme"
            value={formData.formulaire.enseignants_d4p_femmes_2eme}
            onChange={handleChange}
            placeholder="Enseignants D4P Femmes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4p_hommes_3eme"
            value={formData.formulaire.enseignants_d4p_hommes_3eme}
            onChange={handleChange}
            placeholder="Enseignants D4P Hommes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d4p_femmes_3eme"
            value={formData.formulaire.enseignants_d4p_femmes_3eme}
            onChange={handleChange}
            placeholder="Enseignants D4P Femmes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_p6_hommes_1ere"
            value={formData.formulaire.enseignants_p6_hommes_1ere}
            onChange={handleChange}
            placeholder="Enseignants P6 Hommes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_p6_femmes_1ere"
            value={formData.formulaire.enseignants_p6_femmes_1ere}
            onChange={handleChange}
            placeholder="Enseignants P6 Femmes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_p6_hommes_2eme"
            value={formData.formulaire.enseignants_p6_hommes_2eme}
            onChange={handleChange}
            placeholder="Enseignants P6 Hommes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_p6_femmes_2eme"
            value={formData.formulaire.enseignants_p6_femmes_2eme}
            onChange={handleChange}
            placeholder="Enseignants P6 Femmes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_p6_hommes_3eme"
            value={formData.formulaire.enseignants_p6_hommes_3eme}
            onChange={handleChange}
            placeholder="Enseignants P6 Hommes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_p6_femmes_3eme"
            value={formData.formulaire.enseignants_p6_femmes_3eme}
            onChange={handleChange}
            placeholder="Enseignants P6 Femmes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d6_hommes_1ere"
            value={formData.formulaire.enseignants_d6_hommes_1ere}
            onChange={handleChange}
            placeholder="Enseignants D6 Hommes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d6_femmes_1ere"
            value={formData.formulaire.enseignants_d6_femmes_1ere}
            onChange={handleChange}
            placeholder="Enseignants D6 Femmes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d6_hommes_2eme"
            value={formData.formulaire.enseignants_d6_hommes_2eme}
            onChange={handleChange}
            placeholder="Enseignants D6 Hommes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d6_femmes_2eme"
            value={formData.formulaire.enseignants_d6_femmes_2eme}
            onChange={handleChange}
            placeholder="Enseignants D6 Femmes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d6_hommes_3eme"
            value={formData.formulaire.enseignants_d6_hommes_3eme}
            onChange={handleChange}
            placeholder="Enseignants D6 Hommes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_d6_femmes_3eme"
            value={formData.formulaire.enseignants_d6_femmes_3eme}
            onChange={handleChange}
            placeholder="Enseignants D6 Femmes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_autres_hommes_1ere"
            value={formData.formulaire.enseignants_autres_hommes_1ere}
            onChange={handleChange}
            placeholder="Enseignants Autres Hommes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_autres_femmes_1ere"
            value={formData.formulaire.enseignants_autres_femmes_1ere}
            onChange={handleChange}
            placeholder="Enseignants Autres Femmes 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_autres_hommes_2eme"
            value={formData.formulaire.enseignants_autres_hommes_2eme}
            onChange={handleChange}
            placeholder="Enseignants Autres Hommes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_autres_femmes_2eme"
            value={formData.formulaire.enseignants_autres_femmes_2eme}
            onChange={handleChange}
            placeholder="Enseignants Autres Femmes 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_autres_hommes_3eme"
            value={formData.formulaire.enseignants_autres_hommes_3eme}
            onChange={handleChange}
            placeholder="Enseignants Autres Hommes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.enseignants_autres_femmes_3eme"
            value={formData.formulaire.enseignants_autres_femmes_3eme}
            onChange={handleChange}
            placeholder="Enseignants Autres Femmes 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.personnel_eligible_retraite"
            value={formData.formulaire.personnel_eligible_retraite}
            onChange={handleChange}
            placeholder="Personnel Eligible Retraite"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.vih_sida_enseigne"
            checked={formData.formulaire.vih_sida_enseigne}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.vih_sida_programme"
            checked={formData.formulaire.vih_sida_programme}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.vih_sida_discipline"
            checked={formData.formulaire.vih_sida_discipline}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.vih_sida_active_parascolaire"
            checked={formData.formulaire.vih_sida_active_parascolaire}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.sante_reproductive_enseigne"
            checked={formData.formulaire.sante_reproductive_enseigne}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.sante_reproductive_programme"
            checked={formData.formulaire.sante_reproductive_programme}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.sante_reproductive_parascolaire"
            checked={formData.formulaire.sante_reproductive_parascolaire}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.sante_reproductive_discipline"
            checked={formData.formulaire.sante_reproductive_discipline}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.sensibilisation_abus_enseigne"
            checked={formData.formulaire.sensibilisation_abus_enseigne}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.sensibilisation_abus_programme"
            checked={formData.formulaire.sensibilisation_abus_programme}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.sensibilisation_abus_discipline"
            checked={formData.formulaire.sensibilisation_abus_discipline}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.sensibilisation_abus_parascolaire"
            checked={formData.formulaire.sensibilisation_abus_parascolaire}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.education_environnementale_enseigne"
            checked={formData.formulaire.education_environnementale_enseigne}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.education_environnementale_programme"
            checked={formData.formulaire.education_environnementale_programme}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.education_environnementale_discipline"
            checked={formData.formulaire.education_environnementale_discipline}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.education_environnementale_parascolaire"
            checked={
              formData.formulaire.education_environnementale_parascolaire
            }
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.reglement_securite_physique"
            checked={formData.formulaire.reglement_securite_physique}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.reglement_discrimination"
            checked={formData.formulaire.reglement_discrimination}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.reglement_harcelement"
            checked={formData.formulaire.reglement_harcelement}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.cellule_orientation_evf"
            checked={formData.formulaire.cellule_orientation_evf}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="checkbox"
            name="formulaire.enseignants_evf_formes"
            checked={formData.formulaire.enseignants_evf_formes}
            onChange={handleChange}
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_enseignants_evf"
            value={formData.formulaire.nb_enseignants_evf}
            onChange={handleChange}
            placeholder="Nombre Enseignants EVF"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_enseignants_forme_h"
            value={formData.formulaire.nb_enseignants_forme_h}
            onChange={handleChange}
            placeholder="Nombre Enseignants Formés H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_enseignants_forme_f"
            value={formData.formulaire.nb_enseignants_forme_f}
            onChange={handleChange}
            placeholder="Nombre Enseignants Formés F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_enseignants_evf_dispense_h"
            value={formData.formulaire.nb_enseignants_evf_dispense_h}
            onChange={handleChange}
            placeholder="Nombre Enseignants EVF Dispensés H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_enseignants_evf_dispense_f"
            value={formData.formulaire.nb_enseignants_evf_dispense_f}
            onChange={handleChange}
            placeholder="Nombre Enseignants EVF Dispensés F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4_directeur_h"
            value={formData.formulaire.d4_directeur_h}
            onChange={handleChange}
            placeholder="D4 Directeur H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4_directeur_f"
            value={formData.formulaire.d4_directeur_f}
            onChange={handleChange}
            placeholder="D4 Directeur F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4_directeur_adjoint_h"
            value={formData.formulaire.d4_directeur_adjoint_h}
            onChange={handleChange}
            placeholder="D4 Directeur Adjoint H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4_directeur_adjoint_f"
            value={formData.formulaire.d4_directeur_adjoint_f}
            onChange={handleChange}
            placeholder="D4 Directeur Adjoint F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4_surveillant_h"
            value={formData.formulaire.d4_surveillant_h}
            onChange={handleChange}
            placeholder="D4 Surveillant H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4_surveillant_f"
            value={formData.formulaire.d4_surveillant_f}
            onChange={handleChange}
            placeholder="D4 Surveillant F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4_ouvrier_h"
            value={formData.formulaire.d4_ouvrier_h}
            onChange={handleChange}
            placeholder="D4 Ouvrier H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4_ouvrier_f"
            value={formData.formulaire.d4_ouvrier_f}
            onChange={handleChange}
            placeholder="D4 Ouvrier F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.em_directeur_h"
            value={formData.formulaire.em_directeur_h}
            onChange={handleChange}
            placeholder="EM Directeur H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.em_directeur_f"
            value={formData.formulaire.em_directeur_f}
            onChange={handleChange}
            placeholder="EM Directeur F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.em_directeur_adjoint_h"
            value={formData.formulaire.em_directeur_adjoint_h}
            onChange={handleChange}
            placeholder="EM Directeur Adjoint H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.em_directeur_adjoint_f"
            value={formData.formulaire.em_directeur_adjoint_f}
            onChange={handleChange}
            placeholder="EM Directeur Adjoint F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.em_surveillant_h"
            value={formData.formulaire.em_surveillant_h}
            onChange={handleChange}
            placeholder="EM Surveillant H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.em_surveillant_f"
            value={formData.formulaire.em_surveillant_f}
            onChange={handleChange}
            placeholder="EM Surveillant F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.em_ouvrier_h"
            value={formData.formulaire.em_ouvrier_h}
            onChange={handleChange}
            placeholder="EM Ouvrier H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.em_ouvrier_f"
            value={formData.formulaire.em_ouvrier_f}
            onChange={handleChange}
            placeholder="EM Ouvrier F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4p_directeur_h"
            value={formData.formulaire.d4p_directeur_h}
            onChange={handleChange}
            placeholder="D4P Directeur H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4p_directeur_f"
            value={formData.formulaire.d4p_directeur_f}
            onChange={handleChange}
            placeholder="D4P Directeur F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4p_directeur_adjoint_h"
            value={formData.formulaire.d4p_directeur_adjoint_h}
            onChange={handleChange}
            placeholder="D4P Directeur Adjoint H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4p_directeur_adjoint_f"
            value={formData.formulaire.d4p_directeur_adjoint_f}
            onChange={handleChange}
            placeholder="D4P Directeur Adjoint F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4p_surveillant_h"
            value={formData.formulaire.d4p_surveillant_h}
            onChange={handleChange}
            placeholder="D4P Surveillant H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4p_surveillant_f"
            value={formData.formulaire.d4p_surveillant_f}
            onChange={handleChange}
            placeholder="D4P Surveillant F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4p_ouvrier_h"
            value={formData.formulaire.d4p_ouvrier_h}
            onChange={handleChange}
            placeholder="D4P Ouvrier H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d4p_ouvrier_f"
            value={formData.formulaire.d4p_ouvrier_f}
            onChange={handleChange}
            placeholder="D4P Ouvrier F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.p6_directeur_h"
            value={formData.formulaire.p6_directeur_h}
            onChange={handleChange}
            placeholder="P6 Directeur H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.p6_directeur_f"
            value={formData.formulaire.p6_directeur_f}
            onChange={handleChange}
            placeholder="P6 Directeur F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.p6_directeur_adjoint_h"
            value={formData.formulaire.p6_directeur_adjoint_h}
            onChange={handleChange}
            placeholder="P6 Directeur Adjoint H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.p6_directeur_adjoint_f"
            value={formData.formulaire.p6_directeur_adjoint_f}
            onChange={handleChange}
            placeholder="P6 Directeur Adjoint F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.p6_surveillant_h"
            value={formData.formulaire.p6_surveillant_h}
            onChange={handleChange}
            placeholder="P6 Surveillant H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.p6_surveillant_f"
            value={formData.formulaire.p6_surveillant_f}
            onChange={handleChange}
            placeholder="P6 Surveillant F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.p6_ouvrier_h"
            value={formData.formulaire.p6_ouvrier_h}
            onChange={handleChange}
            placeholder="P6 Ouvrier H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.p6_ouvrier_f"
            value={formData.formulaire.p6_ouvrier_f}
            onChange={handleChange}
            placeholder="P6 Ouvrier F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d6_directeur_h"
            value={formData.formulaire.d6_directeur_h}
            onChange={handleChange}
            placeholder="D6 Directeur H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d6_directeur_f"
            value={formData.formulaire.d6_directeur_f}
            onChange={handleChange}
            placeholder="D6 Directeur F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d6_directeur_adjoint_h"
            value={formData.formulaire.d6_directeur_adjoint_h}
            onChange={handleChange}
            placeholder="D6 Directeur Adjoint H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d6_directeur_adjoint_f"
            value={formData.formulaire.d6_directeur_adjoint_f}
            onChange={handleChange}
            placeholder="D6 Directeur Adjoint F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d6_surveillant_h"
            value={formData.formulaire.d6_surveillant_h}
            onChange={handleChange}
            placeholder="D6 Surveillant H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d6_surveillant_f"
            value={formData.formulaire.d6_surveillant_f}
            onChange={handleChange}
            placeholder="D6 Surveillant F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d6_ouvrier_h"
            value={formData.formulaire.d6_ouvrier_h}
            onChange={handleChange}
            placeholder="D6 Ouvrier H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.d6_ouvrier_f"
            value={formData.formulaire.d6_ouvrier_f}
            onChange={handleChange}
            placeholder="D6 Ouvrier F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autres_directeur_h"
            value={formData.formulaire.autres_directeur_h}
            onChange={handleChange}
            placeholder="Autres Directeur H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autres_directeur_f"
            value={formData.formulaire.autres_directeur_f}
            onChange={handleChange}
            placeholder="Autres Directeur F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autres_directeur_adjoint_h"
            value={formData.formulaire.autres_directeur_adjoint_h}
            onChange={handleChange}
            placeholder="Autres Directeur Adjoint H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autres_directeur_adjoint_f"
            value={formData.formulaire.autres_directeur_adjoint_f}
            onChange={handleChange}
            placeholder="Autres Directeur Adjoint F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autres_surveillant_h"
            value={formData.formulaire.autres_surveillant_h}
            onChange={handleChange}
            placeholder="Autres Surveillant H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autres_surveillant_f"
            value={formData.formulaire.autres_surveillant_f}
            onChange={handleChange}
            placeholder="Autres Surveillant F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autres_ouvrier_h"
            value={formData.formulaire.autres_ouvrier_h}
            onChange={handleChange}
            placeholder="Autres Ouvrier H"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.autres_ouvrier_f"
            value={formData.formulaire.autres_ouvrier_f}
            onChange={handleChange}
            placeholder="Autres Ouvrier F"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.manuels_français_1ere"
            value={formData.formulaire.manuels_français_1ere}
            onChange={handleChange}
            placeholder="Manuels Français 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.manuels_français_2eme"
            value={formData.formulaire.manuels_français_2eme}
            onChange={handleChange}
            placeholder="Manuels Français 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.manuels_français_3eme"
            value={formData.formulaire.manuels_français_3eme}
            onChange={handleChange}
            placeholder="Manuels Français 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.manuels_comptage_1ere"
            value={formData.formulaire.manuels_comptage_1ere}
            onChange={handleChange}
            placeholder="Manuels Comptage 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.manuels_comptage_2eme"
            value={formData.formulaire.manuels_comptage_2eme}
            onChange={handleChange}
            placeholder="Manuels Comptage 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.manuels_comptage_3eme"
            value={formData.formulaire.manuels_comptage_3eme}
            onChange={handleChange}
            placeholder="Manuels Comptage 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.guides_français_1ere"
            value={formData.formulaire.guides_français_1ere}
            onChange={handleChange}
            placeholder="Guides Français 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.guides_français_2eme"
            value={formData.formulaire.guides_français_2eme}
            onChange={handleChange}
            placeholder="Guides Français 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.guides_français_3eme"
            value={formData.formulaire.guides_français_3eme}
            onChange={handleChange}
            placeholder="Guides Français 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.salle_activites_dur_bon"
            value={formData.formulaire.salle_activites_dur_bon}
            onChange={handleChange}
            placeholder="Salle Activités Dur Bon"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.salle_activites_dur_mauvais"
            value={formData.formulaire.salle_activites_dur_mauvais}
            onChange={handleChange}
            placeholder="Salle Activités Dur Mauvais"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.salle_repos_dur_bon"
            value={formData.formulaire.salle_repos_dur_bon}
            onChange={handleChange}
            placeholder="Salle Repos Dur Bon"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.salle_repos_dur_mauvais"
            value={formData.formulaire.salle_repos_dur_mauvais}
            onChange={handleChange}
            placeholder="Salle Repos Dur Mauvais"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.salle_jeux_dur_bon"
            value={formData.formulaire.salle_jeux_dur_bon}
            onChange={handleChange}
            placeholder="Salle Jeux Dur Bon"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.salle_jeux_dur_mauvais"
            value={formData.formulaire.salle_jeux_dur_mauvais}
            onChange={handleChange}
            placeholder="Salle Jeux Dur Mauvais"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.salle_attente_dur_bon"
            value={formData.formulaire.salle_attente_dur_bon}
            onChange={handleChange}
            placeholder="Salle Attente Dur Bon"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.salle_attente_dur_mauvais"
            value={formData.formulaire.salle_attente_dur_mauvais}
            onChange={handleChange}
            placeholder="Salle Attente Dur Mauvais"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.bureau_dur_bon"
            value={formData.formulaire.bureau_dur_bon}
            onChange={handleChange}
            placeholder="Bureau Dur Bon"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.bureau_dur_mauvais"
            value={formData.formulaire.bureau_dur_mauvais}
            onChange={handleChange}
            placeholder="Bureau Dur Mauvais"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.magasin_dur_bon"
            value={formData.formulaire.magasin_dur_bon}
            onChange={handleChange}
            placeholder="Magasin Dur Bon"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.magasin_dur_mauvais"
            value={formData.formulaire.magasin_dur_mauvais}
            onChange={handleChange}
            placeholder="Magasin Dur Mauvais"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_salles_autorisees_1ere"
            value={formData.formulaire.nb_salles_autorisees_1ere}
            onChange={handleChange}
            placeholder="Nombre Salles Autorisées 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_salles_organisees_1ere"
            value={formData.formulaire.nb_salles_organisees_1ere}
            onChange={handleChange}
            placeholder="Nombre Salles Organisées 1ère"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_salles_autorisees_2eme"
            value={formData.formulaire.nb_salles_autorisees_2eme}
            onChange={handleChange}
            placeholder="Nombre Salles Autorisées 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_salles_organisees_2eme"
            value={formData.formulaire.nb_salles_organisees_2eme}
            onChange={handleChange}
            placeholder="Nombre Salles Organisées 2ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_salles_autorisees_3eme"
            value={formData.formulaire.nb_salles_autorisees_3eme}
            onChange={handleChange}
            placeholder="Nombre Salles Autorisées 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="number"
            name="formulaire.nb_salles_organisees_3eme"
            value={formData.formulaire.nb_salles_organisees_3eme}
            onChange={handleChange}
            placeholder="Nombre Salles Organisées 3ème"
          />
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="text"
            name="formulaire.is_synced"
            value={formData.formulaire.is_synced}
            onChange={handleChange}
            placeholder="Is Synced"
          />

          <button type="submit">Submit</button>
        </form>
      </PageContentWrapper>
    </div>
  );
};

export default St1Form;
