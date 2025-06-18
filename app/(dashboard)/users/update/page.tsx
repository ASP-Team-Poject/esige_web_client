import PageContentWrapper from "@/components/layout/PageContentWrapper";
import EditUserForm from "@/components/users/EditUserForm";

export default function NewUserPage() {
  return (
    <PageContentWrapper pageTitle="Modifier l'Utilisateur">
      <EditUserForm />
    </PageContentWrapper>
  );
}
