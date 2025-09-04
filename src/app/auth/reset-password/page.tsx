import resetPass from "@/assets/images/auth/reset-pass.jpg";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import AuthLayout from "@/components/layout/AuthLayout";

export default function Page() {
  return (
    <AuthLayout
      imageSrc={resetPass}
      title="Reset Your Password"
      subTitle="Enter your email and we'll send you a link to reset your password."
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}
