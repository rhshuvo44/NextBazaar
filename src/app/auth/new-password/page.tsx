import newPass from "@/assets/images/auth/new-pass.jpg";
import NewPasswordForm from "@/components/auth/NewPasswordForm";
import AuthLayout from "@/components/layout/AuthLayout";

export default function Page() {
  return (
    <AuthLayout
      imageSrc={newPass}
      title="Create New Password"
      subTitle="Your new password must be different from previous used passwords."
    >
      <NewPasswordForm />
    </AuthLayout>
  );
}
