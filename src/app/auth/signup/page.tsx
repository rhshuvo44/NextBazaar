import SignUpForm from "@/components/auth/SignUpForm";
import AuthLayout from "@/components/layout/AuthLayout";
import singup from "@/assets/images/auth/singup.jpg";
export default function Page() {
  return (
    <AuthLayout
      imageSrc={singup}
      title="Create Account"
      subTitle="Sign up for free to access to in any of our products and features"
    >
      <SignUpForm />
    </AuthLayout>
  );
}
