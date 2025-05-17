"use client";

import { localStoragekeys } from "@/util/constants";
import React, { useEffect, useState } from "react";
import PageContentWrapper from "./layout/PageContentWrapper";
import { SchoolStType, SchoolType, SchoolYearType } from "@/util/types";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Button from "./basic/Button";
import { Download, Save } from "lucide-react";
import Loader from "./basic/Loader";
import Select2 from "./basic/Select2";
import Input2 from "./basic/Input2";

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

  const handleChange = (e: any) => {
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              <label className="flex gap-1 items-center cursor-pointer whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.regime_gestion"
                  value={formData.formulaire.regime_gestion}
                  onChange={handleChange}
                />
                Autres
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <label
                htmlFor="formulaire.reference_juridique"
                className="whitespace-nowrap"
              >
                {
                  "1.17. Référence juridique (arrêté d'agrément/d'autorisation):"
                }
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

            <div className="flex gap-4 items-center">
              <label
                htmlFor="formulaire.reference_juridique"
                className="whitespace-nowrap"
              >
                {"1.19. L'établissement est :"}
              </label>
              <label className="flex items-center gap-1 whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.etat_etablissement"
                  id="formulaire.etat_etablissement"
                  value={formData.formulaire.etat_etablissement}
                  onChange={handleChange}
                />
                {"Mécanisé et payé"}
              </label>
              <label className="flex items-center gap-1 whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.etat_etablissement"
                  id="formulaire.etat_etablissement"
                  value={formData.formulaire.etat_etablissement}
                  onChange={handleChange}
                />
                {"Mécanisé et non payé"}
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <label
                htmlFor="formulaire.reference_juridique"
                className="whitespace-nowrap"
              >
                {"1.20. Statut d'occupation parcellaire :"}
              </label>
              <label className="flex items-center gap-1 whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.statut_occupation"
                  id="formulaire.statut_occupation"
                  value={formData.formulaire.statut_occupation}
                  onChange={handleChange}
                />
                {"Propriétaire"}
              </label>
              <label className="flex items-center gap-1 whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.statut_occupation"
                  id="formulaire.statut_occupation"
                  value={formData.formulaire.statut_occupation}
                  onChange={handleChange}
                />
                {"Co-Propriétaire"}
              </label>
              <label className="flex items-center gap-1 whitespace-nowrap">
                <input
                  className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                  type="radio"
                  name="formulaire.statut_occupation"
                  id="formulaire.statut_occupation"
                  value={formData.formulaire.statut_occupation}
                  onChange={handleChange}
                />
                {"Locataire"}
              </label>
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <label className="font-bold">
              {"2. INFORMATIONS GENERALES SUR L'ETABLISSEMENT"}
            </label>
            <label>
              {"L'établissement dispose-t-il: (cocher la case correspondante)"}
            </label>
            <Select2
              name="formulaire.programmes_officiels"
              title="2.1. Des programmes officiels de cours ?"
              handleChange={handleChange}
              value={formData.formulaire.programmes_officiels}
            />
            <Select2
              name="formulaire.copa"
              title="2.2. D'un Copa ?"
              handleChange={handleChange}
              value={formData.formulaire.copa}
            />
            <Select2
              name="formulaire.copaOperationnel"
              title="2.3. Si oui, le COPA est-il opérationnel dans votre établissement ?"
              handleChange={handleChange}
              value={formData.formulaire.copa} // TOCHANGE
            />
            <div className="flex gap-2 items-center">
              <label
                htmlFor="formulaire.reference_juridique"
                className="whitespace-nowrap"
              >
                {
                  "2.4. Le nombre de réunions tenues avec les PV l'année passée :"
                }
              </label>
              <input
                className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
                type="number"
                name="formulaire.nb_reunion_annee"
                id="formulaire.nb_reunion_annee_passee"
                value={formData.formulaire.nombreEleves}
                onChange={handleChange}
                placeholder="nombre de réunions"
              />
            </div>
            <Input2
              handleChange={handleChange}
              placeholder=""
              value={formData.formulaire.nombreEleves} // TOCHANGE
              name="formData.formulaire.nb_femme_copa"
              label="2.5. Nombre de femmes dans le COPA?"
            />
            <Select2
              name="formulaire.copa"
              title="2.6. D'un Coges ?"
              handleChange={handleChange}
              value={formData.formulaire.coges}
            />
            <Select2
              name="formulaire.cogesOperationnel"
              title="2.7. Si oui, le COGES est-il opérationnel dans votre école ?"
              handleChange={handleChange}
              value={formData.formulaire.coges} // TOCHANGE
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

          {isGeneratingPdf ? (
            ""
          ) : (
            <Button
              className="bg-primary_color self-end"
              type="submit"
              title="Enregistrer"
              icon={<Save />}
            />
          )}
        </form>
      </PageContentWrapper>
    </div>
  );
};

export default St1Form;
