import verification from "@/assets/images/auth/varification.jpg";
import VerificationForm from "@/components/auth/VerificationForm";
import AuthLayout from "@/components/layout/AuthLayout";
export default function Page() {
  return (
    <AuthLayout
      imageSrc={verification}
      title="Verification Code"
      subTitle="Verify your code. We have sent the code to your email."
    >
      <VerificationForm />
    </AuthLayout>
  );
}
