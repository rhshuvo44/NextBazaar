import checkEmail from "@/assets/images/auth/check-email.jpg";
import CheckEmail from "@/components/auth/CheckEmail";
import AuthLayout from "@/components/layout/AuthLayout";

export default function Page() {
  return (
    <AuthLayout
      imageSrc={checkEmail}
      title="Check Email"
      subTitle="Please check your email inbox and click on the provided link to reset your
password . If you don’t receive email, Click here to resend"
    >
      <CheckEmail />
    </AuthLayout>
  );
}
