import PageContentWrapper from "@/components/layout/PageContentWrapper";
import UserProfileForm from "@/components/users/UserProfileForm";

export default function ProfilePage() {
  return (
    <PageContentWrapper pageTitle="Mon Profil">
      <UserProfileForm />
    </PageContentWrapper>
  );
}
