import PageContentWrapper from "@/components/layout/PageContentWrapper";
import EditSchoolForm from "@/components/schools/EditSchoolForm";

export default function NewSchoolPage() {
  return (
    <PageContentWrapper pageTitle="Créer un Établissement">
      <EditSchoolForm />
    </PageContentWrapper>
  );
}
