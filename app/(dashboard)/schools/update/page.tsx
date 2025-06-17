import PageContentWrapper from "@/components/layout/PageContentWrapper";
import EditSchoolForm from "@/components/schools/EditSchoolForm";

export default function NewSchoolPage() {
  return (
    <PageContentWrapper pageTitle="Modifier l'Établissement">
      <EditSchoolForm />
    </PageContentWrapper>
  );
}
