import verification from "@/assets/images/auth/varification.jpg";
import VerificationForm from "@/components/auth/VerificationForm";
import AuthLayout from "@/components/layout/AuthLayout";
export default function Page() {
  return (
    <AuthLayout imageSrc={verification} title="Verification Code">
      <VerificationForm />
    </AuthLayout>
  );
}
