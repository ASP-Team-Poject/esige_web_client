import React from "react";
import H1 from "./basic/H1";
import Select from "./basic/Select";
import Button from "./basic/Button";
import { Save, Search } from "lucide-react";
import PageContentWrapper from "./layout/PageContentWrapper";

const Reporting = () => {
  return (
    <PageContentWrapper pageTitle={"Générer Annuaire"}>
      <form className="flex gap-4">
        <Select
          label="Annee"
          options={[
            "2025-2026",
            "2024-2025",
            "2023-2024",
            "2022-2023",
            "2021-2022",
            "2020-2021",
          ]}
        />
        <Select
          label="Type de tableau"
          options={[
            "Tableau 5",
            "Tableau 4",
            "Tableau 3",
            "Tableau 2",
            "Tableau 1",
          ]}
        />
        <Select
          label="Type d'enseignement"
          options={["ST1(Prescolaire)", "ST2(Primaire)", "ST3(Secondaire)"]}
        />
        <Button
          className="h-fit self-end"
          type="submit"
          title="Rechercher"
          icon={<Search />}
        />
      </form>
      <Button
        className="h-fit w-fit"
        type="button"
        title="Enregistrer"
        icon={<Save />}
      />
    </PageContentWrapper>
  );
};

export default Reporting;
