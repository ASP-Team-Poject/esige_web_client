import PageContentWrapper from "@/components/layout/PageContentWrapper";
import CreateUserForm from "@/components/users/CreateUserForm";

export default function NewUserPage() {
  return (
    <PageContentWrapper pageTitle="Nouveau Utilisateur">
      <CreateUserForm />
    </PageContentWrapper>
  );
}
