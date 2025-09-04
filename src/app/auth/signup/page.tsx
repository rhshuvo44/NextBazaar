import SignUpForm from "@/components/auth/SignUpForm";
import AuthLayout from "@/components/layout/AuthLayout";
import singup from "@/assets/images/auth/singup.jpg";
export default function Page() {
  return (
    <AuthLayout imageSrc={singup} title="Create Account">
      <SignUpForm />
    </AuthLayout>
  );
}
