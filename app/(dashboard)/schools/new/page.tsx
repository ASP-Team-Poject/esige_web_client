import PageContentWrapper from "@/components/layout/PageContentWrapper";
import CreateSchoolForm from "@/components/schools/CreateSchoolForm";

export default function NewSchoolPage() {
  return (
    <PageContentWrapper pageTitle="Nouvel Établissement">
      <CreateSchoolForm />
    </PageContentWrapper>
  );
}
