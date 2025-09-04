import SignInForm from "@/components/auth/SignInForm";
import AuthLayout from "@/components/layout/AuthLayout";
import signin from '@/assets/images/auth/singin.jpg';

export default function Page() {
  return (
    <AuthLayout imageSrc={signin} title="Sign In Page">
      <SignInForm />
    </AuthLayout>
  );
}
